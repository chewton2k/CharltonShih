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
  { name: 'HourTrack', lang: 'React', langColor: '#61dafb', url: 'https://github.com/chewton2k/hourtracker' },
  { name: 'CrowdPlan', lang: 'TypeScript', langColor: '#3178c6', url: 'https://github.com/chewton2k/CrowdPlan' },
  { name: 'MiniRedis', lang: 'Python', langColor: '#3572A5', url: 'https://github.com/chewton2k/MiniRedis' },
  { name: 'Club Scraper', lang: 'Python', langColor: '#3572A5', url: 'https://github.com/chewton2k/ClubScraper' },
  { name: 'Stock Prediction', lang: 'Python', langColor: '#3572A5', url: 'https://github.com/chewton2k/PredictingStocks' },
  { name: 'Simple Blockchain', lang: 'Python', langColor: '#3572A5', url: 'https://github.com/chewton2k/blockchain' },
  { name: 'RiseAndWise', lang: 'React Native', langColor: '#61dafb', url: 'https://github.com/chewton2k/Rise-Wise' },
  { name: 'Lotto Group', lang: 'Swift', langColor: '#f05138', url: 'https://github.com/chewton2k/Office-Group' },
];

const experiences = [
  { role: 'Software Engineer', org: 'ACM TeachLA (UCLA)', logo: '/teachLA.png', url: 'https://teachla.uclaacm.com/', date: 'Feb 2026–Present' },
  { role: 'Software Engineering Intern', org: 'AfterQuery', logo: '/afterquery.png', url: 'https://www.afterquery.com/', date: 'Oct 2025–Present' },
  { role: 'Software Engineering', org: 'Bruinwalk', logo: '/bruinwalk_logo.png', url: 'https://www.bruinwalk.com/', date: 'Oct 2025–Present' },
  { role: 'Software Engineer', org: 'Clubhouse @ UCLA', logo: '/clubhouse_ucla.png', url: 'https://www.clubhouseucla.com/', date: 'Mar 2025–Present' },
  { role: 'Software Engineer', org: 'AdOptimal', logo: '/adoptimal.png', url: null, date: 'Dec 2024–Aug 2025' },
  { role: 'Learning Assistant (CS 35L)', org: 'UCLA Engineering', logo: '/ucla_engineering.png', url: 'https://web.cs.ucla.edu/classes/spring1f/cs35L/', date: 'Mar 2025–Jun 2025' },
  { role: 'Learning Assistant (Math 32B)', org: 'UCLA Engineering', logo: '/ucla_engineering.png', url: null, date: 'Jan 2024–Jul 2024' },
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

const RepoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e" aria-hidden="true">
    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#8b949e" aria-hidden="true">
    <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e" aria-hidden="true">
    <path fillRule="evenodd" d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 9.096l.578 3.808c.208 1.36-1.306 2.35-2.405 1.537l-3.06-2.23-3.06 2.23c-1.099.813-2.613-.177-2.405-1.537l.578-3.808-2.205-2.2c-.968-.968-.5-2.623.832-2.94l2.454-.584A3.081 3.081 0 005.45 2.565l.613-1.327a1.75 1.75 0 01-.607.496z" clipRule="evenodd" />
  </svg>
);

const HomePage = () => {
  return (
    <div className="gh-page">
      <div className="gh-layout">
        {/* Sidebar */}
        <aside className="gh-sidebar">
          <img src="/me.jpeg" alt="Charlton Shih" className="gh-avatar" />
          <h1 className="gh-name">Charlton Shih</h1>
          <p className="gh-bio">CS @ UCLA · exploring AI/ML and software</p>
          <div className="gh-meta">
            <span className="gh-meta-item">Los Angeles, CA</span>
            <span className="gh-meta-item">Graduating Spring 2027</span>
          </div>
          <div className="gh-sidebar-links">
            <a href="https://github.com/chewton2k" target="_blank" rel="noopener noreferrer" className="gh-sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              chewton2k
            </a>
            <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank" rel="noopener noreferrer" className="gh-sidebar-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              charlton-shih
            </a>
            <a href="mailto:charltonshih645@g.ucla.edu" className="gh-sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181L8 7.88 1.5 4.07v-.32a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v.32z" />
              </svg>
              charltonshih645@g.ucla.edu
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main className="gh-main">
          {/* Pinned */}
          <section className="gh-section">
            <h2 className="gh-section-header">
              <PinIcon />
              Pinned
            </h2>
            <div className="gh-pinned-grid">
              {pinnedProjects.map((p) => (
                <a
                  key={p.name}
                  href={p.url || '#'}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noopener noreferrer' : undefined}
                  className="gh-repo-card"
                >
                  <div className="gh-repo-card-top">
                    <RepoIcon />
                    <span className="gh-repo-name">{p.name}</span>
                  </div>
                  <p className="gh-repo-desc">{p.desc}</p>
                  <div className="gh-repo-footer">
                    <span className="gh-lang-dot" style={{ background: p.langColor }} />
                    <span className="gh-lang-name">{p.lang}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
          {/* MORE REPOS — Task 6 */}
          {/* EXPERIENCE — Task 7 */}
          {/* RESEARCH — Task 8 */}
          {/* ABOUT + FOOTER — Task 9 */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
