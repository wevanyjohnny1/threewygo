import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const createCourseBodySchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
  endAt: z.string(),
})

type CreateCourseBodySchema = z.infer<typeof createCourseBodySchema>

@Controller('/courses')
export class CreateCourseController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createCourseBodySchema))
  async handle(@Body() body: CreateCourseBodySchema) {
    const { name, description, image, endAt } = body

    const courseWithSameName = await this.prisma.course.findUnique({
      where: {
        name,
      },
    })

    if (courseWithSameName) {
      throw new ConflictException('Course with same name already exists.')
    }

    const course = await this.prisma.course.create({
      data: {
        name,
        description,
        image,
        endAt: new Date(endAt),
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

    return { course, courses }
  }
}
