import { PrismaClient } from '@prisma/client'
import { base64Img } from './image'
const prisma = new PrismaClient()
async function main() {
  await prisma.course.upsert({
    where: { name: 'Java 1' },
    update: {},
    create: {
      name: 'Java 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: base64Img,
      endAt: new Date('2024-12-20'),
      lessons: {
        create: [
          {
            title: 'Aula 1',
            duration: 11,
            url: 'UyegBTrjWGM',
          },
          {
            title: 'Aula 2',
            duration: 32,
            url: 'OQkQdDJssmw',
          },
          {
            title: 'Aula 3',
            duration: 170,
            url: 'hCZ7y2sjc94',
          },
        ],
      },
    },
  })
  await prisma.course.upsert({
    where: { name: 'Java 2' },
    update: {},
    create: {
      name: 'Java 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: base64Img,
      endAt: new Date('2023-12-01'),
      lessons: {
        create: [
          {
            title: 'Aula 1',
            duration: 51,
            url: 'IEC1ywKn-eM',
          },
          {
            title: 'Aula 2',
            duration: 132,
            url: 'uD2r9HCjs-8',
          },
          {
            title: 'Aula 3',
            duration: 70,
            url: 'bVmpiNwltPk',
          },
        ],
      },
    },
  })
  await prisma.course.upsert({
    where: { name: 'Java 3' },
    update: {},
    create: {
      name: 'Java 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: base64Img,
      endAt: new Date('2024-12-01'),
      lessons: {
        create: [
          {
            title: 'Aula 1',
            duration: 121,
            url: 'dwFB6ny1IA4',
          },
          {
            title: 'Aula 2',
            duration: 322,
            url: 'LwWSu5Fn5No',
          },
          {
            title: 'Aula 3',
            duration: 10,
            url: 'LwWSu5Fn5No',
          },
        ],
      },
    },
  })
  await prisma.course.upsert({
    where: { name: 'Java 4' },
    update: {},
    create: {
      name: 'Java 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: base64Img,
      endAt: new Date('2024-02-03'),
      lessons: {
        create: [
          {
            title: 'Aula 1',
            duration: 121,
            url: 'f1ttWl2jzWM',
          },
          {
            title: 'Aula 2',
            duration: 321,
            url: 'wEOH5CeE9Vk',
          },
          {
            title: 'Aula 3',
            duration: 17,
            url: 'PmY3SkQaZBo',
          },
        ],
      },
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
