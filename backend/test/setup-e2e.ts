import 'dotenv/config'

import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { execSync } from 'node:child_process'

const prisma = new PrismaClient()

function generateUniqueDatabaseURL(schemaId: string) {
  if (!process.env.DATABASE_LOCAL_URL) {
    throw new Error('Please provide a DATABASE_LOCAL_URL environment variable.')
  }

  console.log(process.env.DATABASE_LOCAL_URL)

  const url = new URL(process.env.DATABASE_LOCAL_URL)

  url.searchParams.set('schema', schemaId)

  return url.toString()
}

const schemaId = randomUUID()

beforeAll(async () => {
  const databaseUrl = generateUniqueDatabaseURL(schemaId)

  process.env.DATABASE_LOCAL_URL = databaseUrl

  execSync('npx prisma migrate dev')
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
  await prisma.$disconnect()
})
