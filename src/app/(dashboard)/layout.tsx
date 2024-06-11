import { Logo, ModeToggle } from '@/components/shared'
import { Sidebar } from '@/components/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar />
      <div className="lg:pl-sidebar-width">
        <header className="sticky top-0 z-10 flex h-header-height items-center gap-4 bg-header px-4 text-header-foreground shadow-section md:px-6">
          <Logo href="/" className="lg:hidden" />
          {/* Dark mode toggle */}
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        <main className="min-h-[calc(100vh-var(--header-height))] p-5 lg:px-8 lg:py-10">{children}</main>
      </div>
    </div>
  )
}
