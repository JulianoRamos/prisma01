import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "6a9c04b2-45e4-449f-8ff6-b3652f946a45"
    },
    data: {
      duration: 300,
    }
  });

  console.log(result);
}

main();