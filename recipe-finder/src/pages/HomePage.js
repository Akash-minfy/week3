import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched,setSearched]=useState(false);

  const fetchRecipes = (query) => {
    setIsLoading(true);
    setSearched(s=>!s);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setIsLoading(false);
      });
  };

  const handleSearchChange = (event) => setQuery(event.target.value);

  const handleSearch = () => fetchRecipes(query);

  return (
   <div className="homepage">
      <div className="search-container">
        <h1>Recipe Finder</h1>
        <p>Find your next favorite recipe by searching below!</p>
        <SearchBar query={query} onQueryChange={handleSearchChange} onSearch={handleSearch} />
        {isLoading && <p className="loading-message">Searching for recipes...</p>}
        {console.log("rec-l",recipes.length)}
        {
        recipes.length === 0 && !isLoading && searched && (
          <p className="no-results-message">No recipes found. Try again with a different search.</p>
        )}
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;

 
