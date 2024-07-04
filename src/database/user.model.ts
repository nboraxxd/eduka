import { Document, Schema, model, models } from 'mongoose'

import { UserRole, UserStatus } from '@/constants/type'

// IUser là kiểu dữ liệu của document trong User collection
// userSchema là cấu trúc của document trong User collection (dùng để validate dữ liệu khi tạo mới document)

export interface IUser extends Document {
  clerkId: string
  username: string
  email: string
  avatar: string | null
  name: string | null
  courses: Schema.Types.ObjectId[]
  status: keyof typeof UserStatus
  role: keyof typeof UserRole
  createdAt?: Date
  updatedAt?: Date
}

const userSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: null },
    name: { type: String, default: null },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    status: { type: String, required: true, enum: Object.values(UserStatus), default: 'Active' },
    role: { type: String, required: true, enum: Object.values(UserRole), default: 'User' },
  },
  { timestamps: true }
)

const User = models.User || model<IUser>('User', userSchema)

export default User
