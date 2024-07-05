'use server'

import User, { IUser } from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { SuccessResponse } from '@/types/index.type'
import { CreateUserParams, UserResponse } from '@/types/user.type'

export async function createUser(params: CreateUserParams): Promise<SuccessResponse<UserResponse>> {
  try {
    connectToDatabase()
    const newUser: IUser = await User.create(params)

    return {
      message: 'Tạo người dùng thành công',
      data: JSON.parse(JSON.stringify(newUser)),
    }
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getUserByClerkId(clerkId: string): Promise<SuccessResponse<UserResponse>> {
  try {
    connectToDatabase()

    const user: IUser | null = await User.findOne({ clerkId })

    if (!user) {
      throw new Error('Không tìm thấy người dùng')
    }

    return {
      message: 'Lấy thông tin người dùng thành công',
      data: JSON.parse(JSON.stringify(user)),
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
