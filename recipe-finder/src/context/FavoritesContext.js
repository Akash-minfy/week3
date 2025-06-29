import React, { createContext, useReducer, useEffect } from 'react';

// --- Create Context ---
export const FavoritesContext = createContext();

// --- Reducer ---
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter(recipe => recipe.idMeal !== action.payload);
    default:
      return state;
  }
};

// --- Provider Component ---
export const FavoritesProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favoritesState, dispatch] = useReducer(favoritesReducer, initialState);

  // Save to localStorage whenever favoritesState changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoritesState));
  }, [favoritesState]);

  return (
    <FavoritesContext.Provider value={{ favoritesState, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
