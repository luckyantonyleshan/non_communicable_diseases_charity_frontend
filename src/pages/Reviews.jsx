import { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm";
import { API_BASE_URL } from "../config";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to fetch reviews", err));
  }, []);

  const handleNewReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="container">
      <h1>Community Reviews</h1>
      <p>
        Share how you would like to help eradicate diseases in specific areas.
      </p>

      <ReviewForm onSubmit={handleNewReview} />

      <div className="reviews-list" style={{ marginTop: "2rem" }}>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to write one!</p>
        ) : (
          reviews.map((r, index) => (
            <div key={index} className="review-card">
              <h3>{r.area}</h3>
              <p>{r.review}</p>
              <small>
                By <strong>{r.user}</strong>
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
