import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { favoritesState, dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals[0]));
  }, [recipeId]);

  if (!recipe) return <p>Loading...</p>;

  const isFavorited = favoritesState.some(item => item.idMeal === recipe.idMeal);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: recipe.idMeal });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: recipe });
    }
  };

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strCategory}</h3>
      <p>{recipe.strInstructions}</p>
      
      <ul>
        <h4 className="ingredients-title">Ingredients</h4>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={handleFavoriteClick} className="favorite-btn">
        {isFavorited ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
      </button>

      <Link to="/">← Back to Search</Link>
    </div>
  );
};

export default RecipeDetail;
