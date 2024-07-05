import { Document, Schema, model, models } from 'mongoose'

import { CourseLabel, CourseLevel, CourseStatus, CourseType } from '@/constants/type'

// ICourse là kiểu dữ liệu của document trong Course collection
// courseSchema là cấu trúc của document trong Course collection (dùng để validate dữ liệu khi tạo mới document)

export interface ICourse extends Document {
  name: string
  slug: string
  status: keyof typeof CourseStatus
  label: keyof typeof CourseLabel
  level: keyof typeof CourseLevel
  type: keyof typeof CourseType
  viewCount: number
  creator: Schema.Types.ObjectId
  authors: Schema.Types.ObjectId[]
  chapters: Schema.Types.ObjectId[]
  image: string | null
  description: string | null
  originalPrice: number | null
  salePrice: number | null
  discount: number | null
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
    slug: { type: String, required: true, unique: true },
    status: { type: String, required: true, enum: Object.values(CourseStatus), default: 'InProgress' },
    label: { type: String, required: true, enum: Object.values(CourseLabel), default: 'New' },
    level: { type: String, required: true, enum: Object.values(CourseLevel), default: 'Beginner' },
    type: { type: String, required: true, enum: Object.values(CourseType), default: 'Paid' },
    viewCount: { type: Number, required: true, default: 0 },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    authors: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
    chapters: [{ type: Schema.Types.ObjectId, ref: 'Chapter' }],
    image: { type: String, default: null },
    description: { type: String, default: null },
    originalPrice: { type: Number, default: null },
    salePrice: { type: Number, default: null },
    discount: { type: Number, default: null },

    _destroy: { type: Boolean, default: false },
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
  },
  { timestamps: true }
)

const Course = models.Course || model<ICourse>('Course', courseSchema)

export default Course
