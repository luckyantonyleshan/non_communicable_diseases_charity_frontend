import React from 'react';
// import '../../styles/App.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Protecting Communities.<br />Preventing Diseases.</h1>
        <p>Empowering health with technology-based solutions<br />for communicable disease prevention</p>
        <button className="get-started">Get Started</button>
      </div>
      <div className="hero-image">
        <img
          src="https://media.istockphoto.com/id/471930921/photo/non-communicable-disease.jpg?s=612x612&w=0&k=20&c=vatAyv5HRf9kwqoZB9eJVzvifQHxtBMAy2hDeKUf6JQ="
          alt="Microscopic view"
        />
      </div>
    </section>
  );
};

export default HeroSection;