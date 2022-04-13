import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de ReactJS',
      duration: 300,
      description: 'Curso excelente de ReactJS',
      fk_id_teacher: '5ddc45d2-09b4-4013-a7dd-41407b52adda'
    },
  })

  console.log(result);
}

main();