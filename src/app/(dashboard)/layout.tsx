import { Sidebar } from '@/components/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-[var(--sidebar-width),minmax(0,1fr)]">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
