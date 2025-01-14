import {
  getAllDietaryRestrictions,
  getFavouriteByEmail,
  getIngredientsByRecipeId,
  getUserDietaryRestrictions
} from "./queries.js";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const email = "alice@prisma.io"; // Replace with a valid email for testing

    console.log("Testing getAllDietaryRestrictions:");
    const dietaryRestrictions = await getAllDietaryRestrictions(prisma);
    console.log(dietaryRestrictions);

    console.log("Testing getFavouriteByEmail:");
    const favourites = await getFavouriteByEmail(email, prisma);
    console.log(favourites);

    console.log("Testing getIngredientsByRecipeId:");
    const ingredients = await getIngredientsByRecipeId(favourites[1].recipe_id, prisma);
    console.log(ingredients);

    console.log("Testing getUserDietaryRestrictions:");
    const userDietaryRestrictions = await getUserDietaryRestrictions(email, prisma);
    console.log(
      `${email} has allergy to ${userDietaryRestrictions
        .map((r) => r.dietaryRestriction.name)
        .join(", ")} `
    );

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
