// filepath: /home/labber/lighthouse/2_LHL_Projects/real-recipe-roulette/recipe-roulette/components/FavButton.jsx
"use client"
import React from "react";
import axios from "axios";

export default function FavButton({ recipe, recipeInfo }) {
  const addToFav = async () => {
    try {
      const response = await axios.post('/api/addRecipe', { recipe, recipeInfo });
      console.log('Recipe added to favorites:', response.data);
    } catch (error) {
      console.error('Error adding recipe to favorites:', error);
    }
    
  

    }
  return <button onClick={addToFav} className="">🩷</button>;
}