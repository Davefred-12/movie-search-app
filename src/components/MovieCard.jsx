/* eslint-disable react/prop-types */

import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
