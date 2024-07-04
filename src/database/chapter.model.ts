import { Document, Schema, model, models } from 'mongoose'

// IChapter là kiểu dữ liệu của document trong Chapter collection
// chapterSchema là cấu trúc của document trong Chapter collection (dùng để validate dữ liệu khi tạo mới document)

export interface IChapter extends Document {
  name: string
  courses: Schema.Types.ObjectId[]
  lessons: Schema.Types.ObjectId[]
  order: number
  _destroy: boolean
  createdAt: Date
  updatedAt: Date
}

const chapterSchema = new Schema<IChapter>(
  {
    name: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
    order: { type: Number, default: 0 },
    _destroy: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Chapter = models.Chapter || model<IChapter>('Chapter', chapterSchema)

export default Chapter
