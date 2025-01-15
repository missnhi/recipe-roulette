// import "../styles/recipe-info.css";

// Recipe Info Component
import React from "react";
import FavButton from "./FavButton";
import "@/styles/recipe-div.css";
import "@/styles/fav-button.css";
export default function RecipeInfoBoard({}) {
  return (
    <div>
      <FavButton altText='Favorite' className='fav-button' />
      <div className='recipe-div'>
        <h2 className='recipe-title'>BANANA BREAD</h2>
        <img
          className='recipe-image'
          src='https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/01/Banana-Nut-Bread.jpg?'
          alt='Banana Nut Bread'
        />
        <div className='recipe-info'>
          <div className='recipe-prep-time'>Prep-time:</div>
          <div className='recipe-ingerdients'>
            <h3 className='text-xl font-semibold mb-2'>Ingredients:</h3>
            <ul className=''>
              {/* {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))} */}
              INGREDIENTS
            </ul>
          </div>
        </div>
        <h3 className='text-xl font-semibold mb-2'>Instructions:</h3>
        <p>INSTRUCTIONS</p>
      </div>
    </div>
  );
}
