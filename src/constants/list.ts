import {
  ExploreIcon,
  ProfileIcon,
  SignUpIcon,
  StudyIcon,
  BoltIcon,
  OrderIcon,
  UsersIcon,
  CommentIcon,
  ChartBarIcon,
  StarIcon,
  EyeIcon,
} from '@/components/icons'
import React from 'react'

export const NAVIGATION_LINKS = [
  {
    id: 1,
    icon: ExploreIcon,
    href: '/',
    label: 'Khám phá',
  },
  {
    id: 2,
    icon: StudyIcon,
    href: '/study',
    label: 'Khu vực học tập',
  },
  {
    id: 3,
    icon: BoltIcon,
    href: '/manage/course',
    label: 'Quản lý khóa học',
  },
  {
    id: 4,
    icon: UsersIcon,
    href: '/manage/member',
    label: 'Quản lý thành viên',
  },
  {
    id: 5,
    icon: OrderIcon,
    href: '/manage/order',
    label: 'Quản lý đơn hàng',
  },
  {
    id: 6,
    icon: CommentIcon,
    href: '/manage/comment',
    label: 'Quản lý bình luận',
  },
  {
    id: 7,
    icon: ProfileIcon,
    href: '/profile',
    label: 'Cá nhân',
  },
] as const

export const AUTHENTICATION_LINKS = [
  {
    id: 8,
    icon: ProfileIcon,
    href: '/sign-in',
    label: 'Đăng nhập',
  },
  {
    id: 9,
    icon: SignUpIcon,
    href: '/sign-up',
    label: 'Đăng ký',
  },
] as const

export const COURSE_METRICS = [
  {
    label: 'Tổng số học viên',
    value: 'Trung bình',
    icon: (className?: string) => React.createElement(ChartBarIcon, { className }),
  },
  {
    label: 'Đánh giá',
    value: 5,
    icon: (className?: string) => React.createElement(StarIcon, { className }),
  },
  {
    label: 'Lượt xem',
    value: 378,
    icon: (className?: string) => React.createElement(EyeIcon, { className }),
  },
]
