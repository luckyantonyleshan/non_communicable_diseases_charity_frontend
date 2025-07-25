import React, { useState } from 'react';
// import '../../styles/App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">🩺 NCD Care</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#learning" onClick={closeMenu}>Learn</a>
        <a href="#donation" onClick={closeMenu}>Donate</a>
        <a href="#login" className="login-btn" onClick={closeMenu}>Login</a>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;