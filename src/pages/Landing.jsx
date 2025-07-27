import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import '../styles/App.css';

function Landing() {
  const { user } = useAuth();

  return (
    <div className="landing-page">
      <h1>Welcome to NCD Project Page</h1>
      {user ? (
        <p>You are logged in as {user.username}. <Link to="/dashboard">Go to Dashboard</Link></p>
      ) : (
        <>
          <LoginForm />
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Landing;