import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config.js';  
import '../styles/App.css';

const Areas = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/areas`);
        if (!response.ok) throw new Error('Failed to fetch areas');
        const data = await response.json();
        setAreas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  if (loading) return <div className="loading">Loading areas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="areas-page">
      <h1>Affected Areas</h1>
      <div className="areas-grid">
        {areas.map(area => (
          <div
            key={area.id}
            onClick={() => navigate(`/areas/${area.id}`)}
            className="area-card"
          >
            <h3>{area.name}</h3>
            <p>{area.description.substring(0, 100)}...</p>
            <div className="map-container">
              <MapComponent latitude={area.latitude} longitude={area.longitude} interactive={false} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;