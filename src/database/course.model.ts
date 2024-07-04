import { Document, Schema, model, models } from 'mongoose'

import { CourseLabel, CourseLevel, CourseStatus, CourseType } from '@/constants/type'

// ICourse là kiểu dữ liệu của document trong Course collection
// courseSchema là cấu trúc của document trong Course collection (dùng để validate dữ liệu khi tạo mới document)

export interface ICourse extends Document {
  name: string
  image: string
  description: string
  slug: string
  originalPrice: number
  salePrice: number
  discount: number
  status: keyof typeof CourseStatus
  label: keyof typeof CourseLabel
  level: keyof typeof CourseLevel
  type: keyof typeof CourseType
  viewCount: number
  authors: Schema.Types.ObjectId[]
  chapters: Schema.Types.ObjectId[]
  info: {
    requirement: {
      id: Schema.Types.ObjectId
      content: string
    }[]
    benefit: {
      id: Schema.Types.ObjectId
      content: string
    }[]
    faq: {
      id: Schema.Types.ObjectId
      question: string
      answer: string
    }[]
  }
  _destroy: boolean
  createdAt: Date
  updatedAt: Date
}

const courseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    status: { type: String, required: true, enum: Object.values(CourseStatus), default: 'InProgress' },
    label: { type: String, required: true, enum: Object.values(CourseLabel), default: 'New' },
    level: { type: String, required: true, enum: Object.values(CourseLevel), default: 'Beginner' },
    type: { type: String, required: true, enum: Object.values(CourseType), default: 'Paid' },
    viewCount: { type: Number, required: true, default: 0 },
    authors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    chapters: [{ type: Schema.Types.ObjectId, ref: 'Chapter' }],
    info: {
      requirement: [
        {
          id: { type: Schema.Types.ObjectId, ref: 'Requirement' },
          content: { type: String, required: true },
        },
      ],
      benefit: [
        {
          id: { type: Schema.Types.ObjectId, ref: 'Benefit' },
          content: { type: String, required: true },
        },
      ],
      faq: [
        {
          id: { type: Schema.Types.ObjectId, ref: 'Faq' },
          question: { type: String, required: true },
          answer: { type: String, required: true },
        },
      ],
    },
    _destroy: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Course = models.Course || model<ICourse>('Course', courseSchema)

export default Course
