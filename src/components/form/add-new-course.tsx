'use client'

import slugify from 'slugify'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircleIcon, RotateCcwIcon } from 'lucide-react'

import { UserResponse } from '@/types/user.type'
import { useCreateCourseMutation } from '@/lib/tanstack-query/use-course'
import { AddNewCourseSchemaType, addNewCourseSchema } from '@/lib/schemaValidations/course.schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

export default function AddNewCourseForm({ creator }: { creator: UserResponse }) {
  const router = useRouter()

  const form = useForm<AddNewCourseSchemaType>({
    resolver: zodResolver(addNewCourseSchema),
    defaultValues: {
      name: '',
      slug: '',
      author: '',
    },
  })

  const createCourseMutation = useCreateCourseMutation()

  async function onSubmit(values: AddNewCourseSchemaType) {
    if (createCourseMutation.isPending) return

    const { name, slug } = values
    const authors = values.author.includes(',')
      ? values.author.split(',').map((item) => item.trim())
      : [values.author.trim()]

    try {
      const response = await createCourseMutation.mutateAsync({
        name: name.trim(),
        slug,
        authors,
        creator: creator._id,
      })

      toast.success(response.message)
      router.push(`/manage/courses/update?slug=${response.data.slug}`)
    } catch (error: any) {
      toast.error(error.message || error.toString())
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên khoá học</FormLabel>
              <FormControl>
                <Input placeholder="Cách trở thành Batman" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Slug */}
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Đường dẫn khoá học</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input placeholder="cach-tro-thanh-batman" className="pr-10" {...field} />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="group absolute right-1 top-1/2 size-8 -translate-y-1/2 hover:bg-transparent"
                          type="button"
                          onClick={() => {
                            form.getValues('name') &&
                              form.setValue(
                                'slug',
                                slugify(form.getValues('name'), { lower: true, strict: true, locale: 'vi' })
                              )
                            form.trigger('slug')
                          }}
                        >
                          <RotateCcwIcon className="size-4 transition-transform group-hover:scale-110 group-active:scale-105" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Tạo đường dẫn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Teacher */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Người hướng dẫn</FormLabel>
              <FormControl>
                <Input placeholder="Bruce Wayne" {...field} />
              </FormControl>
              <FormDescription>
                Nếu có nhiều người hướng dẫn, hãy nhập tên của họ cách nhau bởi dấu phẩy (,).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={createCourseMutation.isPending} className="gap-1.5">
          {createCourseMutation.isPending ? <LoaderCircleIcon className="size-4 animate-spin" /> : null}
          Tạo khoá học
        </Button>
      </form>
    </Form>
  )
}
