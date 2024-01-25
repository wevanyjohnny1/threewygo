import { Body, Controller, Get, Query } from '@nestjs/common'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const pageQueryParamSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const fetchLessonsBodySchema = z.object({
  courseId: z.string(),
})

type FetchLessonsBodySchema = z.infer<typeof fetchLessonsBodySchema>

const queryValidationPipe = new ZodValidationPipe(pageQueryParamSchema)

type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>

@Controller('/lessons')
export class FetchLessonsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(
    @Query('page', queryValidationPipe) page: PageQueryParamSchema,
    @Body(new ZodValidationPipe(fetchLessonsBodySchema))
    body: FetchLessonsBodySchema,
  ) {
    const perPage = 10
    const { courseId } = body

    const lessons = await this.prisma.lesson.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      where: {
        courseId,
      },
    })

    return { lessons }
  }
}
