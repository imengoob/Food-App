import ThemeToggle from "./ThemeToggle";

function Navbar({
  darkMode,
  setDarkMode,
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