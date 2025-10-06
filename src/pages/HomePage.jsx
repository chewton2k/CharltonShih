import './HomePage.css';
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <section id="home" className="home">
      <header className="home-hero">
        <h1 className="home-title">
          I'm Charlton — exploring{' '}
          <span className="rainbow-text">AI/ML</span> and{' '}
          <span className="rainbow-text">software</span>
        </h1>
        <p className="home-subtitle">CS @ UCLA · graduating Spring 2027</p>
      </header>

      <div className="feature-grid">
        <Link to="/projects/pillpall" className="feature-card" aria-label="View PillPall">
          <div className="feature-media">
            <img src="/CharltonShih/pillpall.png" alt="PillPall preview" />
          </div>
          <div className="feature-overlay">
            <span className="feature-title">PillPall</span>
          </div>
        </Link>
        <Link to="/projects/ucla-design" className="feature-card" aria-label="View UCLA Design">
          <div className="feature-media">
            <img src="/CharltonShih/UCLAdesign.png" alt="UCLA Design preview" />
          </div>
          <div className="feature-overlay">
            <span className="feature-title">UCLA Design</span>
          </div>
        </Link>
      </div>

      <div className="button-row">
        <Link to="/about" className="home-btn">About → </Link>
        <Link to="/experience" className="home-btn">Experience → </Link>
        <Link to="/projects" className="home-btn">Projects → </Link>
      </div>
    </section>
  );
};

export default HomePage;
