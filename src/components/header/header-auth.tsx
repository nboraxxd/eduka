'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UserButton, useAuth } from '@clerk/nextjs'

import { ProfileIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function HeaderAuth() {
  const { isSignedIn } = useAuth()
  const [isSignedInLocal, setIsSignedInLocal] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setIsSignedInLocal(isSignedIn)
  }, [isSignedIn])

  if (isSignedInLocal === undefined && isSignedIn === undefined) return null

  return isSignedIn ? (
    <UserButton
      appearance={{
        elements: {
          avatarBox: 'size-8',
          button: 'text-popover-foreground hover:text-accent-foreground',
          userButtonPopoverMain: 'bg-popover text-popover-foreground',
          userButtonPopoverActions: 'border-divider/10',
          userButtonPopoverActionButton: '!border-divider/10',
          userButtonPopoverFooter: {
            background: 'hsl(var(--popover))',
          },
        },
      }}
    />
  ) : (
    <Button asChild size="icon" className="gap-1.5 md:w-auto md:px-5">
      <Link href="/sign-in">
        <ProfileIcon className="size-5 md:hidden" />
        <span className="hidden md:inline">Đăng nhập</span>
      </Link>
    </Button>
  )
}
