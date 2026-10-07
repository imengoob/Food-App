function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-button"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;