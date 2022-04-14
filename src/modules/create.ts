import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: 'Aprendendo Firebase',
      description: 'Aprendendo firebase do zero',
      courses: {
        create: {
          course: {
            connect: {
              id: "28cc2164-8d68-4fd9-aab5-8cce3a13381d"
            }
          }
        }
      }
    },
  })

  console.log(result);
}

main();