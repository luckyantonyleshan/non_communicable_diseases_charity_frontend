import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import { Navigate, Link } from "react-router-dom";

function Landing() {
  const { user } = useAuth();

  if (user) return <Navigate to="/home" />;

  return (
    <div className="landing">
      <h1>Welcome to NCD Prevention</h1>
      <LoginForm />
      <p>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Landing;
