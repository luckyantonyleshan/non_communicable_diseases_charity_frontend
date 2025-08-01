"use client"

import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react"
import "../styles/App.css"

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/")
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">🩺 NCD Care</Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? "nav-links-mobile" : ""}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/learn" onClick={() => setIsMenuOpen(false)}>
            Learn
          </Link>
          <Link to="/diseases" onClick={() => setIsMenuOpen(false)}>
            Diseases
          </Link>
          <Link to="/areas" onClick={() => setIsMenuOpen(false)}>
            Areas
          </Link>
          <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
            Donate
          </Link>
          {user && user.role === "admin" && (
            <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
              Admin
            </Link>
          )}
          {user && (
            <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </Link>
          )}
        </div>

        <div className="nav-auth">
          {user ? (
            <div className="user-info">
              <span className="welcome-text">Welcome, {user.username}</span>
              <button onClick={handleLogout} className="btn btn-outline">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
