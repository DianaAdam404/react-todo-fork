import { useState } from "react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="like-demo">
      <div>
        <span className="article-label">JEGYZET · 3 PERC</span>
        <h3>Apró komponensek, nagy ötletek</h3>
      </div>
      <button
        className={`like-button ${isLiked ? "is-liked" : ""}`}
        type="button"
        aria-pressed={isLiked}
        onClick={() => setIsLiked(!isLiked)}
      >
        <span aria-hidden="true">{isLiked ? "♥" : "♡"}</span>
        {isLiked ? "Kedvelve" : "Kedvelés"}
      </button>
    </div>
  );
}

export default LikeButton;
