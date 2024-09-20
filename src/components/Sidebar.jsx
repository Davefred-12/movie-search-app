// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Sidebar.css';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ onGenreClick, onTypeClick }) => {
  const [theme, setTheme] = useState('light-theme');
  const movieTypes = ["Action", "Comedy", "Drama", "Horror", "Romance"];
  const genres = ["Hollywood", "Bollywood", "Nollywood", "Korean", "Others"];

  useEffect(() => {
    // Check the initial theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  // Function to toggle light/dark mode and apply theme to the entire site
  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    document.documentElement.className = newTheme; // Apply theme to the entire document
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };

  return (
    <aside className="sidebar">
      <h3>Movie Types</h3>
      <ul className="movie-types">
        {movieTypes.map((type) => (
          <li key={type} onClick={() => onTypeClick(type)}>
            {type}
          </li>
        ))}
      </ul>

      <h3>Genres</h3>
      <ul className="genres">
        {genres.map((genre) => (
          <li key={genre} onClick={() => onGenreClick(genre)}>
            {genre}
          </li>
        ))}
      </ul>

      {/* Icons to toggle light and dark mode */}
      <div className="theme-toggle-icons">
        {theme === 'light-theme' ? (
          <i className="fas fa-moon" onClick={toggleTheme}></i>  // Dark Mode Icon
        ) : (
          <i className="fas fa-sun" onClick={toggleTheme}></i>   // Light Mode Icon
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
