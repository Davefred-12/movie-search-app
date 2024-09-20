import axios from "axios";

// Your OMDb API key
const API_KEY = "12a2df39"; // Replace with your actual API key
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// Fetch movies by search query
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}`);
    return response.data.Search; // Array of movie objects
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};

// Fetch movie details by ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${movieId}`);
    return response.data; // Movie detail object
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const getRandomMovies = async () => {
  // Fetch random movies by using predefined movie IDs or genres
  const randomQueries = ['batman', 'spiderman', 'superman', 'avengers']; // Example queries
  const randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
  const response = await axios.get(`${BASE_URL}&s=${randomQuery}`);
  return response.data.Search;
};