import { Link } from "react-router-dom";
// import "../index.css"; 

function Landing() {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1 className="hero-title">Stop the Spread, Save Lives</h1>
        <p className="hero-subtitle">Learn. Prevent. Donate.</p>
        <div className="hero-buttons">
          <Link to="/learn" className="btn primary-btn">Learn More</Link>
          <Link to="/donate" className="btn secondary-btn">Donate Now</Link>
        </div>
      </header>
    </div>
  );
}

export default Landing;
