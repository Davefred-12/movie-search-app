// Home.js
import { useState, useEffect } from 'react';
import { searchMovies } from '../MovieAPI.js';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      const movieResults = await searchMovies('batman'); // Search for movies with default query
      setMovies(movieResults);
    }
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    }
  };


  return (
    <div className="home">
      <h1>Movie Search Results</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search"></i> {/* Font Awesome search icon */}
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
