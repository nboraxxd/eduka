import { CourseCard, Heading } from '@/components/shared'

export default async function HomePage() {
  return (
    <>
      <Heading>Khám phá</Heading>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  )
}
