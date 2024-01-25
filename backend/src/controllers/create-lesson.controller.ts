import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const createLessonBodySchema = z.object({
  title: z.string(),
  duration: z.number(),
  url: z.string(),
  courseId: z.string(),
})

type CreateLessonBodySchema = z.infer<typeof createLessonBodySchema>

@Controller('/lessons')
export class CreateLessonController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(
    @Body(new ZodValidationPipe(createLessonBodySchema))
    body: CreateLessonBodySchema,
  ) {
    const { title, duration, url, courseId } = body

    const lessonWithSameTitle = await this.prisma.lesson.findFirst({
      where: {
        title,
        courseId,
      },
    })

    if (lessonWithSameTitle) {
      throw new ConflictException('Lesson with same title already exists.')
    }

    await this.prisma.lesson.create({
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
