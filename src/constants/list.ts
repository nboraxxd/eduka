import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  ExploreIcon,
  StudyIcon,
  BoltIcon,
  OrderIcon,
  UsersIcon,
  CommentIcon,
  ChartBarIcon,
  StarIcon,
  EyeIcon,
} from '@/components/icons'

export const NAVIGATION_LINKS = [
  {
    id: uuidv4(),
    icon: ExploreIcon,
    href: '/',
    label: 'Khám phá',
  },
  {
    id: uuidv4(),
    icon: StudyIcon,
    href: '/study',
    label: 'Khu vực học tập',
  },
  {
    id: uuidv4(),
    icon: BoltIcon,
    href: '/manage/courses',
    label: 'Quản lý khóa học',
  },
  {
    id: uuidv4(),
    icon: UsersIcon,
    href: '/manage/member',
    label: 'Quản lý thành viên',
  },
  {
    id: uuidv4(),
    icon: OrderIcon,
    href: '/manage/order',
    label: 'Quản lý đơn hàng',
  },
  {
    id: uuidv4(),
    icon: CommentIcon,
    href: '/manage/comment',
    label: 'Quản lý bình luận',
  },
] as const

export const AUTHENTICATION_LINKS = [
  {
    id: uuidv4(),
    href: '/sign-in',
    label: 'Đăng nhập',
  },
  {
    id: uuidv4(),
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
