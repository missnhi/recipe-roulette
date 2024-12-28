import prisma from "@/prisma/prisma";

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
}