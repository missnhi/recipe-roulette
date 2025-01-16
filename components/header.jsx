"use client";

import { useState, useRef } from "react";
import axios from "axios";
import "../styles/header.css";
import "../styles/lottie.css";
import RecipeInfoBoard from "./RecipeInfoBoard";
// import { cookies } from "next/headers";
const apiKey = process.env.SPOONACULAR_API_KEY;

// Header Component
export default function Header({ setShowRecipe }) {
  const [recipes, setRecipes] = useState(null);
  const lottieRef = useRef(null);

  const userSelection = {
    ingredients: ["flour", "sugar", "rice"],
    cuisine: "",
    meal: "",
  };
  // const hasCookies = await cookieStore.get("userId");

  const onClickLoading = () => {
    axios
      .get(
        // `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${userSelection.ingredients.join(',+')}&number=1`
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${userSelection.ingredients.join(',')}&fillIngredients=false&number=1&addRecipeInformation=true&addRecipeInstructions=true&sort=random`
      )
      .then(({ data }) => {
        console.log(data);
        setRecipes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToFav = (recipes) => {
    // adding to favs you would check to see if they have a cookie
    //
    axios.post("/api/recipes", recipes).then(() => {});
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-text'>CLICK</div>
        <button onClick={onClickLoading} className='dotlottie-button'>
          <div className='dotlottie-player-container' ref={lottieRef}>
            <dotlottie-player
              src='https://lottie.host/cf4b572d-fada-4365-aa08-b3a0545cef4a/WtIaO5mAdH.lottie'
              background='transparent'
              speed='1'
              className='dolottie-player'
              loop
              autoplay={true}
            ></dotlottie-player>
          </div>
        </button>
        <div className='header-text'>TO ROLL</div>
      </div>
      {recipes && (
        <div className='recipe-container'>
          {/* <h1>All Recipes from Spoonacular</h1> */}
          <ul className='recipe-list'>
            {
              //recipes.map ((recipe) => <RecipeInfoBoard key = {recipe.id} recipe = {recipe}/>)
              <RecipeInfoBoard
                key={recipes.results[0].id}
                recipe={recipes.results[0]}
              />
            }
          </ul>
        </div>
      )}
    </header>
  );
}
