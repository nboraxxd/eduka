import { Document, Schema, model, models } from 'mongoose'

import { LessonType } from '@/constants/type'

export interface ILesson extends Document {
  name: string
  slug: string
  type: keyof typeof LessonType
  order: number
  duration: number
  videoUrl: string | null
  content: string | null
  chapters: Schema.Types.ObjectId[]
  courses: Schema.Types.ObjectId[]
  _destroy: boolean
  createdAt: Date
  updatedAt: Date
}

const lessonSchema = new Schema<ILesson>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    type: { type: String, required: true, enum: Object.values(LessonType), default: 'Video' },
    order: { type: Number, default: 0 },
    duration: { type: Number, default: 0 },
    videoUrl: { type: String, default: null },
    content: { type: String, default: null },
    chapters: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    _destroy: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Lesson = models.Lesson || model<ILesson>('Lesson', lessonSchema)

export default Lesson
