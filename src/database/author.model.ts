import { Document, Schema, model, models } from 'mongoose'

export interface IAuthor extends Document {
  name: string
  courses: Schema.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

const authorSchema = new Schema<IAuthor>(
  {
    name: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  },
  { timestamps: true }
)

const Author = models.Author || model<IAuthor>('Author', authorSchema)

export default Author
