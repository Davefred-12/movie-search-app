import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/public/Logo.png" alt="Logo" className="logo-img" />
        <span className="app-name">Movies</span>
      </div>

      <div className="nav-center">
        {/* Home link with icon */}
        <Link to="/" className="nav-link">
          <i className="fas fa-home"></i> Home
        </Link>

        {/* Search link with dropdown */}
        <div
          className="nav-link search-link"
          onMouseEnter={() => setIsSearchOpen(true)}
          onMouseLeave={() => setIsSearchOpen(false)}
        >
          <i className="fas fa-search"></i> Search
          {isSearchOpen && (
            <div className="dropdown search-dropdown">
              <input
                type="text"
                placeholder="Search for movies..."
                className="search-input"
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          )}
        </div>

        {/* Movies dropdown */}
        <div className="nav-link dropdown">
          <i className="fas fa-film"></i> Movies
          <div className="dropdown-content">
            <Link to="/movies/hollywood">Hollywood</Link>
            <Link to="/movies/bollywood">Bollywood</Link>
            <Link to="/movies/nollywood">Nollywood</Link>
            <Link to="/movies/korean">Korean</Link>
            <Link to="/movies/others">Others</Link>
          </div>
        </div>

        {/* Series dropdown */}
        <div className="nav-link dropdown">
          <i className="fas fa-tv"></i> Series
          <div className="dropdown-content">
            <Link to="/series/hollywood">Hollywood Series</Link>
            <Link to="/series/korean">Korean Series</Link>
            <Link to="/series/others">Others</Link>
          </div>
        </div>

        {/* Animation dropdown */}
        <div className="nav-link dropdown">
          <i className="fas fa-play"></i> Animation
          <div className="dropdown-content">
            <Link to="/animation/disney">Disney</Link>
            <Link to="/animation/marvel">Marvel</Link>
            <Link to="/animation/dc">DC</Link>
            <Link to="/animation/others">Others</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

