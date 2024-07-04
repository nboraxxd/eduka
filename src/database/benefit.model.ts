import { Document, Schema, model, models } from 'mongoose'

export interface IBenefit extends Document {
  content: string
  createdAt: Date
  updatedAt: Date
}

const benefitSchema = new Schema<IBenefit>(
  {
    content: { type: String, required: true },
  },
  { timestamps: true }
)

const Benefit = models.Benefit || model<IBenefit>('Benefit', benefitSchema)

export default Benefit
