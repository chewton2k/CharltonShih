import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">
          I'm Charlton — exploring <span className="scrolling-text-gradient"> AI/ML</span> and <span className="scrolling-text-gradient">software</span>
        </h1>
        <p className="hero-subtitle">CS @ UCLA · graduating Spring 2027</p>
        
        <div className="cta-group">
          <Link to="/projects" className="cta-button primary">View Projects</Link>
          <Link to="/about" className="cta-button secondary">About Me</Link>
        </div>
      </section>

      <section className="featured-work">
        <div className="section-header">
          <h2 className="section-title">Selected Works</h2>
          <Link to="/projects" className="view-all-link">View All →</Link>
        </div>
        
        <div className="feature-grid">
          <Link to="/projects/pillpall" className="feature-card large" aria-label="View PillPal">
            <div className="card-image-wrapper">
              <img src="/CharltonShih/pillpall.png" alt="PillPal preview" />
            </div>
            <div className="card-info">
              <span className="card-category">IoT / Healthcare</span>
              <h3 className="card-title">PillPal</h3>
            </div>
          </Link>
          
          <Link to="/projects/ucla-design" className="feature-card" aria-label="View UCLA Design">
            <div className="card-image-wrapper">
              <img src="/CharltonShih/UCLAdesign.png" alt="UCLA Design preview" />
            </div>
            <div className="card-info">
              <span className="card-category">Frontend / Design / Backend</span>
              <h3 className="card-title">UCLA Design</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="quick-links">
        <Link to="/experience" className="link-card">
          <span className="link-label">Experience</span>
          <span className="link-arrow">→</span>
        </Link>
        <a 
          href="https://chewton2k.github.io/Portfolio/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-card tribute"
        >
          <span className="link-label">Archived Portfolio</span>
          <span className="link-arrow">↗</span>
        </a>
      </section>
    </div>
  );
};

export default HomePage;
