import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'
import { json, urlencoded } from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false
  })

  const configService: ConfigService<Env, true> = app.get(ConfigService)
  const port = configService.get('PORT', { infer: true })

  app.enableCors()
  app.use(json({ limit: '5mb' }))
  app.use(urlencoded({ extended: true, limit: '5mb' }))

  await app.listen(port)
}
bootstrap()
