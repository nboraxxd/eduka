import { Document, Schema, model, models } from 'mongoose'

export interface IRequirement extends Document {
  content: string
  createdAt: Date
  updatedAt: Date
}

const requirementSchema = new Schema<IRequirement>(
  {
    content: { type: String, required: true },
  },
  { timestamps: true }
)

const Requirement = models.Requirement || model<IRequirement>('Requirement', requirementSchema)

export default Requirement
