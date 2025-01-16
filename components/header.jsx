"use client";

import { useState, useRef } from "react";
import axios from "axios";
import "../styles/header.css";
import "../styles/lottie.css";
// import { cookies } from "next/headers";
const apiKey = process.env.SPOONACULAR_API_KEY;

// Header Component
export default function Header({ setShowRecipe }) {
  // removed "async" from before "function" in this line due to error
  const [recipes, setRecipes] = useState([]);
  const lottieRef = useRef(null);

  // const hasCookies = await cookieStore.get("userId");

  const onClickLoading = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+flour,+sugar&number=2`
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
          {/* <h1 className='recipe=title'>All Recipes from Spoonacular</h1> */}
          <ul className='recipe-list'>
            {recipes.map((recipe) => (
              <li key={recipe.id} className='recipe-item'>
                {/* {!hasCookie && (
                    <p onClick={() => addToFav(recipe)}>Add to Fav</p>
                  )} */}

                <h2 className='recipe-name'>{recipe.title}</h2>
                <img
                  className='recipe-image'
                  src={recipe.image}
                  alt={recipe.title}
                />
                <p>ID: {recipe.id}</p>
                <p>Likes: {recipe.likes}</p>
                <p>Missed Ingredients Count: {recipe.missedIngredientCount}</p>
                <p>Used Ingredients Count: {recipe.usedIngredientCount}</p>
                <h3>Missed Ingredients:</h3>
                <ul className='ingedients-list'>
                  {recipe.missedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                  ))}
                </ul>
                <h3>Used Ingredients:</h3>
                <ul className='ingedients-list'>
                  {recipe.usedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                  ))}
                </ul>
                {/* <button
                    onClick={() => addToFav(recipe)}
                    className='favorite-button'
                  >
                    Add to Favorites
                  </button> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
