import { Body, Controller, HttpCode, Put } from '@nestjs/common'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const editLessonBodySchema = z.object({
  id: z.string(),
  courseId: z.string(),
  title: z.string(),
  duration: z.number(),
  url: z.string(),
})

type EditLessonBodySchema = z.infer<typeof editLessonBodySchema>

@Controller('/lessons')
export class EditLessonController {
  constructor(private prisma: PrismaService) {}

  @Put()
  @HttpCode(200)
  async handle(
    @Body(new ZodValidationPipe(editLessonBodySchema))
    body: EditLessonBodySchema,
  ) {
    const { title, duration, url, id, courseId } = body

    await this.prisma.lesson.update({
      where: { id },
      data: {
        title,
        duration,
        url,
        courseId,
      },
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
