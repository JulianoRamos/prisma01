import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React-Native',
      duration: 300,
      description: 'Curso excelente de React-Native',
      teacher: {
        connect: {
          id: 'b0594b02-08c4-4384-bad3-5c28498b3d80'
        }
      }
    },
  })

  console.log(result);
}

main();