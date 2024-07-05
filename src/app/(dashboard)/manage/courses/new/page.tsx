import { auth } from '@clerk/nextjs/server'

import { Heading } from '@/components/shared'
import { AddNewCourseForm } from '@/components/form'
import { getUserByClerkId } from '@/lib/actions/user.action'

export default async function AddCoursePage() {
  const { userId } = auth()

  const response = await getUserByClerkId(userId!)

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center">
      <Heading clasName="w-full">Tạo khoá học mới</Heading>
      <AddNewCourseForm creator={response.data} />
    </div>
  )
}
