'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        <Link href="/" onClick={closeMenu}>CHARLTON SHIH</Link>
      </div>
      <div className="navbar-actions">
        <div className="navbar-right">
          <a href="/Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>RESUME</a>
          <Link href="/experience" onClick={closeMenu}>EXPERIENCE</Link>
          <Link href="/projects" onClick={closeMenu}>PROJECTS</Link>
          <Link href="/about" onClick={closeMenu}>ABOUT</Link>
        </div>
        <ThemeToggle />
        <button className="burger" aria-label="Toggle navigation" onClick={toggleMenu}>
          <input className="line" type="checkbox" checked={isOpen} readOnly />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
