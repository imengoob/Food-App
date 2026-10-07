import ProductCard from "./ProductCard";

function ProductList({
  products,
  likedProducts,
  toggleLike,
}) {
  return (
    <div className="products-grid">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          liked={likedProducts.includes(product.id)}
          onLike={() => toggleLike(product.id)}
        />

      ))}

    </div>
  );
}

export default ProductList;