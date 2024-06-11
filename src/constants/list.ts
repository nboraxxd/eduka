import { ExploreIcon, HomeIcon, ProfileIcon, SignUpIcon } from '@/components/icons'

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

export const AUTHENTICATION_LINKS = [
  {
    id: 4,
    icon: ProfileIcon,
    href: '/sign-in',
    label: 'Đăng nhập',
  },
  {
    id: 5,
    icon: SignUpIcon,
    href: '/sign-up',
    label: 'Đăng ký',
  },
] as const
