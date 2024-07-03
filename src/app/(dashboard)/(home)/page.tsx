import { CourseCard, CourseGrid, Heading } from '@/components/shared'

export default async function HomePage() {
  return (
    <>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </CourseGrid>
    </>
  )
}
