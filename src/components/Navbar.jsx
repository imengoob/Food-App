
import ThemeToggle from "./ThemeToggle";

function Navbar({
  darkMode,
  setDarkMode,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <nav className="navbar">
      <div className="logo">
        🍔 FoodApp
      </div>

      <div className="search">
        🔍
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </nav>
  );
}

export default Navbar;
