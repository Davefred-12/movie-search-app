// theme-toggle.js

// Get references to the theme toggle button and the HTML element
const themeToggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check the initial theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'light-theme';
htmlElement.className = currentTheme;

// Set the button icon based on the current theme
const updateButtonIcon = () => {
  if (htmlElement.classList.contains('dark-theme')) {
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Light Mode Icon
  } else {
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Dark Mode Icon
  }
};

updateButtonIcon();

// Toggle the theme when the button is clicked
themeToggleButton.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark-theme')) {
    htmlElement.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    htmlElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
  updateButtonIcon();
});
