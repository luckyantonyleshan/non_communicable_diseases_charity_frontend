import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import HeroSection from "../components/Herosection";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Landing() {
  const { user } = useAuth();

  return (
    <div className="landing-page">
      <div className="page-background">
        <div className="form-container">
          {user ? (
            <>
              <HeroSection />
              <p className="landing-message">
                You are logged in as <strong>{user.username}</strong>.{" "}
                <Link to="/dashboard" className="landing-link">
                  Go to Dashboard
                </Link>
              </p>
            </>
          ) : (
            <>
              <LoginForm />
              <p className="landing-message">
                Don't have an account?{" "}
                <Link to="/register" className="landing-link">
                  Register
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
