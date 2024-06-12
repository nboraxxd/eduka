'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { clerkAppearance } from '@/constants'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider appearance={clerkAppearance}>{children}</ClerkProvider>
}
