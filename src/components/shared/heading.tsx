import { cn } from '@/utils'

interface Props {
  children: React.ReactNode
  clasName?: string
}

export default function Heading({ children, clasName }: Props) {
  return <h1 className={cn('mb-8 text-bold-24 lg:text-extra-bold-32', clasName)}>{children}</h1>
}
