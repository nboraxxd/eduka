import { Logo } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { SIDEBARLINKS } from '@/constants'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="flex flex-col bg-sidebar-background px-5 pb-14">
      <Logo href="/" wrapperClassName="h-20 py-3" />

      <ul className="my-5 space-y-3">
        {SIDEBARLINKS.map(({ href, icon: Icon, id, label }) => (
          <li key={id}>
            <Link
              href={href}
              className="flex items-center gap-3 rounded-lg p-3 py-2.5 text-item-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Icon className="size-5" />
              <span className="medium-16">{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button className="w-full">Logout</Button>
      </div>
    </aside>
  )
}
