import React from 'react';
import '../styles/App.css';

const Footer = () => {
  return (
    <footer className="ncd-footer">
      <p>&copy; {new Date().getFullYear()} NCD Care. All rights reserved.</p>
      <p>
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
