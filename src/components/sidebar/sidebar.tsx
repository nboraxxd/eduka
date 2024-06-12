import { NAVIGATION_LINKS } from '@/constants/list'

import { SidebarFooter, SidebarItem } from '@/components/sidebar'
import { Logo } from '@/components/shared'

export default function Sidebar() {
  return (
    <aside className="hidden border-r lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-sidebar-width lg:flex-col">
      <div className="flex grow flex-col overflow-y-auto bg-sidebar px-5 pb-14">
        <Logo href="/" className="ml-1 h-16" />
        <ul className="my-5 space-y-3">
          {NAVIGATION_LINKS.map(({ href, icon: Icon, id, label }) => (
            <li key={id}>
              <SidebarItem href={href}>
                <Icon className="size-5" />
                <span className="text-medium-16">{label}</span>
              </SidebarItem>
            </li>
          ))}
        </ul>
        <SidebarFooter />
      </div>
    </aside>
  )
}
