import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetail from "./pages/RecipeDetail";
import FavoritesPage from "./pages/FavoritesPage";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
