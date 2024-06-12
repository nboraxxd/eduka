'use client'

import { useAuth } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

import { AUTHENTICATION_LINKS } from '@/constants/list'
import { SidebarItem } from '@/components/sidebar'
import { Button } from '@/components/ui/button'

export default function SidebarFooter() {
  const { isSignedIn, signOut } = useAuth()

  const [isSignedInLocal, setIsSignedInLocal] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setIsSignedInLocal(isSignedIn)
  }, [isSignedIn])

  if (isSignedInLocal === undefined && isSignedIn === undefined) return null

  return (
    <div className="mt-auto">
      {!isSignedIn ? (
        <ul className="space-y-4">
          {AUTHENTICATION_LINKS.map(({ href, icon: Icon, id, label }) => (
            <li key={id}>
              <SidebarItem href={href} variant={href === '/sign-in' ? 'signIn' : 'signUp'}>
                <Icon className="size-5" />
                <span className="text-medium-16">{label}</span>
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
