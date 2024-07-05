import { CourseLabel, CourseLevel, CourseStatus, CourseType } from '@/constants/type'

export type CourseResponse = {
  _id: string
  name: string
  slug: string
  status: keyof typeof CourseStatus
  label: keyof typeof CourseLabel
  level: keyof typeof CourseLevel
  type: keyof typeof CourseType
  viewCount: number
  creator: string
  authors: string[]
  chapters: string[]
  image: string | null
  description: string | null
  originalPrice: number | null
  salePrice: number | null
  discount: number | null
  info: {
    requirement: {
      id: string
      content: string
    }[]
    benefit: {
      id: string
      content: string
    }[]
    faq: {
      id: string
      question: string
      answer: string
    }[]
  }
  _destroy: boolean
  createdAt: Date
  updatedAt: Date
}
