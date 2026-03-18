import Link from 'next/link';
import FadeIn from './components/FadeIn';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">
          I&apos;m Charlton — exploring{' '}
          <span className="scrolling-text-gradient">AI/ML</span> and{' '}
          <span className="scrolling-text-gradient">software</span>
        </h1>
        <p className="hero-subtitle">CS @ UCLA &middot; graduating Spring 2027</p>
        <div className="cta-group">
          <Link href="/projects" className="cta-button primary">View Work</Link>
          <Link href="/about" className="cta-button secondary">About Me</Link>
        </div>
      </section>

      <FadeIn>
        <section className="featured-work">
          <div className="section-header">
            <h2 className="section-title">Selected Work</h2>
            <Link href="/projects" className="view-all-link">View All &rarr;</Link>
          </div>

          <div className="feature-grid">
            <a href="https://www.bruinwalk.com/" target="_blank" rel="noopener noreferrer" className="feature-card" aria-label="View Bruinwalk">
              <div className="card-image-wrapper">
                <img src="/bruinwalk.png" alt="Bruinwalk preview" />
              </div>
              <div className="card-info">
                <span className="card-category">Education / Data</span>
                <h3 className="card-title">Bruinwalk</h3>
              </div>
            </a>

            <a href="https://www.clubhouseucla.com/" target="_blank" rel="noopener noreferrer" className="feature-card" aria-label="View UCLA Clubhouse">
              <div className="card-image-wrapper">
                <img src="/clubhouse1.png" alt="UCLA Clubhouse preview" />
              </div>
              <div className="card-info">
                <span className="card-category">Education / Community</span>
                <h3 className="card-title">UCLA Clubhouse</h3>
              </div>
            </a>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className="quick-links">
          <Link href="/experience" className="link-card">
            <span className="link-label">Experience</span>
            <span className="link-arrow">&rarr;</span>
          </Link>
          <a
            href="https://chewton2k.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card tribute"
          >
            <span className="link-label">Archived Portfolio</span>
            <span className="link-arrow">&rarr;</span>
          </a>
        </section>
      </FadeIn>
    </div>
  );
};

export default HomePage;
