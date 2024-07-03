import { CourseCard, CourseGrid, Heading } from '@/components/shared'

export default function StudyPage() {
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </CourseGrid>
    </>
  )
}
