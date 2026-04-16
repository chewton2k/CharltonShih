'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';

/* ============================================================
   Data
   ============================================================ */

const pinnedProjects = [
  {
    name: 'Imprint',
    desc: 'Provenance tool for proving authorship without uploading content. Cryptographically signed records tied to your identity.',
    lang: 'TypeScript',
    langColor: '#3178c6',
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
    name: 'DCM-Bandits-Multiplayer-Information-Asymmetric-Cascading-Bandits-For-Multiple-Clicks',
    desc: 'Reinforcement Learning Simulations for DCM Cascading MultiClick bandits.',
    lang: 'Python',
    langColor: '#3572A5',
    url: 'https://github.com/chewton2k/DCM-Bandits-Multiplayer-Information-Asymmetric-Cascading-Bandits-For-Multiple-Clicks',
  },
  {
    name: 'UCLA Design',
    desc: 'Real-time drag-and-drop furniture placement UI with MongoDB-backed state.',
    lang: 'React',
    langColor: '#61dafb',
    url: 'https://github.com/chewton2k/UCLADesign',
  },
];


const experiences = [
  {
    role: 'AI Engineer',
    organization: 'ACM AI',
    logo: '/acmai.png',
    link: null,
    date: 'April 2026–Present',
    details: [
      'Coming soon...',
    ],
  },
  {
    role: 'Lead AI Engineer',
    organization: 'TappedIn Creative Labs',
    logo: null,
    link: null,
    date: 'April 2026–Present',
    details: [
      'Coming soon...',
    ],
  },
  {
    role: 'Software Engineering',
    organization: 'Bruinwalk (Student Media UCLA)',
    logo: '/bruinwalk_logo.png',
    link: 'https://www.bruinwalk.com/',
    date: 'Oct 2025–Present',
    details: [
      'Refactored backend and Docker, React, and Django workflows for 50,000+ monthly users, cutting loading times by 20%',
      'Automated scripts to populate new enrollment information utilizing Redis for caching and cutting API calls by 33%',
      'Scaled PostgreSQL backend and parsers on 10 DigitalOcean VMs, supporting over 1M+ views monthly site visits',
    ],
  },
  {
    role: 'Software Engineer',
    organization: 'Clubhouse @ UCLA',
    logo: '/clubhouse_ucla.png',
    link: 'https://www.clubhouseucla.com/',
    date: 'Mar 2025–Present',
    details: [
      'Developed a full-stack React, Next.js, Supabase, TailwindCSS, and Vercel, serving 200+ users since launch',
      'Constructed and optimized SQL queries and API integrations to sort over 100+ reviews across 1,400+ club entries, streamlining data aggregation, improving accuracy, and workflow efficiency for development and deployment',
      'Worked alongside a 14-person cross-functional team to translate Hi-Fis into functional UI features using TailwindCSS',
    ],
  },
  {
    role: 'Software Engineer',
    organization: 'ACM TeachLA (UCLA)',
    logo: '/teachLA.png',
    link: 'https://teachla.uclaacm.com/',
    date: 'Feb 2026–April 2026',
    details: [
      'Built an interactive, kid-friendly selection sort module that made core algorithm concepts accessible to younger students',
    ],
  },
  {
    role: 'Software Engineer Intern',
    organization: 'AfterQuery',
    logo: '/afterquery.png',
    link: 'https://www.afterquery.com/',
    date: 'Oct 2025–April 2026',
    details: [
      'Developed infrastructure for at-scale reinforcement learning experimentation, including distributed training pipelines and evaluation systems to support agent training and state management',
    ],
  },
  {
    role: 'Computational & AI Epigenetics Researcher',
    organization: 'Pellegrini Lab / Roychowdhury Group',
    logo: '/ucla_engineering.png',
    link: 'https://www.vwaniroychowdhury.com/complexnetworks',
    date: 'Sep 2025–Jan 2026',
    details: [
      'Built genomic tokenization and embedding pipelines using Python, PyTorch, and Hugging Face Transformers to analyze plasma RRBS DNA, processing over 17 million+ reads to classify samples using SeqIO, NumPy, Pandas, and XGBoost',
      'Applied PCA, UMAP, and LLM-based genomic embeddings to visualize methylation variance relationships across samples',
    ],
  },
  {
    role: 'Reinforcement Learning Researcher',
    organization: 'BruinML Lab',
    logo: '/BruinML.png',
    date: 'Dec 2024–Oct 2025',
    details: [
      'Collaborated with a three-person team to design and develop multiplayer DCM cascading bandits under reinforcement learning frameworks, targeting sublinear regret under unique action and reward information asymmetry settings for recommendation domains',
      'Experimented with Thompson Sampling and UCB algorithms to analyze multi-agent, multi-click bandit performance',
      'Conducted large-scale simulations (100,000+ rounds) to validate theoretical bounds, measuring regret growth under varying exploration strategies (mMDSEE, UCB Intervals, Round-Robin Allocation)',
    ],
  },
  {
    role: 'Software Engineer',
    organization: 'AdOptimal',
    logo: '/adoptimal.png',
    date: 'Dec 2024–Aug 2025',
    details: [
      'Ad-Optimal connects businesses with student organizations, simplifying processes for advertisements and transactions',
      'Built and maintained RESTful API endpoints to support real-time communication and payment processing, integrating with frontend components and ensuring reliable client-server interactions',
      'Developed and optimized partial-search functionality, improving search efficiency and cutting load times by 50%',
      'Utilized web scraping for data collection and implemented OAuth 2.0 with JWT for secure, stateless authorization',
    ],
  },
  {
    role: 'Autonomous Robotics Researcher',
    organization: 'Arisaka Elegant Mind Lab',
    logo: '/ucla_engineering.png',
    date: 'Jul 2024–Jul 2025',
    details: [
      'Collaborated with a 10-person team to develop affordable autonomous surgery robots under Prof. Arisaka and Yunbo Wang',
      'Established servomotor communication using ROS2, ESP32, and Python',
      'Trained and tuned ACT policies using PyTorch and Mujoco, stabilizing learning across 5000+ epochs of human demonstration data',
      'Boosted tracking efficiency through OpenCV for ultrasound reconstruction and biopsy operations',
      'Applied imitation learning with ACT, CNNs, and motor outputs to enhance robotic operations',
    ],
  },
  {
    role: 'Learning Assistant (CS 35L)',
    organization: 'UCLA Henry Samueli School of Engineering',
    logo: '/ucla_engineering.png',
    link: 'https://web.cs.ucla.edu/classes/spring1f/cs35L/',
    date: 'Mar 2025–Jun 2025',
    details: [
      'Led 20–30 student discussion sessions on software construction, covering Emacs, networks, network security, scripting, operating systems, and software testing techniques',
      'Collaborated with course professors and independently conducted office hours to assist students with coursework and projects',
    ],
  },
  {
    role: 'Learning Assistant (Math 32B)',
    organization: 'UCLA Henry Samueli School of Engineering',
    logo: '/ucla_engineering.png',
    link: 'https://catalog.registrar.ucla.edu/course/2022/math32b?siteYear=2022',
    date: 'Jan 2024–Jul 2024',
    details: [
      'Led discussion sessions of 20–30 students on course topics for multivariable calculus',
      'Collaborated with course professors and peers to align discussion sessions with course learning objectives',
    ],
  },
];

