import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'
import { auth } from '@clerk/nextjs/server'
import { UserRole } from '@/constants/type'
import { JwtPayload } from '@clerk/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkRole(role: keyof typeof UserRole, sessionClaims?: JwtPayload | null) {
  const { sessionClaims: _sessionClaims } = sessionClaims === undefined ? auth() : { sessionClaims }
  return _sessionClaims?.metadata.role === role
}
