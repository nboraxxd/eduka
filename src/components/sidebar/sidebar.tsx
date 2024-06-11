import { AUTHENTICATION_LINKS, NAVIGATION_LINKS } from '@/constants/list'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { SidebarItem } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared'

export default function Sidebar() {
  return (
    <aside className="flex flex-col bg-sidebar-background px-5 pb-14">
      <Logo href="/" wrapperClassName="h-20 py-3" />

      <ul className="my-5 space-y-3">
        {NAVIGATION_LINKS.map(({ href, icon: Icon, id, label }) => (
          <li key={id}>
            <SidebarItem href={href}>
              <Icon className="size-5" />
              <span className="medium-16">{label}</span>
            </SidebarItem>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <SignedOut>
          <ul className="space-y-4">
            {AUTHENTICATION_LINKS.map(({ href, icon: Icon, id, label }) => (
              <li key={id}>
                <SidebarItem href={href} variant={href === '/sign-in' ? 'signIn' : 'signUp'}>
                  <Icon className="size-5" />
                  <span className="medium-16">{label}</span>
                </SidebarItem>
              </li>
            ))}
          </ul>
        </SignedOut>
        <SignedIn>
          <Button className="w-full">
            <UserButton />
          </Button>
        </SignedIn>
      </div>
    </aside>
  )
}
