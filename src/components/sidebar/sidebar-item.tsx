'use client'

import Link from 'next/link'
import { UrlObject } from 'url'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const sidebarItemVariants = cva('flex items-center gap-3 rounded-lg p-3 py-2.5 transition-colors', {
  variants: {
    variant: {
      default: 'text-sidebar-foreground hover:text-sidebar-active-foreground',
      active: 'svg-animate bg-sidebar-active/10 text-sidebar-active-foreground',
      signIn: 'justify-center text-primary-foreground bg-primary/90 hover:bg-primary',
      signUp: 'justify-center text-secondary-foreground bg-secondary/90 hover:bg-secondary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface Props extends VariantProps<typeof sidebarItemVariants> {
  href: string | UrlObject
  children: React.ReactNode
  className?: string
}

export default function SidebarItem({ href, children, className, variant }: Props) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(sidebarItemVariants({ variant: pathname === href ? 'active' : variant, className }))}
    >
      {children}
    </Link>
  )
}
