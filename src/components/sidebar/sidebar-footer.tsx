'use client'

import { useAuth } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

import { AUTHENTICATION_LINKS } from '@/constants/list'
import { SidebarItem } from '@/components/sidebar'
import { Button } from '@/components/ui/button'

export default function SidebarFooter() {
  const { isSignedIn, signOut } = useAuth()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isSignedIn === undefined) return null

  return (
    <div className="mt-auto">
      {isSignedIn === false ? (
        <ul className="space-y-4">
          {AUTHENTICATION_LINKS.map(({ href, id, label }) => (
            <li key={id}>
              <SidebarItem href={href} variant={href === '/sign-in' ? 'signIn' : 'signUp'} className="text-medium-16">
                {label}
              </SidebarItem>
            </li>
          ))}
        </ul>
      ) : (
        <Button className="w-full" onClick={() => signOut()}>
          Đăng xuất
        </Button>
      )}
    </div>
  )
}
