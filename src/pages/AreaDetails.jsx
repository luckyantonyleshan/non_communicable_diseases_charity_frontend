import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config.js';  
import ReviewForm from '../components/ReviewForm';
import '../styles/App.css';

const AreaDetails = () => {
  const { id } = useParams();
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArea = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/areas/${id}`);
        if (!response.ok) throw new Error('Failed to fetch area');
        const data = await response.json();
        setArea(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArea();
  }, [id]);

  if (loading) return <div className="loading">Loading area details...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="area-details">
      <h1>{area.name}</h1>
      <p>{area.description}</p>
      <div className="map-container">
        <MapComponent latitude={area.latitude} longitude={area.longitude} />
      </div>
      <div className="reviews-section">
        <h2>Community Reviews</h2>
        <ReviewForm areaId={id} />
      </div>
    </div>
  );
};

export default AreaDetails;