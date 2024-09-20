import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../MovieAPI.js";
import "./MovieDetails.css";

// eslint-disable-next-line react/prop-types
function MovieDetails({ theme }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      const movieData = await getMovieDetails(id);
      setMovie(movieData);
    }
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div className={`movie-details ${theme}`}>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>

      <div className="movie-actions">
        {/* Example: Replace 'example.com' with your actual backend or movie service */}
        <a
          href={`https://moviestreamingplatform.com/download/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download Movie
        </a>
        <a
          href={`https://moviestreamingplatform.com/stream/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="stream-btn"
        >
          Live Stream
        </a>
      </div>
    </div>
  );
}

export default MovieDetails;
