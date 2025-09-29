import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">CHARLTON SHIH</a>
      </div>
      <div className="navbar-right">
        <a href="Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
        <a href="/research">RESEARCH</a>
        <a href="/experience">EXPERIENCE</a>
        <a href="/projects">PROJECTS</a>
        <a href="/about">ABOUT</a>
      </div>
    </nav>
  );
};

export default Navbar;
