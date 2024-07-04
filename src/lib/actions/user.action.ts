'use server'

import User, { IUser } from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { CreateUserParams } from '@/types/user.type'

export async function createUser(params: CreateUserParams) {
  try {
    connectToDatabase()

    const newUser: IUser = await User.create(params)

    return newUser
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getUserByClerkId(clerkId: string) {
  try {
    connectToDatabase()

    const user: IUser | null = await User.findOne({ clerkId })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  } catch (error: any) {
    throw new Error(error)
  }
}
