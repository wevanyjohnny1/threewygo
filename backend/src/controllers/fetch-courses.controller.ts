import { Controller, Get } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Controller('/courses')
export class FetchCoursesController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
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
