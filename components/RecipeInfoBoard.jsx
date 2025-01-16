"use client";
import "../styles/recipe-info.css";
import "../styles/recipe-div.css";

// Recipe Info Component
import React, { useEffect, useState } from "react";
import FavButton from "./FavButton";
import "@/styles/recipe-div.css";
import "@/styles/fav-button.css";
import axios from "axios";

const apiKey = process.env.SPOONACULAR_API_KEY;
export default function RecipeInfoBoard({ recipe }) {
  const [recipeInfo, setRecipeInfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`
      )
      .then(({ data }) => {
        //console.log(data);
        setRecipeInfo(data);
      })
      .catch((err) => console.log(err));
  }, [recipe.id]);

  return (
    <div>
      <FavButton altText='Favourite' className='fav-button' />
      <div className='recipe-div'>
        {recipe && <h2 className='recipe-title'>{recipe.title}</h2>}
        <img className='recipe-image' src={recipe.image} alt={recipe.title} />
        <div className='recipe-info'>
          <div className='recipe-prep-time'>
            Prep-time: {recipeInfo.readyInMinutes} minutes
          </div>
          <div className='recipe-ingredients'>
            <h3 className='text-xl font-semibold mb-2'>Ingredients:</h3>
            <ul>
              {recipeInfo.extendedIngredients &&
                recipeInfo.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
            </ul>
          </div>
        </div>
        <h3 className='text-xl font-semibold mb-2'>Instructions:</h3>
        <ol>
          {recipeInfo.analyzedInstructions &&
            recipeInfo.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}
