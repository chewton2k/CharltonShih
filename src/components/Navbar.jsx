import React from 'react';
import './Navbar.css'; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">CHARLTON SHIH</Link>
      </div>
      <div className="navbar-right">
        <Link href="Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</Link>
        <Link to="/research">RESEARCH</Link>
        <Link to="/experience">EXPERIENCE</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
