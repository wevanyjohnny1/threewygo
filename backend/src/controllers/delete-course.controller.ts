import { Controller, Delete, HttpCode, Query } from '@nestjs/common'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const deleteCourseParamSchema = z.string()

const queryValidationPipe = new ZodValidationPipe(deleteCourseParamSchema)

type DeleteCourseParamSchema = z.infer<typeof deleteCourseParamSchema>

@Controller('/courses')
export class DeleteCourseController {
  constructor(private prisma: PrismaService) {}

  @Delete()
  @HttpCode(200)
  async handle(@Query('id', queryValidationPipe) id: DeleteCourseParamSchema) {
    const deleteLessons = this.prisma.lesson.deleteMany({
      where: {
        courseId: id,
      },
    })

    const deleteCourse = this.prisma.course.delete({
      where: {
        id,
      },
    })

    await this.prisma.$transaction([deleteLessons, deleteCourse])

    const courses = await this.prisma.course.findMany({
      include: { lessons: true },
      where: {
        endAt: {
          gte: new Date(),
        },
      },
      orderBy: {
        endAt: 'asc',
      },
    })

    return { courses }
  }
}
