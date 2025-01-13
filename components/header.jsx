"use client";
import { useState, useRef } from "react";
import axios from "axios";

const apiKey = process.env.SPOONACULAR_API_KEY;

// Header Component
export default function Header({ setShowRecipe }) {
  const [recipes, setRecipes] = useState([]);
  const lottieRef = useRef(null);

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

  return (
    <header className='flex items-center justify-center bg-transparent h-screen border border-black w-full mt-1 text-white'>
      <div className='flex items-center space-x-4'>
        <div className='text-lg'>CLICK</div>
        <button
          onClick={onClickLoading}
          className='bg-transparent border-none cursor-pointer'
        >
          <div ref={lottieRef}>
            <dotlottie-player
              src='https://lottie.host/cf4b572d-fada-4365-aa08-b3a0545cef4a/WtIaO5mAdH.lottie'
              background='transparent'
              speed='1'
              className='w-[200px] h-[200px]'
              loop
              autoplay={true}
            ></dotlottie-player>
          </div>
        </button>
        <div className='text-lg'>TO ROLL</div>
        {recipes && (
          <div>
            <h1>All Recipes from Spoonacular</h1>
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id}>
                  <h2>{recipe.title}</h2>
                  <img src={recipe.image} alt={recipe.title} />
                  <p>ID: {recipe.id}</p>
                  <p>Likes: {recipe.likes}</p>
                  <p>
                    Missed Ingredients Count: {recipe.missedIngredientCount}
                  </p>
                  <p>Used Ingredients Count: {recipe.usedIngredientCount}</p>
                  <h3>Missed Ingredients:</h3>
                  <ul>
                    {recipe.missedIngredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}</li>
                    ))}
                  </ul>
                  <h3>Used Ingredients:</h3>
                  <ul>
                    {recipe.usedIngredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
