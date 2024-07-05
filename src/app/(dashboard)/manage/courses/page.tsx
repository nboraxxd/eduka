import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CoursePage() {
  return (
    <div>
      CoursePage
      <Button asChild>
        <Link href="/manage/courses/new">Thêm mới khoá học</Link>
      </Button>
    </div>
  )
}
