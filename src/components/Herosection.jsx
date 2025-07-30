import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Together Against Non‑Communicable Diseases</h1>
        <p>
          Join us in creating awareness, providing resources, and making a
          difference in communities affected by diabetes, heart disease, cancer
          and more.
        </p>
        <div className="hero-buttons">
          <button
            className="get-started"
            onClick={() => navigate("/learn")}
          >
            Learn More
          </button>
          <button
            className="donate-btn"
            onClick={() => navigate("/donate")}
          >
            Donate Now
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="../assets/Heart disease.jpg"
          alt="Healthcare support"
        />
      </div>
    </section>
  );
}
