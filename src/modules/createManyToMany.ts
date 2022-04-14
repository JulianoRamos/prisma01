import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: '41e25d8c-e296-4d47-accc-05b5ca463cae',
      fk_id_module: 'd69ec4c4-9102-4124-a599-8b8496cd78d8'
    },
  })

  console.log(result);
}

main();