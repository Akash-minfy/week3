import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => (
  <div className="recipe-list">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.idMeal} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
