import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllDietaryRestrictions() {
  return prisma.dietaryRestriction.findMany();
}
/**select DietaryRestrictions */

export async function getFavouriteByEmail(email) {
  const favourites = await prisma.favourite.findMany({
    where: {
      user: {
        email: email,
      },
    },
  });

  return favourites;
}

/*select Recipe.* 
FROM Recipe 
JOIN Favourite ON Recipe.id = Favourite.recipe_id 
WHERE Favourite.user_id = 1
 */

export async function getIngredientsByRecipeId(recipeId) {
  const ingredients = await prisma.recipe.findUnique({
    where: {
      id: recipeId,
    },
    select: {
      ingredients: true,
    },
  });

  return ingredients.ingredients.map((ingredient) => ingredient);
}
export async function getUserDietaryRestrictions(email) {
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

  return userRestrictions;
}

async function main() {
  try {
    const email = "alice@prisma.io"; // Replace with a valid email for testing

    console.log("Testing getAllDietaryRestrictions:");
    const dietaryRestrictions = await getAllDietaryRestrictions();
    console.log(dietaryRestrictions);

    console.log("Testing getFavouriteByEmail:");
    const favourites = await getFavouriteByEmail(email);
    console.log(favourites);

    console.log("Testing getIngredientsByRecipeId:");
    const ingredients = await getIngredientsByRecipeId(favourites[1].recipe_id);
    console.log(ingredients);

    console.log("Testing getUserDietaryRestrictions:");
    const userDietaryRestrictions = await getUserDietaryRestrictions(email);
    console.log(`${email} has allergy to ${userDietaryRestrictions.map(r => r.dietaryRestriction.name).join(", ")} `);

    // console.log("Testing getUserDietaryRestrictions:");
    // const userDietaryRestrictions = await getUserDietaryRestrictions(email);
    // console.log(userDietaryRestrictions);
  } catch (error) {
    console.error("Error during testing:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
