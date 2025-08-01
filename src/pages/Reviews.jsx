import { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm.jsx";
import { API_BASE_URL, ENDPOINTS } from "../config.js";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}${ENDPOINTS.reviews.base}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Reviews API response:", data); // Debug log
        // Ensure data is an array; fallback to empty array if not
        const reviewsArray = Array.isArray(data)
          ? data
          : Array.isArray(data.reviews)
          ? data.reviews
          : [];
        setReviews(reviewsArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
        setError("Could not load reviews. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleNewReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="container">
      <h1>Community Reviews</h1>
      <p>Share how you would like to help eradicate diseases in specific areas.</p>
      <ReviewForm onSubmit={handleNewReview} />
      <div className="reviews-list">
        {loading ? (
          <p className="loading">Loading reviews...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : reviews.length === 0 ? (
          <p>No reviews yet. Be the first to write one!</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="review-card">
              <h3>{r.area_name || `Area ID: ${r.area_id}`}</h3>
              <p>{r.content}</p>
              <small>
                By <strong>{r.username || "Anonymous"}</strong>
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}