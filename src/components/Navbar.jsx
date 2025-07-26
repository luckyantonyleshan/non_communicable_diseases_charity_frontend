import { Link } from 'react-router-dom';
import '../styles/App.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🩺 NCD Care</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;