'use client';

import { useState, useEffect } from 'react';

/* ============================================================
   Data
   ============================================================ */

const pinnedProjects = [
  {
    name: 'Imprint',
    desc: 'Provenance tool for proving authorship without uploading content. Cryptographically signed records tied to your identity.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    url: 'https://github.com/chewton2k/Imprint',
  },
  {
    name: 'embd-IDE',
    desc: 'Lightweight IDE for everyday programming built with Rust and GPUI.',
    lang: 'Rust',
    langColor: '#dea584',
    url: 'https://github.com/chewton2k/embd-ide',
  },
  {
    name: 'leo',
    desc: 'Terminal note manager with audio transcription, AI structuring, and a local web UI.',
    lang: 'Rust',
    langColor: '#dea584',
    url: 'https://github.com/chewton2k/leo',
  },
  {
    name: 'BTD Training Camp',
    desc: '3D FPS physics-based aim trainer with procedural waves and shadow mapping.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    url: 'https://github.com/chewton2k/BalloonTowerTraining',
  },
  {
    name: 'PillPal',
    desc: 'Automated pill dispenser IoT system with ESP32, servo motors, and Google Calendar integration.',
    lang: 'React',
    langColor: '#61dafb',
    url: null,
  },
  {
    name: 'UCLA Design',
    desc: 'Real-time drag-and-drop furniture placement UI with MongoDB-backed state.',
    lang: 'React',
    langColor: '#61dafb',
    url: 'https://github.com/chewton2k/UCLADesign',
  },
];

const moreRepos = [
  { name: 'HourTrack',        lang: 'React',        langColor: '#61dafb', url: 'https://github.com/chewton2k/hourtracker' },
  { name: 'CrowdPlan',        lang: 'TypeScript',   langColor: '#3178c6', url: 'https://github.com/chewton2k/CrowdPlan' },
  { name: 'MiniRedis',        lang: 'Python',       langColor: '#3572A5', url: 'https://github.com/chewton2k/MiniRedis' },
  { name: 'Club Scraper',     lang: 'Python',       langColor: '#3572A5', url: 'https://github.com/chewton2k/ClubScraper' },
  { name: 'Stock Prediction', lang: 'Python',       langColor: '#3572A5', url: 'https://github.com/chewton2k/PredictingStocks' },
  { name: 'Simple Blockchain',lang: 'Python',       langColor: '#3572A5', url: 'https://github.com/chewton2k/blockchain' },
  { name: 'RiseAndWise',      lang: 'React Native', langColor: '#61dafb', url: 'https://github.com/chewton2k/Rise-Wise' },
  { name: 'Lotto Group',      lang: 'Swift',        langColor: '#f05138', url: 'https://github.com/chewton2k/Office-Group' },
];

const experiences = [
  { role: 'Software Engineer',           org: 'ACM TeachLA (UCLA)',  logo: '/teachLA.png',          url: 'https://teachla.uclaacm.com/',                           date: 'Jan 2026–Apr 2026'    },
  { role: 'Software Engineer Intern', org: 'AfterQuery',          logo: '/afterquery.png',        url: 'https://www.afterquery.com/',                            date: 'Oct 2025–Apr 2026'    },
  { role: 'Software Engineering',        org: 'Bruinwalk',           logo: '/bruinwalk_logo.png',    url: 'https://www.bruinwalk.com/',                             date: 'Oct 2025–Present'    },
  { role: 'Software Engineer',           org: 'Clubhouse @ UCLA',    logo: '/clubhouse_ucla.png',    url: 'https://www.clubhouseucla.com/',                         date: 'Mar 2025–Present'    },
  { role: 'Software Engineer',           org: 'AdOptimal',           logo: '/adoptimal.png',         url: null,                                                     date: 'Dec 2024–Aug 2025'   },
  { role: 'Learning Assistant (CS 35L)', org: 'UCLA Engineering',    logo: '/ucla_engineering.png',  url: 'https://web.cs.ucla.edu/classes/spring1f/cs35L/',        date: 'Mar 2025–Jun 2025'   },
  { role: 'Learning Assistant (Math 32B)',org: 'UCLA Engineering',   logo: '/ucla_engineering.png',  url: null,                                                     date: 'Jan 2024–Jul 2024'   },
];

