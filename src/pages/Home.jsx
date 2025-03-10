import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { fetchMovies } from "../api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    if (query.length > 2) {
      const results = await fetchMovies(query);
      setMovies(results || []);
    }
  };

  return (
    <div>
      <h1>IMDB Clone</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;