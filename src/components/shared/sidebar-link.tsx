'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface Props {
  href: string
  children: React.ReactNode
}

export default function SidebarLink({ href, children }: Props) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg p-3 py-2.5 text-item-foreground transition-colors',
        pathname === href ? 'svg-animate bg-primary/10 text-primary' : 'hover:bg-primary/10 hover:text-primary'
      )}
    >
      {children}
    </Link>
  )
}
