import Link from 'next/link'
import type { UrlObject } from 'url'

import { cn } from '@/utils'
import LogoIcon from '@/components/icons/logo'

interface Props {
  href: string | UrlObject
  className?: string
}

export default function Logo({ href, className }: Props) {
  return (
    <Link href={href} className={cn('flex items-center gap-2', className)}>
      <LogoIcon className="size-10" />
      <h2 className="text-bold-20 text-foreground">Eduka.</h2>
    </Link>
  )
}
