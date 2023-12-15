// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">Logo</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/universityInfo">Universities</Link>
       
      </nav>
    </header>
  );
};

export default Header;
