import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Create lesson (E2E)', () => {
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

  test('[POST] /lessons', async () => {
    const course = await prisma.course.create({
      data: {
        name: 'Programação orientada a objetos',
        image: '',
        description: '',
        endAt: '2024-12-12',
      },
    })

    const response = await request(app.getHttpServer()).post('/lessons').send({
      title: 'Aula 1',
      duration: 150,
      url: '',
      courseId: course.id,
    })

    expect(response.statusCode).toBe(201)

    const lessonOnDatabase = await prisma.lesson.findFirst({
      where: {
        title: 'Aula 1',
        courseId: course.id,
      },
    })

    expect(lessonOnDatabase).toBeTruthy()
  })
})
