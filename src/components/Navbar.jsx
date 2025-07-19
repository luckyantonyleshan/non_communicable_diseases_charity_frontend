import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">🩺 NCD Care</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#learning" onClick={closeMenu}>Learning</a>
        <a href="#donation" onClick={closeMenu}>Donations</a>
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
