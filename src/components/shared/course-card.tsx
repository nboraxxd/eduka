import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { COURSE_METRICS } from '@/constants/list'

type CardProps = React.ComponentProps<typeof Card>

export default function CourseCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn('relative', className)} {...props}>
      <Link href="/course/khoa-hoc-nextjs-pro" className="absolute inset-0 z-10" />
      <CardHeader className="aspect-h-2 aspect-w-3 rounded-t-lg">
        <Image
          src="https://plus.unsplash.com/premium_photo-1717529137998-bede3eea7d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
          width={800}
          height={360}
          priority
          alt="Relax"
          className="size-full rounded-t-lg object-cover"
        />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-md bg-background px-3 py-1 text-semi-12 text-foreground lg:text-semi-14">
            Frontend
          </span>
          <span className="text-bold-16 text-secondary">899.000 VNĐ</span>
        </div>
        <CardTitle className="line-clamp-3 text-bold-18 xl:text-bold-20">
          Khóa học NextJS Pro - Xây dựng E Learning System hoàn chỉnh
        </CardTitle>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex items-center gap-3 text-medium-12 text-muted-foreground lg:text-medium-14">
          {COURSE_METRICS.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon('size-4')}
              <span>{item.value}</span>
              <span className="sr-only">{item.label}</span>
            </div>
          ))}
        </div>
        <Button className="mt-5 w-full" size={'lg'}>
          Xem chi tiết
        </Button>
      </CardFooter>
    </Card>
  )
}
