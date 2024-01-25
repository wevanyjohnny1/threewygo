import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Create course (E2E)', () => {
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

  test('[POST] /courses', async () => {
    const response = await request(app.getHttpServer()).post('/courses').send({
      name: 'Programação orientada a objetos',
      description: '',
      image: '',
      endAt: '2024-12-12',
    })

    expect(response.statusCode).toBe(201)

    const courseOnDatabase = await prisma.course.findUnique({
      where: {
        name: 'Programação orientada a objetos',
      },
    })

    expect(courseOnDatabase).toBeTruthy()
  })
})
