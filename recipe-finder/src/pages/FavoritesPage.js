import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesPage = () => {
  const { favoritesState } = useContext(FavoritesContext);

  if (favoritesState.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>You have no favorite recipes saved.</p>;
  }

  return (
    <div className="recipe-list">
      {favoritesState.map(recipe => (
        <div key={recipe.idMeal} className="recipe-card">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
          <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
