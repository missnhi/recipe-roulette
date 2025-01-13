import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  // Connect
  const prisma = new PrismaClient();
  // Get data

  const recipes = await prisma.recipes.findMany();

  // Disconnect
  await prisma.$disconnect();
  return NextResponse.json({ recipes }, { status: 201 });
}
