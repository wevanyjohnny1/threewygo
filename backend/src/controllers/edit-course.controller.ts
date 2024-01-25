import { Body, Controller, HttpCode, Put, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const editCourseBodySchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
})

type EditCourseBodySchema = z.infer<typeof editCourseBodySchema>

@Controller('/courses')
export class EditCourseController {
  constructor(private prisma: PrismaService) {}

  @Put()
  @HttpCode(200)
  @UsePipes(new ZodValidationPipe(editCourseBodySchema))
  async handle(@Body() body: EditCourseBodySchema) {
    const { name, image, id } = body

    const course = await this.prisma.course.update({
      where: {
        id,
      },
      data: {
        name,
        image,
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
