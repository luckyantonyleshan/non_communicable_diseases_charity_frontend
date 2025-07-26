import React, { useState, useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { API_BASE_URL } from '../config.js';  
import '../styles/App.css';


const ReviewForm = ({ areaId }) => {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          area_id: areaId,
          user_id: user.id,
          content,
          rating
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to submit review');
      }

      setSuccess('Review submitted successfully!');
      setContent('');
      setRating(5);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="review-form">
      <h3>Add Your Review</h3>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your experience..."
          required
        />
        <div>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
            {[5, 4, 3, 2, 1].map((num) => (
              <option key={num} value={num}>{num} ★</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;