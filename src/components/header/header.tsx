import { HeaderAuth } from '@/components/header'
import { Logo, ModeToggle } from '@/components/shared'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-header-height items-center gap-4 bg-header px-4 text-header-foreground shadow-section md:px-6">
      <Logo href="/" className="lg:hidden" />

      <div className="ml-auto flex items-center gap-4">
        <ModeToggle />
        <HeaderAuth />
      </div>
    </header>
  )
}
