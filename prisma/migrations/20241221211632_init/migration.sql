/*
  Warnings:

  - A unique constraint covering the columns `[user_id,recipe_id]` on the table `Favourite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,dietaryRestriction_id]` on the table `UserDietaryRestriction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favourite_user_id_recipe_id_key" ON "Favourite"("user_id", "recipe_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserDietaryRestriction_user_id_dietaryRestriction_id_key" ON "UserDietaryRestriction"("user_id", "dietaryRestriction_id");
