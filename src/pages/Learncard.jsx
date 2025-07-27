import React from 'react';
import '../styles/App.css';

const LearnCard = ({ title, description, image, link }) => {
  return (
    <div className="learn-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="card-link">Explore</a>
      </div>
    </div>
  );
};

export default LearnCard;