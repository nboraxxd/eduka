'use server'

import User, { IUser } from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { CreateUserParams } from '@/types/user.type'

export default async function createUser(params: CreateUserParams) {
  try {
    connectToDatabase()

    const newUser: IUser = await User.create(params)

    return newUser
  } catch (error: any) {
    throw new Error(error)
  }
}