/* ============================================================
   Icons
   ============================================================ */

const RepoIcon = () => (
  <svg className="p-card-repo-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z" />
  </svg>
);

const DotsIcon = () => (
  <svg className="p-card-dots" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ResumeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="12" height="12" viewBox="0 0 12 12"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className={`p-exp-chevron${open ? ' p-exp-chevron--open' : ''}`}
  >
    <polyline points="2,4 6,8 10,4" />
  </svg>
);

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
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = setTimeout(() => setLoading(false), 1600);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
  };

  if (loading) {
    return (
      <div className="portfolio" data-theme={theme}>
        <Loader fadeOut={fadeOut} />
      </div>
    );
  }

  return (
    <div className="portfolio" data-theme={theme}>
      {/* ── Navigation ── */}
      <header className="p-nav">
        <div className="p-nav-inner">
          <button
            className="p-name-pill"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="p-name-full">Charlton Shih</span>
            <span className="p-name-short">Cha</span>
          </button>

          <nav className="p-tabs" data-tab={tab} aria-label="Main navigation">
            <span className="p-tabs-slider" aria-hidden="true" />
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
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {tab === 'work' ? <WorkSection /> : <AboutSection />}
          </motion.div>
        </AnimatePresence>
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
  const [openExp, setOpenExp] = useState(null);

  return (
    <div>
      {/* Projects */}
      <section className="p-section">
        <h2 className="p-section-label">Projects</h2>

        <div className="p-projects-grid">
          {pinnedProjects.map((p) => {
            const inner = (
              <>
                <div className="p-card-header">
                  <div className="p-card-title">
                    <RepoIcon />
                    <div className="p-card-name-row">
                      <span className="p-project-name">{p.name}</span>
                      <span className="p-public-badge">Public</span>
                    </div>
                  </div>
                  <DotsIcon />
                </div>
                <p className="p-project-desc">{p.desc}</p>
                <div className="p-project-footer">
                  <span className="p-lang-dot" style={{ background: p.langColor }} />
                  <span className="p-lang-name">{p.lang}</span>
                </div>
              </>
            );
            return p.url ? (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="p-project-card">
                {inner}
              </a>
            ) : (
              <div key={p.name} className="p-project-card">{inner}</div>
            );
          })}
        </div>

        <a
          href="https://github.com/chewton2k?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="p-view-repos-btn"
        >
          View other projects 
        </a>
      </section>

      {/* Experience */}
      <section className="p-section">
        <h2 className="p-section-label">Experience</h2>
        <div className="p-list">
          {experiences.map((exp, i) => (
            <div key={i} className="p-list-item">
              <div
                className="p-list-row"
                onClick={() => setOpenExp(openExp === i ? null : i)}
              >
                <div className="p-list-left">
                  <img src={exp.logo} alt="" className="p-org-logo" width={16} height={16} loading="lazy" />
                  <span className="p-list-role">{exp.role}</span>
                  <span className="p-list-sep">·</span>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-list-org"
                      onClick={e => e.stopPropagation()}
                    >
                      {exp.organization}
                    </a>
                  ) : (
                    <span className="p-list-org-plain">{exp.organization}</span>
                  )}
                </div>
                <div className="p-exp-row-right">
                  <span className="p-list-date">{exp.date}</span>
                  <ChevronIcon open={openExp === i} />
                </div>
              </div>
              <AnimatePresence>
                {openExp === i && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="p-exp-details-inner">
                      <ul className="p-exp-bullets">
                        {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            <span className="p-currently-value">Software Engineer @ Bruinwalk</span>
          </div>
          <div className="p-currently-item">
            <span className="p-currently-label">Clubs</span>
            <span className="p-currently-value">Clubhouse, Creative Labs, Association for Computing Machinery (ACM), Biomedical Engineering Society (BMES), Blockchain Club, Theta Tau Professional Engineering Fraternity, Bruin Club Tennis, Bruin Moto Club</span>
          </div>
        </div>
      </section>

      {/* Listening to */}
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

      {/* Beyond code */}
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
