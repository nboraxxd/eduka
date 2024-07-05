import { Webhook } from 'svix'
import { NextResponse } from 'next/server'
import { WebhookEvent, clerkClient } from '@clerk/nextjs/server'

import envConfig from '@/constants/config'
import { createUser } from '@/lib/actions/user.action'

export async function POST(req: Request) {
  const svix_id = req.headers.get('svix-id') ?? ''
  const svix_timestamp = req.headers.get('svix-timestamp') ?? ''
  const svix_signature = req.headers.get('svix-signature') ?? ''

  const payload = await req.json()
  const body = JSON.stringify(payload)

  const sivx = new Webhook(envConfig.WEBHOOK_SECRET)

  let evt: WebhookEvent

  try {
    evt = sivx.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Bad Request', { status: 400 })
  }

  const eventType = evt.type

  if (eventType === 'user.created') {
    const { id, email_addresses, image_url, username, first_name, last_name } = evt.data

    const [response] = await Promise.all([
      createUser({
        clerkId: id,
        username: username!,
        email: email_addresses[0].email_address,
        avatar: image_url,
        name: !first_name && !last_name ? undefined : `${first_name ?? ''} ${last_name ?? ''}`.trim(),
      }),
      clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          role: 'User',
        },
      }),
    ])

    return NextResponse.json(response)
  }

  return new Response('OK', { status: 200 })
}
