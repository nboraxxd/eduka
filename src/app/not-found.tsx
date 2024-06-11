import Link from 'next/link'

import { LeftArrowIcon } from '@/components/icons'

export default function NotFoundPage() {
  return (
    <div className="relative">
      <div className="py-5 lg:py-20">
        <h1 className="mb-5 flex flex-col items-center gap-5 text-center text-bold-32 lg:text-bold-36">
          <span className="inline-block text-7xl">404</span>
          <span>Không tìm thấy trang</span>
        </h1>
        <p className="mx-auto mb-10 max-w-[600px] text-center text-lg text-gray-500">
          Dường như trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Hãy kiểm tra lại đường dẫn hoặc quay về trang
          chủ.
        </p>

        <Link
          className="group mx-auto flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-primary px-10 text-primary-foreground transition-colors hover:bg-primary/90"
          href="/"
        >
          <LeftArrowIcon className="size-5 transition-transform group-hover:-translate-x-3" />
          <span>Về trang chủ</span>
        </Link>
      </div>
    </div>
  )
}
