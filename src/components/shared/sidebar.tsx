import { NAVIGATION_LINKS } from '@/constants/list'
import { Button } from '@/components/ui/button'
import Logo from '@/components/shared/logo'
import SidebarLink from '@/components/shared/sidebar-link'

export default function Sidebar() {
  return (
    <aside className="flex flex-col bg-sidebar-background px-5 pb-14">
      <Logo href="/" wrapperClassName="h-20 py-3" />

      <ul className="my-5 space-y-3">
        {NAVIGATION_LINKS.map(({ href, icon: Icon, id, label }) => (
          <li key={id}>
            <SidebarLink href={href}>
              <Icon className="size-5" />
              <span className="medium-16">{label}</span>
            </SidebarLink>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button className="w-full">Logout</Button>
      </div>
    </aside>
  )
}
