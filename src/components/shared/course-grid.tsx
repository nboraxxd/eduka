export default function CourseGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-4">{children}</div>
}
