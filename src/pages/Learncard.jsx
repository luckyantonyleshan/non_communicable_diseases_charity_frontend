import React from 'react';
// import '../../styles/App.css';

const LearnCard = ({ icon, message, label }) => {
  return (
    <div className="learn-card">
      <div className="icon-container">
        <img src={icon} alt="icon" className="card-icon" />
      </div>
      <p className="card-message">{message}</p>
      <button className="card-label">{label}</button>
    </div>
  );
};

export default LearnCard;