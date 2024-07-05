import { z } from 'zod'

export const addNewCourseSchema = z.object({
  name: z.string().min(10).max(256),
  slug: z
    .string()
    .min(10)
    .max(256)
    .regex(/^[a-z0-9-]+$/),
  author: z.string().min(1).max(256),
})

export type AddNewCourseSchemaType = z.infer<typeof addNewCourseSchema>
