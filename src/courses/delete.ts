import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.delete({
    where: {
      id: ''
    },
  });

  console.log(result);
}

main();