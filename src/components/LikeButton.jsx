function LikeButton({ liked, onLike }) {
  return (
    <button
      className={
        liked
          ? "like-button liked"
          : "like-button"
      }
      onClick={onLike}
    >
      {liked ? "♥" : "♡"}
    </button>
  );
}

export default LikeButton;