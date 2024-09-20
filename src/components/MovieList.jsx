/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <Link to={`/movie/${movie.imdbID}`}>
            {movie.Title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
