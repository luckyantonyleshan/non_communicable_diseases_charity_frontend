import React from 'react';
import './App.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">NON-COMMUNICABLE DISEASE APP</h1>
      <p className="hero-description">
        Manage your health and track non-communicable diseases.
      </p>
      <img
        className="hero-image"
        src=" https://media.istockphoto.com/id/1053339758/photo/noncommunicable-diseases-list.jpg?s=1024x1024&w=is&k=20&c=ZwGg4FV29UyuDNtKjtDmJLJ6Gqmy7j5vf7uSxIVXfCc="
        alt="Non-Communicable Disease"
      />
      <a href="#" className="hero-button">Get Started</a>
    </div>
  );
};


export default HeroSection;