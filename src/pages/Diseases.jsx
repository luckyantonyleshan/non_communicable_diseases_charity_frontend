import React, { useEffect, useState } from 'react';
import DiseaseCard from '../components/DiseaseCard';
import apiService from '../../services/apiService';
// import '../../styles/App.css';

const Diseases = () => {
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadDiseases = async () => {
      try {
        const data = await apiService.getDiseases();
        setDiseases(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadDiseases();
  }, []);

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="diseases-page">
      <header>
        <h1>Non-Communicable Diseases</h1>
        <p>Learn about prevalent health conditions in affected areas</p>
      </header>
      <div className="diseases-grid">
        {diseases.map(disease => (
          <DiseaseCard key={disease.id} disease={disease} />
        ))}
      </div>
    </div>
  );
};

export default Diseases;