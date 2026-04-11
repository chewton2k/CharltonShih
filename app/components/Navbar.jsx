import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">CHARLTON SHIH</Link>
      </div>
      <div className="navbar-right">
        <a href="/Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
      </div>
    </nav>
  );
};

export default Navbar;
