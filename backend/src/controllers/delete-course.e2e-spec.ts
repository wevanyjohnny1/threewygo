import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import request from 'supertest'
import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'

describe('Delete course (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    prisma = moduleFixture.get(PrismaService)

    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM "Lesson";`
    await prisma.$executeRaw`DELETE FROM "Course";`
  })

  test('[DELETE] /courses', async () => {
    const createdCourse = await prisma.course.create({
      data: {
        name: 'Programação orientada a objetos',
        image: '',
        description: '',
        endAt: '2024-12-12',
      },
    })

    const response = await request(app.getHttpServer())
      .delete('/courses')
      .send({
        id: createdCourse.id,
      })

    expect(response.statusCode).toBe(200)

    const courseOnDatabase = await prisma.course.findUnique({
      where: {
        id: createdCourse.id,
      },
    })

    expect(courseOnDatabase).toBeFalsy()
  })
})
