export const UserStatus = {
  Active: 'Active',
  Unactive: 'Unactive',
  Banned: 'Banned',
} as const

export const UserRole = {
  Admin: 'Admin',
  User: 'User',
  Expert: 'Expert',
} as const

export const CourseStatus = {
  InProgress: 'InProgress',
  Completed: 'Completed',
  Delete: 'Delete',
} as const

export const CourseLabel = {
  BestSeller: 'BestSeller',
  Hot: 'Hot',
  New: 'New',
} as const

export const CourseLevel = {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced',
} as const

export const CourseType = {
  Free: 'Free',
  Paid: 'Paid',
} as const

export const LessonType = {
  Video: 'Video',
  Document: 'Document',
} as const
