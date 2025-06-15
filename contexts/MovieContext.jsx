import { createContext, useContext, useEffect, useState } from "react";

// initializing the MovieContext
// This context will manage the state of favorite movies
const MovieContext = createContext();

// Custom hook to use the MovieContext
export const useMovieContext = () => useContext(MovieContext);

// MovieProvider component to provide the context to its children
export const MovieProvider = ({ children }) => {
  // State to hold the list of favorite movies
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.imdbID === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
