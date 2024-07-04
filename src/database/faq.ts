import { Document, Schema, model, models } from 'mongoose'

export interface IFaq extends Document {
  question: string
  answer: string
  createdAt: Date
  updatedAt: Date
}

const faqSchema = new Schema<IFaq>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true }
)

const Faq = models.Faq || model<IFaq>('Faq', faqSchema)

export default Faq
