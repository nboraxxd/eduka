import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { cn } from '@/lib/utils'
import { AuthProvider, ThemeProvider } from '@/components/provider'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: {
    template: '%s | Eduka',
    default: 'Eduka - Nền tảng học trực tuyến dành cho developer',
  },
  description:
    'Eduka - website học online hàng đầu dành cho developer, với hơn 1.000 học viên và hơn 20 khóa học trực tuyến về lập trình, thiết kế, ngoại ngữ và nhiều lĩnh vực khác.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-background font-manrope', manrope.variable)}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
