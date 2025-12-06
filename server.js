const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function userApi() {
  const user = await prisma.user.create({
    data: {
      name: "san",
      email: "dsan@gmail.com",
    },
  });
  console.log(user);
}

userApi()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
