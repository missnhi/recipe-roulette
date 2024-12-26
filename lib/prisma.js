import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma


export default prisma;

//Prisma will be instantiated here only once this is to avoid it from spamming the json file 