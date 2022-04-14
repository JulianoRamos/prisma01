import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: 'Curso de Elixir 2 asdasd',
          description: 'Curso completo de Elixir asdasd',
          fk_id_teacher: '70528cd5-55cf-49df-abcc-c4f68cc091a0'
        }
      },
      module: {
        create: {
          name: 'Aprendendo Elixer sss',
          description: 'Aprendendo elixir do zero ss',
        }
      }
    },
  })

  console.log(result);
}

main();