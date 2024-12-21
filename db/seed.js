import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Alice",
      email: "alice@prisma.io",
      password: "password123",
    },
    {
      name: "Chef Gordon",
      email: "realramsey@chef.com",
      password: "password234",  
    },
    {
      name: "Random Person",
      email: "therandomone@proton.com",
      password: "randompass567"
    }
  ];

 
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }
 console.log((await prisma.user.findMany()).map(user => user));

 
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });