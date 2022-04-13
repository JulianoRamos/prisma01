import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Robert C. Martion',
      books: {
        create: {
          name: 'Codigo Limpo'
        }
      }
    },
  })

  console.log(result);
}

main();