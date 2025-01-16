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
      <FavButton
        altText='Favorite'
        className='fav-button'
        recipe={recipe}
        recipeInfo={recipeInfo}
      />
      <div className='recipe-div'>
        {recipe && <h1 className='recipe-title'>{recipe.title}</h1>}
        <img className='recipe-image' src={recipe.image} alt={recipe.title} />
        <div className='recipe-info'>
          <div className='recipe-prep-time'>
            <strong>PREP-TIME:</strong>{" "}
            {recipeInfo.readyInMinutes || "30 Minutes"} minutes
          </div>
          <div className='recipe-ingredients'>
            <h2>INGREDIENTS:</h2>
            <ul>
              {recipeInfo.extendedIngredients &&
                recipeInfo.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
            </ul>
          </div>
        </div>
        <h2 className='recipe-instructions'>INSTRUCTIONS:</h2>
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
