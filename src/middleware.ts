import { NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

import { checkRole } from '@/utils'

const isProtectedRoute = createRouteMatcher(['/manage(.*)'])
const isManageRoute = createRouteMatcher(['/manage(.*)'])
const isAuthRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware((auth, req) => {
  const { userId, sessionClaims } = auth()
  console.log(checkRole('Admin', sessionClaims), sessionClaims?.metadata.role)

  if (!userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn()
  }

  if (userId && isAuthRoute(req)) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!checkRole('Admin', sessionClaims) && !checkRole('Expert', sessionClaims) && isManageRoute(req)) {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
