import { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div>
      <h2>My Favorite Movies</h2>
      {favorites.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <button onClick={() => removeFavorite(movie.imdbID)}>❌ Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;