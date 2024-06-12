import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar />
      <div className="lg:pl-sidebar-width">
        <Header />
        <main className="min-h-[calc(100vh-var(--header-height))] p-5 lg:px-8 lg:py-10">{children}</main>
      </div>
    </div>
  )
}
