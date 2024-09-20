/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/pages/SearchResultsPage.jsx
import React, { useState, useEffect } from 'react';
import { fetchMoviesBySearch } from '../MovieAPI';
import MovieList from '../components/MovieList';

const SearchResultsPage = ({ query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchMoviesBySearch(query);
      setMovies(data);
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <h2>Search Results for {query}</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchResultsPage;
