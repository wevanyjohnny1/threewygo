import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { envSchema } from './env'
import { CreateCourseController } from './controllers/create-course.controller'
import { CreateLessonController } from './controllers/create-lesson.controller'
import { FetchCoursesController } from './controllers/fetch-courses.controller'
import { FetchLessonsController } from './controllers/fetch-lessons.controller'
import { EditCourseController } from './controllers/edit-course.controller'
import { EditLessonController } from './controllers/edit-lesson.controller'
import { DeleteCourseController } from './controllers/delete-course.controller'
import { DeleteLessonController } from './controllers/delete-lesson.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [
    CreateCourseController,
    CreateLessonController,
    FetchCoursesController,
    FetchLessonsController,
    EditCourseController,
    EditLessonController,
    DeleteCourseController,
    DeleteLessonController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
