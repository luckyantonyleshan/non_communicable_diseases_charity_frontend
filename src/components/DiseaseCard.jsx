import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
const DiseaseCard = ({ disease }) => {
  return (
    <div className="disease-card">
      <h3>{disease.name}</h3>
      <p className="description">{disease.description}</p>
      <div className="meta-data">
        <span className="prevalence">Affects {disease.prevalence}% of population</span>
        <Link to={`/diseases/${disease.id}`} className="details-link">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default DiseaseCard;