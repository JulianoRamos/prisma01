import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: '0d66b29d-4760-4dbc-a1f1-51f7183c7921'
    },
    include: {
      modules: true
    }
  });

  console.log(JSON.stringify(result));
}

main();