const research = [
  {
    role: 'Reinforcement Learning Researcher',
    org: 'BruinML Lab',
    logo: '/BruinML.png',
    url: null,
    date: 'Dec 2024–Oct 2025',
    desc: 'Multiplayer DCM cascading bandits under RL frameworks targeting sublinear regret',
  },
  {
    role: 'Computational & AI Epigenetics Researcher',
    org: 'Pellegrini Lab / Roychowdhury Group',
    logo: '/ucla_engineering.png',
    url: 'https://www.vwaniroychowdhury.com/complexnetworks',
    date: 'Sep 2025–Jan 2026',
    desc: 'Genomic tokenization and methylation analysis using PyTorch and HuggingFace Transformers',
  },
  {
    role: 'Machine Learning Researcher',
    org: 'Arisaka Elegant Mind Lab',
    logo: '/ucla_engineering.png',
    url: null,
    date: 'Jul 2024–Jul 2025',
    desc: 'ACT policy training for autonomous surgery robots with ROS2, Mujoco, and OpenCV',
  },
];

/* ============================================================
   Icons
   ============================================================ */

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1"     x2="12" y2="3" />
    <line x1="12" y1="21"    x2="12" y2="23" />
    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1"  y1="12"    x2="3"  y2="12" />
    <line x1="21" y1="12"    x2="23" y2="12" />
    <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* ============================================================
   Root component
   ============================================================ */

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [tab, setTab] = useState('work');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
  };

  return (
    <div className="portfolio" data-theme={theme}>
      {/* ── Navigation ── */}
      <header className="p-nav">
        <div className="p-nav-inner">
          <a href="/" className="p-name-pill">Charlton Shih</a>

          <nav className="p-tabs" aria-label="Main navigation">
            <button
              className={`p-tab${tab === 'work' ? ' p-tab--active' : ''}`}
              onClick={() => setTab('work')}
            >
              Work
            </button>
            <button
              className={`p-tab${tab === 'about' ? ' p-tab--active' : ''}`}
              onClick={() => setTab('about')}
            >
              About
            </button>
          </nav>

          <button className="p-theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="p-content">
        {tab === 'work' ? (
          <div className="p-tab-panel" key="work">
            <WorkSection />
          </div>
        ) : (
          <div className="p-tab-panel" key="about">
            <AboutSection />
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="p-footer">
        <a href="https://github.com/chewton2k" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="p-footer-dot" />
        <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="p-footer-dot" />
        <a href="mailto:charltonshih645@g.ucla.edu">Email</a>
        <span className="p-footer-dot" />
        <a href="/Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </footer>
    </div>
  );
}

/* ============================================================
   Work Tab
   ============================================================ */

function WorkSection() {
  return (
    <div>
      {/* Projects */}
      <section className="p-section">
        <h2 className="p-section-label">Projects</h2>

        <div className="p-projects-grid">
          {pinnedProjects.map((p) =>
            p.url ? (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-project-card"
              >
                <div className="p-project-name">{p.name}</div>
                <p className="p-project-desc">{p.desc}</p>
                <div className="p-project-footer">
                  <span className="p-lang-dot" style={{ background: p.langColor }} />
                  <span className="p-lang-name">{p.lang}</span>
                </div>
              </a>
            ) : (
              <div key={p.name} className="p-project-card">
                <div className="p-project-name">{p.name}</div>
                <p className="p-project-desc">{p.desc}</p>
                <div className="p-project-footer">
                  <span className="p-lang-dot" style={{ background: p.langColor }} />
                  <span className="p-lang-name">{p.lang}</span>
                </div>
              </div>
            )
          )}
        </div>

        <div className="p-repos-list">
          {moreRepos.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-repo-row"
            >
              <div className="p-repo-left">
                <span className="p-lang-dot" style={{ background: r.langColor }} />
                <span className="p-repo-name">{r.name}</span>
                <span className="p-repo-lang">{r.lang}</span>
              </div>
              <span className="p-repo-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="p-section">
        <h2 className="p-section-label">Experience</h2>
        <div className="p-list">
          {experiences.map((exp, i) => (
            <div key={i} className="p-list-row">
              <div className="p-list-left">
                <img src={exp.logo} alt="" className="p-org-logo" width={16} height={16} loading="lazy" />
                <span className="p-list-role">{exp.role}</span>
                <span className="p-list-sep">·</span>
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="p-list-org">
                    {exp.org}
                  </a>
                ) : (
                  <span className="p-list-org-plain">{exp.org}</span>
                )}
              </div>
              <span className="p-list-date">{exp.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="p-section">
        <h2 className="p-section-label">Research</h2>
        <div className="p-list">
          {research.map((r, i) => (
            <div key={i} className="p-list-row p-list-row--expanded">
              <div className="p-list-left">
                <img src={r.logo} alt="" className="p-org-logo" width={16} height={16} loading="lazy" />
                <div>
                  <div className="p-research-top">
                    <span className="p-list-role">{r.role}</span>
                    <span className="p-list-sep">·</span>
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="p-list-org">
                        {r.org}
                      </a>
                    ) : (
                      <span className="p-list-org-plain">{r.org}</span>
                    )}
                  </div>
                  <p className="p-research-desc">{r.desc}</p>
                </div>
              </div>
              <span className="p-list-date">{r.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   About Tab
   ============================================================ */

function AboutSection() {
  return (
    <div>
      {/* Hero */}
      <div className="p-about-hero">
        <img src="/me.jpeg" alt="Charlton Shih" className="p-about-photo" loading="lazy" />
        <div>
          <h1 className="p-about-name">Charlton Shih</h1>
          <p className="p-about-tagline">CS @ UCLA &nbsp;·&nbsp; Los Angeles, CA</p>
          <p className="p-about-bio">
            I&rsquo;m a Computer Science undergraduate at UCLA, graduating Spring&nbsp;2027.
            I&rsquo;m drawn to the intersections of math and systems — currently exploring
            reinforcement learning, CLI tooling, and low-level programming in Rust.
            Outside of code I&rsquo;m eating too well, playing tennis, or riding motorcycles.
          </p>
          <div className="p-about-links">
            <a href="https://github.com/chewton2k" target="_blank" rel="noopener noreferrer" className="p-about-link">GitHub</a>
            <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank" rel="noopener noreferrer" className="p-about-link">LinkedIn</a>
            <a href="mailto:charltonshih645@g.ucla.edu" className="p-about-link">Email</a>
            <a href="/Charlton_Shih_Resume.pdf" target="_blank" rel="noopener noreferrer" className="p-about-link">Resume</a>
          </div>
        </div>
      </div>

      {/* Currently */}
      <section className="p-section">
        <h2 className="p-section-label">Currently</h2>
        <div className="p-currently">
          <div className="p-currently-item">
            <span className="p-currently-label">Studying</span>
            <span className="p-currently-value">BS Computer Science @ UCLA, Spring 2027</span>
          </div>
          <div className="p-currently-item">
            <span className="p-currently-label">Building</span>
            <span className="p-currently-value">leo — terminal note manager with AI structuring</span>
          </div>
          <div className="p-currently-item">
            <span className="p-currently-label">Working</span>
            <span className="p-currently-value">Software Engineering Intern @ AfterQuery</span>
          </div>
          <div className="p-currently-item">
            <span className="p-currently-label">Teaching</span>
            <span className="p-currently-value">ACM TeachLA @ UCLA</span>
          </div>
        </div>
      </section>

      {/* Beyond code */}
      <section className="p-section">
        <h2 className="p-section-label">Beyond code</h2>
        <div className="p-hobbies">
          <div className="p-hobby-card">
            <img src="/kobebeef.jpeg" alt="Food" loading="lazy" />
            <span className="p-hobby-label">Food</span>
          </div>
          <div className="p-hobby-card">
            <img src="/steak.png" alt="Cooking" loading="lazy" />
            <span className="p-hobby-label">Cooking</span>
          </div>
          <div className="p-hobby-card">
            <img src="/tennis.png" alt="Tennis" loading="lazy" />
            <span className="p-hobby-label">Tennis</span>
          </div>
          <div className="p-hobby-card">
            <img src="/motor.png" alt="Motorcycles" loading="lazy" />
            <span className="p-hobby-label">Motorcycles</span>
          </div>
        </div>
      </section>
    </div>
  );
}
