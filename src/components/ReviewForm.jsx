import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { API_BASE_URL } from "../config"

const AREA_OPTIONS = [
  "Nairobi, Kenya",
  "Kinshasa, DRC",
  "Dhaka, Bangladesh",
  "Lagos, Nigeria",
  "Karachi, Pakistan",
  "Mumbai, India",
];

export default function ReviewForm({ onSubmit }) {
  const { user } = useAuth();
  const [area, setArea] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to leave a review");
      return;
    }

    const newReview = {
      area,
      review,
      user: user.username,
    };

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) throw new Error("Failed to submit review");

      const savedReview = await response.json();
      onSubmit(savedReview);

      setArea("");
      setReview("");
    } catch (error) {
      console.error(error);
      alert("Could not submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>

      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
        required
      >
        <option value="">Select an affected area</option>
        {AREA_OPTIONS.map((areaOption, index) => (
          <option key={index} value={areaOption}>
            {areaOption}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Write your thoughts on how you can help..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
