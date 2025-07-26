import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import { Navigate, Link } from "react-router-dom";
import '../styles/App.css';

function Landing() {
  const { user } = useAuth();

  if (user) return <Navigate to="/home" />;

  return (
    <div className="landing-page">
      <h1>Welcome to NCD Project Page</h1>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Landing;