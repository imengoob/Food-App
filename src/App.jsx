import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";

import { products } from "./data/products";

import "./App.css";

function App() {

  // Catégorie
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // Likes
  const [likedProducts, setLikedProducts] =
    useState([]);

  // Dark Mode
  const [darkMode, setDarkMode] =
    useState(false);


  // Filtrage
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );


  // Like
  const toggleLike = (id) => {

    setLikedProducts((previousLikes) => {

      if (previousLikes.includes(id)) {

        return previousLikes.filter(
          (productId) => productId !== id
        );

      }

      return [
        ...previousLikes,
        id,
      ];

    });

  };


  return (
    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      <div className="layout">

        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />


        <main className="main">

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

              <button>
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


          <div className="products-header">

            <h2>
              Nos produits
            </h2>

            <span>
              {filteredProducts.length} produits
            </span>

          </div>


          <ProductList
            products={filteredProducts}
            likedProducts={likedProducts}
            toggleLike={toggleLike}
          />

        </main>

      </div>

    </div>
  );
}

export default App;