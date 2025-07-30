import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import '../styles/App.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.username}</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card" onClick={() => navigate("/diseases")}>
          <h3>View Diseases</h3>
        </div>
        <div className="dashboard-card" onClick={() => navigate("/areas")}>
          <h3>View Areas</h3>
        </div>
        {user?.role === "admin" && (
          <div className="dashboard-card" onClick={() => navigate("/admin")}>
            <h3>Admin Panel</h3>
          </div>
        )}
        <Link to="/reviews" className="dashboard-card">
          <h3>Leave a Review</h3>
          <p>Share how you want to help eradicate diseases.</p>
        </Link>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}