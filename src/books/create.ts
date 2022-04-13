import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Arquitetura Limpa',
      author_id: '3da2f076-1228-49d1-a418-7a75a8cd308b'
    },
  })

  console.log(result);
}

main();