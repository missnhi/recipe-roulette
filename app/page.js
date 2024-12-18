"use client";
import "@/app/styles/navbar.css";
import "@/app/styles/lottie.css";
import "@/app/styles/header.css";
import "@/app/styles/recipe-div.css"
import "@/app/styles/footer.css"
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const lottieRef = useRef(null);
  
  const onClickLoading = () => {
    console.log('Should now show the recipe');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowRecipe(true);
    }, 2000); // 2 seconds loading time
  };
  return (
    <div>
      <script
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
        type="module"
      ></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lexend:wght@100..900&display=swap"
        rel="stylesheet"
      ></link>
      <title>Recipe Roulette</title>
      
      <nav>
        <div className="nav-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-center lexend-font">RECIPE ROULETTE</div>
        
        <div className="nav-right">
          <a href="#signin">Sign In</a>
          <a href="#signup">Sign Up</a>
        </div>
      </nav>
      <header>
        
        <div className="dotlottie-player-container">
          <div> CLICK </div>
          <button onClick={onClickLoading}>
            <div ref={lottieRef}>
              <dotlottie-player
                src="https://lottie.host/cf4b572d-fada-4365-aa08-b3a0545cef4a/WtIaO5mAdH.lottie"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay={true}
              ></dotlottie-player>
            </div>
          </button>
          <div> TO ROLL </div>
        </div>
      
      </header>
      <main className="recipe-div">
        {showRecipe && (<div>
          This is where the recipe will be shown <br></br>
          RECIPE!!!!!!!!!!<br></br>
          RECIPE!!!!!!!!!!<br></br>
          RECIPE!!!!!!!!!!<br></br>
          RECIPE!!!!!!!!!!
        </div>)}
      </main>
      <footer>
      
      </footer>
    </div>
  );
}