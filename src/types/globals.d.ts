import { UserRole } from '@/constants/type'

export {}

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role: keyof typeof UserRole
    }
  }
}
