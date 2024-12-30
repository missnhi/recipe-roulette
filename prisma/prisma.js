import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Ensure globalThis is defined
const globalForPrisma = typeof global !== 'undefined' ? global : globalThis;

globalForPrisma.prismaGlobal = globalForPrisma.prismaGlobal || undefined;

const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaGlobal = prisma;