import { Controller, Delete, HttpCode, Query } from '@nestjs/common'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const deleteLessonParamSchema = z.string()

const queryValidationPipe = new ZodValidationPipe(deleteLessonParamSchema)

type DeleteLessonParamSchema = z.infer<typeof deleteLessonParamSchema>

@Controller('/lessons')
export class DeleteLessonController {
  constructor(private prisma: PrismaService) {}

  @Delete()
  @HttpCode(200)
  async handle(@Query('id', queryValidationPipe) id: DeleteLessonParamSchema) {
    await this.prisma.lesson.delete({
      where: { id },
    })

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
