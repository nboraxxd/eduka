import { ExploreIcon, HomeIcon, ProfileIcon } from '@/components/icons'

export const NAVIGATION_LINKS = [
  {
    id: 1,
    icon: HomeIcon,
    href: '/',
    label: 'Trang chủ',
  },
  {
    id: 2,
    icon: ExploreIcon,
    href: '/explore',
    label: 'Khám phá',
  },
  {
    id: 3,
    icon: ProfileIcon,
    href: '/profile',
    label: 'Cá nhân',
  },
] as const
