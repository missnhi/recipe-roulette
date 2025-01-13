/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `DietaryRestriction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DietaryRestriction_name_key" ON "DietaryRestriction"("name");
