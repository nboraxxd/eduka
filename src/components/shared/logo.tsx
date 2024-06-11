import Link from 'next/link'
import type { UrlObject } from 'url'

import { cn } from '@/lib/utils'
import LogoIcon from '@/components/icons/logo'

interface Props {
  href: string | UrlObject
  wrapperClassName?: string
}

export default function Logo({ href, wrapperClassName }: Props) {
  return (
    <Link href={href} className={cn('flex items-center gap-2', wrapperClassName)}>
      <LogoIcon className="size-10" />
      <h2 className="text-foreground bold-20">Eduka</h2>
    </Link>
  )
}
