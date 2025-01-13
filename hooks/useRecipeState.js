"use cliient";
import { useState } from "react";

// Custom hook to manage recipe state
export function useRecipeState() {
  const [showRecipe, setShowRecipe] = useState(false);

  // Log whenever showRecipe changes
  console.log("useRecipeState - showRecipe state:", showRecipe);

  return { showRecipe, setShowRecipe };
}
