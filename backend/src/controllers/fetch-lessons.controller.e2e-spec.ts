import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Fetch lessons (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[GET] /lessons', async () => {
    const course = await prisma.course.create({
      data: {
        name: 'Programação orientada a objetos',
        image: '',
        description: '',
        endAt: new Date(),
      },
    })

    await prisma.lesson.createMany({
      data: [
        {
          title: 'Aula 1',
          duration: 150,
          url: '',
          courseId: course.id,
        },
        {
          title: 'Aula 2',
          duration: 90,
          url: '',
          courseId: course.id,
        },
      ],
    })

    const response = await request(app.getHttpServer()).get('/lessons').send()

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual({
      purchases: [
        expect.objectContaining({ title: 'Aula 1' }),
        expect.objectContaining({ title: 'Aula 2' }),
      ],
    })
  })
})
