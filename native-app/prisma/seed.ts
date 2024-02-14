const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const basic = await prisma.plan.create({
    data: {
      name: "Basic",
      description:
        "O plano basico do eiBarbeiro tem a opção de incluir a sua barbearia até 4 membros, sendo apenas um plano mensal.",
      price: 199.0,
    },
  });
  const premium = await prisma.plan.create({
    data: {
      name: "Premium",
      description:
        "O plano Premium do eiBarbeiro tem a opção de incluir a sua barbearia até 8 membros, sendo este um plano anual.",
      price: 299.0,
    },
  });
  console.log({ basic, premium });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
