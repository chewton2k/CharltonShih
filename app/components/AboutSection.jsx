import { GitHubIcon, LinkedInIcon, EmailIcon, ResumeIcon } from './icons';

export default function AboutSection() {
  return (
    <div>
      <div className="p-about-hero">
        <img src="/me.jpeg" alt="Charlton Shih" className="p-about-photo" loading="lazy" />
        <div>
          <h1 className="p-about-name">Charlton Shih</h1>
          <p className="p-about-tagline">CS @ UCLA &nbsp;·&nbsp; Los Angeles, CA</p>
          <p className="p-about-bio">
            I&rsquo;m a Computer Science undergraduate at UCLA, graduating Spring&nbsp;2027.
            I&rsquo;m drawn to the intersections of math and systems — currently exploring
            reinforcement learning, CLI tooling, and low-level programming in Rust.
            Outside of code I&rsquo;m eating well, playing tennis, or riding motorcycles.
          </p>
          <div className="p-about-links">
            <a href="https://github.com/chewton2k" target="_blank" rel="noopener noreferrer" className="p-about-link">
              <GitHubIcon />GitHub
            </a>
            <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank" rel="noopener noreferrer" className="p-about-link">
              <LinkedInIcon />LinkedIn
            </a>
            <a href="mailto:charltonshih645@g.ucla.edu" className="p-about-link">
              <EmailIcon />Email
            </a>
            <a href="/Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer" className="p-about-link">
              <ResumeIcon />Resume
            </a>
          </div>
        </div>
      </div>

      <section className="p-section">
        <h2 className="p-section-label">Currently</h2>
        <div className="p-currently">
          <div className="p-currently-item">
            <span className="p-currently-label">Learning</span>
            <span className="p-currently-value">Rust and Reinforcement Learning</span>
          </div>
          <div className="p-currently-item">
            <span className="p-currently-label">Building</span>
            <span className="p-currently-value">leo — terminal note manager with AI structuring</span>
          </div>
          <div className="p-currently-item">
            <span className="p-currently-label">Working</span>
            <span className="p-currently-value">Software Engineer @ Bruinwalk</span>
          </div>
          <div className="p-currently-item">
            <span className="p-currently-label">Clubs</span>
            <span className="p-currently-value">Theta Tau Professional Engineering Fraternity, Bruin Club Tennis, Bruin Moto Club</span>
          </div>
        </div>
      </section>

      <section className="p-section">
        <h2 className="p-section-label">Listening to</h2>
        <div className="p-spotify-list">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3wuCCNCnBhJlwkIJTBZFiv?utm_source=generator&theme=0"
            width="100%" height="100" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/0eFMbKCRw8KByXyWBw8WO7?utm_source=generator&theme=0"
            width="100%" height="100" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/4iD3msRl5hJUBEtrQwnR4k?utm_source=generator&theme=0"
            width="100%" height="100" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/6JfcUgZqHbb20KTfHayS9j?utm_source=generator&theme=0"
            width="100%" height="100" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      <section className="p-section p-section--beyond">
        <h2 className="p-section-label">Some of my favorite hobbies...</h2>
        <div className="p-hobbies">
          <div className="p-hobby-card">
            <img src="/kobebeef.jpeg" alt="Food" loading="lazy" />
          </div>
          <div className="p-hobby-card">
            <img src="/steak.png" alt="Cooking" loading="lazy" />
          </div>
          <div className="p-hobby-card">
            <img src="/tennis.png" alt="Tennis" loading="lazy" />
          </div>
          <div className="p-hobby-card">
            <img src="/motor.png" alt="Motorcycles" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}
