import { UserRole, UserStatus } from '@/constants/type'

export type CreateUserParams = {
  clerkId: string
  username: string
  email: string
  avatar: string
  name?: string
}

export type UserResponse = {
  _id: string
  clerkId: string
  username: string
  email: string
  avatar: string
  name: string | null
  courses: string
  status: keyof typeof UserStatus
  role: keyof typeof UserRole
  createdAt: Date
  updatedAt: Date
}
