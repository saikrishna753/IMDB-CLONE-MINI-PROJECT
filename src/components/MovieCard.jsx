import { Link } from "react-router-dom";

const MovieCard = ({ movie, onFavorite }) => {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <button onClick={() => onFavorite(movie)}>❤️ Favorite</button>
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;