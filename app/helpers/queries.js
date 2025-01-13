export async function getAllDietaryRestrictions(prisma) {
  return prisma.dietaryRestriction.findMany();
}
/** Select DietaryRestrictions */

export async function getFavouriteByEmail(email, prisma) {
  const favourites = await prisma.favourite.findMany({
    where: {
      user: {
        email: email,
      },
    },
  });

  return favourites;
}

export async function getIngredientsByRecipeId(recipeId, prisma) {
  const ingredients = await prisma.recipe.findUnique({
    where: {
      id: recipeId,
    },
    select: {
      ingredients: true,
    },
  });

  return ingredients.ingredients;
}
export async function getUserDietaryRestrictions(email, prisma) {
  // Implementation here
  const userRestrictions = await prisma.userDietaryRestriction.findMany({
    where: {
      user: {
        email: email,
      },
    },
    select: {
      dietaryRestriction: true,
    },
  });

  return userRestrictions.map(restriction => restriction.dietaryRestriction);
}
