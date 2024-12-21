import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function GET(req, res){
  const recipes = await prisma.recipe.findMany ();
  return new Response(JSON.stringify(recipes), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}