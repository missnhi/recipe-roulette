/*import prisma from "@/prisma/prisma";

export async function GET(req, res) {
  return prisma.recipe.findMany()
    .then(recipes => {
      return new Response(JSON.stringify(recipes), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
      return new Response(JSON.stringify({ error: "Error fetching recipes" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}*/

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
