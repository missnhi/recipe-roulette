import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  // Connect
  const prisma = new PrismaClient();
  // Get data
  const users = await prisma.user.findMany();
  console.log(users);
  // Disconnect
  await prisma.$disconnect();
  return NextResponse.json({ users }, { status: 201 });
}
