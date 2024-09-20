// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails theme={theme} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
