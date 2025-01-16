// filepath: /home/labber/lighthouse/2_LHL_Projects/real-recipe-roulette/recipe-roulette/components/fav-bar.jsx
import React, { useEffect, useState } from 'react';

export default function FavBar({ email }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorite recipes for the user by email
    fetch(`/api/getUserFavorites?email=${email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFavorites(data);
      })
      .catch(error => {
        console.error('Error fetching favorite recipes:', error);
      });
  }, [email]);

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <ul>
        {favorites.map(fav => (
          <li key={fav.recipe.id}>
            <h3>{fav.recipe.title}</h3>
            <img src={fav.recipe.image} alt={fav.recipe.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}