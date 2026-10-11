
import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";

import { products } from "./data/products";

import "./App.css";

function App() {
  // Catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // Barre de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Produits aimés
  const [likedProducts, setLikedProducts] =
    useState([]);

  // Mode sombre
  const [darkMode, setDarkMode] = useState(false);

  // Filtrage par catégorie et recherche
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  // Ajouter ou retirer un like
  const toggleLike = (id) => {
    setLikedProducts((previousLikes) => {
      if (previousLikes.includes(id)) {
        return previousLikes.filter(
          (productId) => productId !== id
        );
      }

      return [...previousLikes, id];
    });
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* Barre de navigation et recherche */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="layout">

        {/* Filtres par catégorie */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="main">

          {/* Bannière d'accueil */}
          <section className="hero">

            <div>
              <h1>
                Des plats délicieux
                <br />
                à portée de main !
              </h1>

              <p>
                Commandez vos plats préférés
                <br />
                en quelques clics.
              </p>

              <button
                onClick={() => {
                  document
                    .querySelector(".products-header")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Commander maintenant →
              </button>
            </div>

            <div className="hero-food">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                alt="Burger délicieux"
              />
            </div>

          </section>

          {/* Titre et nombre de produits */}
          <div className="products-header">
            <h2>Nos produits</h2>

            <span>
              {filteredProducts.length} produit(s)
            </span>
          </div>

          {/* Liste filtrée des produits */}
          {filteredProducts.length > 0 ? (
            <ProductList
              products={filteredProducts}
              likedProducts={likedProducts}
              toggleLike={toggleLike}
            />
          ) : (
            <p className="no-products">
              Aucun produit trouvé. Essayez un autre nom
              ou une autre catégorie.
            </p>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
