import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { API_BASE_URL, ENDPOINTS } from "../config.js";

export default function ReviewForm({ onSubmit }) {
  const { user } = useAuth();
  const [areaId, setAreaId] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}${ENDPOINTS.areas.base}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch areas");
        return res.json();
      })
      .then((data) => setAreas(data))
      .catch((err) => {
        console.error("Failed to fetch areas", err);
        setError("Could not load areas. Please try again.");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in to leave a review");
      return;
    }

    if (!areaId || !content) {
      setError("Please select an area and enter a review");
      return;
    }

    const newReview = {
      area_id: parseInt(areaId),
      content,
    };

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.reviews.base}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit review");
      }

      const savedReview = await response.json();
      onSubmit(savedReview);
      setAreaId("");
      setContent("");
    } catch (error) {
      console.error("Submission error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      {error && <p className="error">{error}</p>}
      <select
        value={areaId}
        onChange={(e) => setAreaId(e.target.value)}
        required
        disabled={loading || areas.length === 0}
      >
        <option value="">Select an affected area</option>
        {areas.map((area) => (
          <option key={area.id} value={area.id}>
            {area.name}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Write your thoughts on how you can help..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading || areas.length === 0}>
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}