import MovieCard from "./MovieCard";

const MovieList = ({ movies, onFavorite }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default MovieList;