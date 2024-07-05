'use server'

import Author from '@/database/author.model'
import Course, { ICourse } from '@/database/course.model'
import { connectToDatabase } from '@/lib/mongoose'
import { CourseResponse } from '@/types/course.type'
import { SuccessResponse } from '@/types/index.type'
import { AddNewCourseSchemaType } from '@/lib/schemaValidations/course.schema'

export async function createCourse(
  params: Omit<AddNewCourseSchemaType, 'author'> & { authors: string[]; creator: string }
): Promise<SuccessResponse<CourseResponse>> {
  try {
    connectToDatabase()

    const { name, slug, creator } = params

    const slugExists = await Course.findOne({ slug })
    if (slugExists) throw new Error('Đường dẫn khoá học đã tồn tại')

    // Create the course
    const newCourse: ICourse = await Course.create({ name, slug, creator })

    // Create the authors or get them if they already exist
    const authors = await Promise.all(
      params.authors.map((author) => {
        return Author.findOneAndUpdate(
          { name: { $regex: new RegExp(`^${author}$`, 'i') } },
          { $setOnInsert: { name: author }, $push: { courses: newCourse._id } },
          { upsert: true, new: true }
        )
      })
    )

    // Update the course with the authors
    await Course.findByIdAndUpdate(newCourse._id, { $push: { authors: authors.map((author) => author._id) } })

    return {
      message: 'Tạo khoá học thành công',
      data: JSON.parse(JSON.stringify(newCourse)),
    }
  } catch (error: any) {
    throw new Error(error.message || error)
  }
}
