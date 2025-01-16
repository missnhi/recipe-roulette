// filepath: /home/labber/lighthouse/2_LHL_Projects/real-recipe-roulette/recipe-roulette/pages/api/getUserFavorites.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { email } = req.query;

    try {
      // Fetch the user by email
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Fetch the favorite recipes for the user
      const favorites = await prisma.favorite.findMany({
        where: { userId: user.id },
        include: { recipe: true },
      });

      // Respond with the favorite recipes
      res.status(200).json(favorites);
    } catch (error) {
      // Log the error and respond with a 500 status code
      console.error(error);
      res.status(500).json({ error: 'Error fetching favorite recipes' });
    }
  } else {
    // Respond with a 405 status code if the method is not GET
    res.status(405).json({ error: 'Method not allowed' });
  }
}