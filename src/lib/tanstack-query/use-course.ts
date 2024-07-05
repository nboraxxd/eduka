import { createCourse } from '@/lib/actions/course.action'
import { useMutation } from '@tanstack/react-query'

export function useCreateCourseMutation() {
  return useMutation({
    mutationFn: createCourse,
  })
}
