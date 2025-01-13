"use client";
import { useState, useRef } from "react";
import axios from "axios";

// Header Component
export default function Header({ setShowRecipe }) {
  const [recipes, setRecipes] = useState([]);
  const lottieRef = useRef(null);

  const onClickLoading = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=3b3e900555184a2ba0698a1598d3f261&ingredients=apples,+flour,+sugar&number=2`
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
        {recipes &&
          recipes.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <img src={item.image} />
            </div>
          ))}
      </div>
    </header>
  );
}
