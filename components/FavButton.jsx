"use client"
import "../styles/fav-button.css";

// Fav Button Component
import React from "react";

export default function FavButton({ recipe, recipeInfo }) {
  const addToFav = async () => {
    // try {
    //   const response = await fetch('/api/addRecipe', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ recipe, recipeInfo }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const data = await response.json();
    //   console.log('Recipe added to favorites:', data);
    // } catch (error) {
    //   console.error('Error adding recipe to favorites:', error);
    // }
    alert(`${recipe.title} have been added to your favourites`)
  };


  return <button onClick={addToFav} className='fav-button'>🩷</button>;
}