import React, { useState } from 'react';
import './Navbar.css'; 
import './Burger.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        <Link to="/" onClick={closeMenu}>CHARLTON SHIH</Link>
      </div>
      <div className="navbar-actions">
        <div className="navbar-right">
          <a href="/CharltonShih/Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>RESUME</a>
          {/*<Link to="/research" onClick={closeMenu}>RESEARCH</Link>*/}
          <Link to="/experience" onClick={closeMenu}>EXPERIENCE</Link>
          <Link to="/projects" onClick={closeMenu}>PROJECTS</Link>
          <Link to="/about" onClick={closeMenu}>ABOUT</Link>
        </div>
        <button className="burger" aria-label="Toggle navigation" onClick={toggleMenu}>
          <input className="line" type="checkbox" checked={isOpen} readOnly />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
