import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
      <img src="/images/logo.jpg" alt="Mega Print Logo" className="logo-image" />
        <span className="brand-name">Mega Print Solutions</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
