import LikeButton from "./LikeButton";

function ProductCard({
  product,
  liked,
  onLike,
}) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">

          <strong>
            ${product.price.toFixed(2)}
          </strong>

          <LikeButton
            liked={liked}
            onLike={onLike}
          />

        </div>

      </div>

    </div>
  );
}

export default ProductCard;