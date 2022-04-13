import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findFirst();
  // const result = await prisma.courses.findFirst({ take: -1 });
  console.log(result);
}

main();