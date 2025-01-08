"use client"
import "../styles/navbar.css";
import "../styles/lottie.css";
import "../styles/header.css";
import "../styles/recipe-div.css";
import "../styles/footer.css";
import { useState, useRef, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import RecipeInfoBoard from "./components/RecipeInfoBoard";



export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])
  const lottieRef = useRef(null);
  

  useEffect(()=> {
    const fetchUsers = async() => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    const fetchRecipes = async() => {
      const response  = await fetch('/api/recipes');
      const data = await response.json();
      setRecipes(data);
    }

    fetchUsers();
    fetchRecipes();
  }, [])
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
       <title>Recipe Roulette</title>
      <script
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
        type="module"
      ></script>
      <link rel="icon" type="image/ico" href="./favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lexend:wght@100..900&display=swap"
        rel="stylesheet"
      ></link>
     
      
      <nav>
        <div className="nav-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-center lexend-font nav-title">RECIPE ROULETTE</div>
        
        <div className="nav-right">
          <a href="#signin">Sign In</a>
          <a href="#signup">Sign Up</a>
        </div>
      </nav>
      <header>
        
        <div className="dotlottie-player-container">
          <div> CLICK </div>
          <button className="dotlottie-button" onClick={onClickLoading}>
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
          <RecipeInfoBoard>
          
          </RecipeInfoBoard>
        </div>)}
        <div style = {{borderTop:"solid white", backgroundColor:"#480025"}}>
          <h1>Delete after testing is done!</h1>
        <h1> USERS</h1>
        <ul >
          {users.map((user)=> (
            <li key={user.id}> {user.name} - {user.email} - {user.password}</li>
          ))}
        </ul>

        <h1>All Recipes In Database</h1>
        <ul>
          {
            recipes.map((recipe)=> (
              <li key = {recipe.id}>{recipe.title}</li>
            ))
          }
        </ul>
        <LoginForm></LoginForm>
        </div>
        
      </main>
      <footer>
      
      </footer>
    </div>
  );
}

