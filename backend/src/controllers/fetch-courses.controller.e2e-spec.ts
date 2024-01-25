import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Fetch courses (E2E)', () => {
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

  test('[GET] /courses', async () => {
    await prisma.course.createMany({
      data: [
        {
          name: 'Programação orientada a objetos',
          description: '',
          image: '',
          endAt: new Date('12/12/2024'),
        },
        {
          name: 'Java avançado',
          description: '',
          image: '',
          endAt: new Date(),
        },
      ],
    })

    const response = await request(app.getHttpServer()).get('/courses').send()

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual({
      purchases: [
        expect.objectContaining({ name: 'Programação orientada a objetos' }),
        expect.objectContaining({ name: 'Java avançado' }),
      ],
    })
  })
})
