"use client"
import { useNavigate } from "react-router-dom"
import "../styles/App.css"

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Together Against <span className="highlight">Non‑Communicable</span> Diseases
          </h1>
          <p>
            Join us in creating awareness, providing resources, and making a difference in communities affected by
            diabetes, heart disease, cancer and more.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/learn")}>
              Learn More
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/donate")}>
              Donate Now
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/placeholder.svg?height=400&width=600" alt="Healthcare support" />
          <div className="hero-decoration decoration-1"></div>
          <div className="hero-decoration decoration-2"></div>
        </div>
      </div>
    </section>
  )
}
