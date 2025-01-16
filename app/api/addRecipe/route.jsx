import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract recipe and recipeInfo from the request body
    const { recipe, recipeInfo } = req.body;

    // Validate recipe and recipeInfo
    if (!recipe || !recipeInfo ) {
      return res.status(400).json({ error: 'Invalid recipe data' });
    }

    try {
      // Create a new recipe in the database
      const newRecipe = await prisma.recipe.create({
        data: {
          title: recipe.title,
          image: recipe.image,
          ingredients: recipeInfo.extendedIngredients.map(ing => ing.original),
          instructions: recipeInfo.analyzedInstructions[0].steps.map(step => step.step),
        },
      });

      // Create a new favorite entry for the recipe
      await prisma.favorite.create({
        data: {
          user_id: 1,
          recipe_id: newRecipe.id,
        },
      });

      // Respond with the newly created recipe
      res.status(200).json(newRecipe);
    } catch (error) {
      // Log the error and respond with a 500 status code
      console.error(error);
      res.status(500).json({ error: 'Error adding recipe to the database' });
    } finally {
      // Disconnect the PrismaClient
      await prisma.$disconnect();
    }
  } else {
    // Respond with a 405 status code if the method is not POST
    res.status(405).json({ error: 'Method not allowed' });
  }
}