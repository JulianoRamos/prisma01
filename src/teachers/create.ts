import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.teachers.create({
    data: {
      name: 'Juliano Cesar Ramos 4',
    },
  })

  console.log(result);
}

main();