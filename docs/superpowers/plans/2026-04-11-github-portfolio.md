# GitHub-Style One-Page Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the multi-page Apple-inspired portfolio into a single-page GitHub profile-style site with dark theme, sticky sidebar, pinned repo cards, and compact experience/research/about sections.

**Architecture:** All content moves into `app/page.jsx`. Old route pages (`/projects`, `/experience`, `/about`, `/research`, case studies) are deleted. GitHub dark CSS variables live in `app/styles/HomePage.css`. `layout.jsx` is simplified: no ThemeProvider, no Footer import, no deleted CSS imports. Navbar strips to name + resume only.

**Tech Stack:** Next.js 14 App Router, React (server components — no hooks needed), plain CSS

> **Note on TDD:** This plan is a pure UI rewrite. There is no server logic to unit test. Each task ends with a `npm run dev` visual verification checkpoint instead of a test suite.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `app/globals.css` | Modify | Set GitHub dark palette as default `:root`, remove dark mode block |
| `app/layout.jsx` | Modify | Remove deleted CSS imports, ThemeProvider, Footer; set static dark theme |
| `app/components/Navbar.jsx` | Modify | Strip to name + resume link only |
| `app/components/Navbar.css` | Modify | GitHub dark navbar styles |
| `app/page.jsx` | Full rewrite | All sections: sidebar, pinned, more repos, experience, research, about, footer |
| `app/styles/HomePage.css` | Full rewrite | All GitHub dark layout + component styles |
| 15 files below | Delete | Old route pages and their CSS |

**Delete list:**
- `app/projects/page.jsx`
- `app/projects/bruinwalk/page.jsx`
- `app/projects/clubhouse/page.jsx`
- `app/projects/pillpall/page.jsx`
- `app/projects/ucla-design/page.jsx`
- `app/experience/page.jsx`
- `app/about/page.jsx`
- `app/research/page.jsx`
- `app/styles/AboutPage.css`
- `app/styles/BruinwalkPage.css`
- `app/styles/ExperiencePage.css`
- `app/styles/PillPallPage.css`
- `app/styles/ProjectsPage.css`
- `app/styles/UCLAClubhousePage.css`
- `app/styles/UCLADesignPage.css`

---

### Task 1: Update globals.css and layout.jsx

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.jsx`

- [ ] **Step 1: Rewrite globals.css**

Replace entire file content with:

```css
:root {
  --font-body: var(--font-inter, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif);
  --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;

  line-height: 1.5;
  font-weight: 400;
  background: #0d1117;
  color: #e6edf3;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: var(--font-body);
  scroll-behavior: smooth;
  background: #0d1117;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-body);
  line-height: 1.1;
}

.app-content {
  flex: 1;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

::selection {
  background: #58a6ff;
  color: #0d1117;
}
```

- [ ] **Step 2: Rewrite layout.jsx**

Replace entire file content with:

```jsx
import { Inter } from 'next/font/google';

import './globals.css';
import './components/Navbar.css';
import './styles/HomePage.css';

import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Charlton Shih',
  icons: {
    icon: '/snoopy.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <div className="app-content">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/globals.css app/layout.jsx
git commit -m "refactor: simplify globals and layout for dark-only one-page site"
```

---

### Task 2: Simplify Navbar

**Files:**
- Modify: `app/components/Navbar.jsx`
- Modify: `app/components/Navbar.css`

- [ ] **Step 1: Rewrite Navbar.jsx**

Replace entire file content with:

```jsx
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
```

- [ ] **Step 2: Rewrite Navbar.css**

Replace entire file content with:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
  height: 52px;
  position: sticky;
  top: 0;
  z-index: 50;
  box-sizing: border-box;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid #30363d;
}

.navbar-left a {
  font-weight: 600;
  font-size: 0.8rem;
  color: #e6edf3;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.15s;
}

.navbar-left a:hover {
  color: #58a6ff;
}

.navbar-right a {
  font-size: 0.75rem;
  font-weight: 500;
  color: #8b949e;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.15s;
}

.navbar-right a:hover {
  color: #e6edf3;
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Navbar.jsx app/components/Navbar.css
git commit -m "refactor: simplify navbar to name + resume only"
```

---

### Task 3: Delete old route pages and CSS files

**Files:**
- Delete: 8 page files and 7 CSS files listed above

- [ ] **Step 1: Delete old page files**

```bash
rm app/projects/page.jsx
rm app/projects/bruinwalk/page.jsx
rm app/projects/clubhouse/page.jsx
rm app/projects/pillpall/page.jsx
rm app/projects/ucla-design/page.jsx
rm app/experience/page.jsx
rm app/about/page.jsx
rm app/research/page.jsx
```

- [ ] **Step 2: Delete old CSS files**

```bash
rm app/styles/AboutPage.css
rm app/styles/BruinwalkPage.css
rm app/styles/ExperiencePage.css
rm app/styles/PillPallPage.css
rm app/styles/ProjectsPage.css
rm app/styles/UCLAClubhousePage.css
rm app/styles/UCLADesignPage.css
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: delete old route pages and page-specific CSS files"
```

---

### Task 4: Write page.jsx — data arrays and sidebar

**Files:**
- Modify: `app/page.jsx`

- [ ] **Step 1: Replace page.jsx with skeleton + data + sidebar**

Replace entire file content with:

```jsx
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
          {/* PINNED — Task 5 */}
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
```

- [ ] **Step 2: Verify dev server renders sidebar without errors**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: navbar with just name + resume, sidebar with avatar, name, bio, location, and links visible against dark background. No console errors.

- [ ] **Step 3: Commit**

```bash
git add app/page.jsx
git commit -m "feat: add page skeleton with data arrays and sidebar"
```

---

### Task 5: Write pinned repos section

**Files:**
- Modify: `app/page.jsx` (replace the `{/* PINNED — Task 5 */}` comment)
- Modify: `app/styles/HomePage.css` (add all styles so far)

- [ ] **Step 1: Replace pinned comment in page.jsx main section**

Inside the `<main className="gh-main">` tag, replace `{/* PINNED — Task 5 */}` with:

```jsx
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
```

- [ ] **Step 2: Write HomePage.css with layout + sidebar + pinned styles**

Replace entire `app/styles/HomePage.css` with:

```css
/* ============================================================
   GitHub Dark Variables
   ============================================================ */
:root {
  --gh-canvas: #0d1117;
  --gh-surface: #161b22;
  --gh-border: #30363d;
  --gh-text: #e6edf3;
  --gh-text-muted: #8b949e;
  --gh-accent: #58a6ff;
  --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
}

/* ============================================================
   Page + Layout
   ============================================================ */
.gh-page {
  background: var(--gh-canvas);
  color: var(--gh-text);
  min-height: 100vh;
  padding-top: 52px; /* height of sticky navbar */
}

.gh-layout {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2.5rem;
  align-items: start;
}

/* ============================================================
   Sidebar
   ============================================================ */
.gh-sidebar {
  position: sticky;
  top: calc(52px + 2rem);
}

.gh-avatar {
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid var(--gh-border);
  object-fit: cover;
  display: block;
  margin-bottom: 1rem;
}

.gh-name {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--gh-text);
  margin: 0 0 0.25rem;
  line-height: 1.2;
}

.gh-bio {
  font-size: 0.9375rem;
  color: var(--gh-text-muted);
  margin: 0 0 1rem;
  line-height: 1.5;
}

.gh-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.gh-meta-item {
  font-size: 0.875rem;
  color: var(--gh-text-muted);
}

.gh-sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.gh-sidebar-link {
  font-size: 0.875rem;
  color: var(--gh-text-muted);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.15s;
  word-break: break-all;
}

.gh-sidebar-link:hover {
  color: var(--gh-accent);
}

.gh-sidebar-link svg {
  flex-shrink: 0;
}

/* ============================================================
   Main column
   ============================================================ */
.gh-main {
  min-width: 0;
}

.gh-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gh-border);
}

.gh-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.gh-section-header {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gh-text);
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* ============================================================
   Pinned repo cards
   ============================================================ */
.gh-pinned-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.gh-repo-card {
  background: var(--gh-surface);
  border: 1px solid var(--gh-border);
  border-radius: 6px;
  padding: 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.15s;
  min-height: 112px;
}

.gh-repo-card:hover {
  border-color: var(--gh-accent);
}

.gh-repo-card-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.gh-repo-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gh-accent);
}

.gh-repo-desc {
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  margin: 0;
  flex: 1;
  line-height: 1.5;
}

.gh-repo-footer {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: auto;
}

.gh-lang-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.gh-lang-name {
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  font-family: var(--font-mono);
}
```

- [ ] **Step 3: Verify in browser**

Open `http://localhost:3000`. Expected: 2×3 grid of dark bordered cards below the sidebar, each showing repo name in blue, description, and language dot. Hover a card — border should turn blue.

- [ ] **Step 4: Commit**

```bash
git add app/page.jsx app/styles/HomePage.css
git commit -m "feat: add pinned repos section with GitHub-style cards"
```

---

### Task 6: Write more repositories section

**Files:**
- Modify: `app/page.jsx` (replace `{/* MORE REPOS — Task 6 */}`)
- Modify: `app/styles/HomePage.css` (append styles)

- [ ] **Step 1: Replace more repos comment in page.jsx**

Replace `{/* MORE REPOS — Task 6 */}` with:

```jsx
{/* More repositories */}
<section className="gh-section">
  <h2 className="gh-section-header">More repositories</h2>
  <div className="gh-more-repos">
    {moreRepos.map((r) => (
      <a
        key={r.name}
        href={r.url}
        target="_blank"
        rel="noopener noreferrer"
        className="gh-more-repo-row"
      >
        <div className="gh-more-repo-left">
          <span className="gh-lang-dot" style={{ background: r.langColor }} />
          <span className="gh-more-repo-name">{r.name}</span>
          <span className="gh-more-repo-lang">{r.lang}</span>
        </div>
        <ExternalLinkIcon />
      </a>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Append to HomePage.css**

Add at the end of `app/styles/HomePage.css`:

```css
/* ============================================================
   More repositories list
   ============================================================ */
.gh-more-repos {
  border: 1px solid var(--gh-border);
  border-radius: 6px;
  overflow: hidden;
}

.gh-more-repo-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1rem;
  text-decoration: none;
  color: var(--gh-text);
  border-bottom: 1px solid var(--gh-border);
  transition: background 0.15s;
}

.gh-more-repo-row:last-child {
  border-bottom: none;
}

.gh-more-repo-row:hover {
  background: var(--gh-surface);
}

.gh-more-repo-left {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.gh-more-repo-name {
  font-size: 0.875rem;
  color: var(--gh-accent);
  font-weight: 500;
}

.gh-more-repo-lang {
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  font-family: var(--font-mono);
}
```

- [ ] **Step 3: Verify in browser**

Expected: compact bordered list of 8 repos below the pinned grid. Each row shows a language dot, repo name in blue, language label in monospace, and an external link icon. Hover row — background darkens.

- [ ] **Step 4: Commit**

```bash
git add app/page.jsx app/styles/HomePage.css
git commit -m "feat: add more repositories compact list"
```

---

### Task 7: Write experience section

**Files:**
- Modify: `app/page.jsx` (replace `{/* EXPERIENCE — Task 7 */}`)
- Modify: `app/styles/HomePage.css` (append styles)

- [ ] **Step 1: Replace experience comment in page.jsx**

Replace `{/* EXPERIENCE — Task 7 */}` with:

```jsx
{/* Experience */}
<section className="gh-section">
  <h2 className="gh-section-header">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e" aria-hidden="true">
      <path d="M6.5.75a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-.75v.75a7.25 7.25 0 014.75 11.58l.99.99a.75.75 0 11-1.06 1.06l-.99-.99A7.25 7.25 0 012 8.25v-.5A7.25 7.25 0 016.5 1V.75zm.75 1.5A5.75 5.75 0 002.5 7.75v.5a5.75 5.75 0 1011.5 0v-.5A5.75 5.75 0 007.25 2.25zM8 5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 018 5z" />
    </svg>
    Experience
  </h2>
  <div className="gh-list">
    {experiences.map((exp, i) => (
      <div key={i} className="gh-list-row">
        <div className="gh-list-left">
          <img src={exp.logo} alt={exp.org} className="gh-org-logo" />
          <span className="gh-list-role">{exp.role}</span>
          <span className="gh-list-sep">·</span>
          {exp.url ? (
            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="gh-list-org-link">
              {exp.org}
            </a>
          ) : (
            <span className="gh-list-org-plain">{exp.org}</span>
          )}
        </div>
        <span className="gh-list-date">{exp.date}</span>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Append to HomePage.css**

Add at the end of `app/styles/HomePage.css`:

```css
/* ============================================================
   Experience / Research shared list styles
   ============================================================ */
.gh-list {
  border: 1px solid var(--gh-border);
  border-radius: 6px;
  overflow: hidden;
}

.gh-list-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gh-border);
  gap: 1rem;
}

.gh-list-row:last-child {
  border-bottom: none;
}

.gh-list-left {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-wrap: wrap;
  min-width: 0;
}

.gh-org-logo {
  width: 18px;
  height: 18px;
  border-radius: 3px;
  object-fit: contain;
  flex-shrink: 0;
  background: transparent;
}

.gh-list-role {
  font-size: 0.875rem;
  color: var(--gh-text);
  white-space: nowrap;
}

.gh-list-sep {
  color: var(--gh-text-muted);
  font-size: 0.875rem;
  flex-shrink: 0;
}

.gh-list-org-link {
  font-size: 0.875rem;
  color: var(--gh-accent);
  text-decoration: none;
  transition: text-decoration 0.15s;
}

.gh-list-org-link:hover {
  text-decoration: underline;
}

.gh-list-org-plain {
  font-size: 0.875rem;
  color: var(--gh-text-muted);
}

.gh-list-date {
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  font-family: var(--font-mono);
  white-space: nowrap;
  flex-shrink: 0;
}
```

- [ ] **Step 3: Verify in browser**

Expected: Experience section with 7 compact rows. Each row: org logo, role text, separator dot, linked org name (blue) or plain text, and a monospace date on the right.

- [ ] **Step 4: Commit**

```bash
git add app/page.jsx app/styles/HomePage.css
git commit -m "feat: add experience section"
```

---

### Task 8: Write research section

**Files:**
- Modify: `app/page.jsx` (replace `{/* RESEARCH — Task 8 */}`)
- Modify: `app/styles/HomePage.css` (append styles)

- [ ] **Step 1: Replace research comment in page.jsx**

Replace `{/* RESEARCH — Task 8 */}` with:

```jsx
{/* Research */}
<section className="gh-section">
  <h2 className="gh-section-header">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e" aria-hidden="true">
      <path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06L10.68 11.74z" />
    </svg>
    Research
  </h2>
  <div className="gh-list">
    {research.map((r, i) => (
      <div key={i} className="gh-list-row gh-list-row--research">
        <div className="gh-list-left">
          <img src={r.logo} alt={r.org} className="gh-org-logo" />
          <div className="gh-research-text">
            <div className="gh-research-top">
              <span className="gh-list-role">{r.role}</span>
              <span className="gh-list-sep">·</span>
              {r.url ? (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="gh-list-org-link">
                  {r.org}
                </a>
              ) : (
                <span className="gh-list-org-plain">{r.org}</span>
              )}
            </div>
            <span className="gh-research-desc">{r.desc}</span>
          </div>
        </div>
        <span className="gh-list-date">{r.date}</span>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Append to HomePage.css**

Add at the end of `app/styles/HomePage.css`:

```css
/* ============================================================
   Research row (with description)
   ============================================================ */
.gh-list-row--research .gh-list-left {
  align-items: flex-start;
}

.gh-research-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.gh-research-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.gh-research-desc {
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  font-style: italic;
  line-height: 1.4;
}
```

- [ ] **Step 3: Verify in browser**

Expected: Research section with 3 rows. Each row has a logo, role · org (linked or plain), and a small italic description below, with a monospace date on the right.

- [ ] **Step 4: Commit**

```bash
git add app/page.jsx app/styles/HomePage.css
git commit -m "feat: add research section with 3 entries"
```

---

### Task 9: Write about section and footer

**Files:**
- Modify: `app/page.jsx` (replace `{/* ABOUT + FOOTER — Task 9 */}`)
- Modify: `app/styles/HomePage.css` (append styles)

- [ ] **Step 1: Replace about + footer comment in page.jsx**

Replace `{/* ABOUT + FOOTER — Task 9 */}` with:

```jsx
{/* About */}
<section className="gh-section">
  <h2 className="gh-section-header">About</h2>
  <p className="gh-about-text">
    CS undergraduate at UCLA, graduating Spring 2027. Interested in algorithms, machine learning,
    and software engineering — especially where math and computing intersect. Currently exploring
    RL environments, optimization, and CLI tooling.
  </p>
  <div className="gh-hobby-strip">
    <img src="/kobebeef.jpeg" alt="kobe beef" />
    <img src="/steak.png" alt="steak" />
    <img src="/tennis.png" alt="tennis" />
    <img src="/motor.png" alt="motor" />
  </div>
</section>
```

Then, after the closing `</main>` tag but still inside `<div className="gh-layout">`, add nothing — the footer goes outside the layout div. After the closing `</div>` of `gh-layout`, add:

```jsx
      </div>{/* end gh-layout */}

      <footer className="gh-footer">
        <a href="https://github.com/chewton2k" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="gh-footer-sep">·</span>
        <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="gh-footer-sep">·</span>
        <a href="mailto:charltonshih645@g.ucla.edu">Email</a>
      </footer>
    </div>
```

The full closing structure of `page.jsx` return should be:

```jsx
    ...
        </main>
      </div>{/* end gh-layout */}

      <footer className="gh-footer">
        <a href="https://github.com/chewton2k" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="gh-footer-sep">·</span>
        <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="gh-footer-sep">·</span>
        <a href="mailto:charltonshih645@g.ucla.edu">Email</a>
      </footer>
    </div>
  );
```

- [ ] **Step 2: Append to HomePage.css**

Add at the end of `app/styles/HomePage.css`:

```css
/* ============================================================
   About section
   ============================================================ */
.gh-about-text {
  font-size: 0.9375rem;
  color: var(--gh-text-muted);
  line-height: 1.6;
  margin: 0 0 1.25rem;
}

.gh-hobby-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.gh-hobby-strip img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--gh-border);
}

/* ============================================================
   Footer
   ============================================================ */
.gh-footer {
  border-top: 1px solid var(--gh-border);
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8125rem;
}

.gh-footer a {
  color: var(--gh-text-muted);
  text-decoration: none;
  transition: color 0.15s;
}

.gh-footer a:hover {
  color: var(--gh-accent);
}

.gh-footer-sep {
  color: var(--gh-border);
}
```

- [ ] **Step 3: Verify full page in browser**

Open `http://localhost:3000`. Scroll through the entire page top to bottom. Expected:
- Navbar: name left, resume right
- Sidebar: circular avatar, name, bio, meta, social links
- Pinned grid: 6 cards in 2 columns
- More repos: 8-row compact list
- Experience: 7 rows with logos
- Research: 3 rows with descriptions
- About: bio text + 4 hobby images
- Footer: GitHub · LinkedIn · Email

- [ ] **Step 4: Commit**

```bash
git add app/page.jsx app/styles/HomePage.css
git commit -m "feat: add about section, footer, and complete one-page layout"
```

---

### Task 10: Add responsive styles

**Files:**
- Modify: `app/styles/HomePage.css` (append styles)

- [ ] **Step 1: Append responsive CSS to HomePage.css**

Add at the end of `app/styles/HomePage.css`:

```css
/* ============================================================
   Responsive
   ============================================================ */
@media (max-width: 900px) {
  .gh-layout {
    grid-template-columns: 1fr;
    padding: 1.5rem 1rem 3rem;
  }

  .gh-sidebar {
    position: static;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto auto;
    column-gap: 1rem;
  }

  .gh-avatar {
    width: 72px;
    max-width: 72px;
    grid-row: 1 / 5;
    grid-column: 1;
  }

  .gh-name {
    align-self: end;
  }

  .gh-bio {
    grid-column: 2;
    margin-bottom: 0.5rem;
  }

  .gh-meta {
    grid-column: 2;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .gh-sidebar-links {
    grid-column: 1 / 3;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .gh-pinned-grid {
    grid-template-columns: 1fr;
  }

  .gh-list-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .gh-list-date {
    padding-left: calc(18px + 0.625rem); /* indent to align with text */
  }

  .gh-list-row--research .gh-list-date {
    padding-left: calc(18px + 0.625rem);
  }

  .gh-hobby-strip {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gh-more-repo-lang {
    display: none;
  }
}
```

- [ ] **Step 2: Test on mobile viewport**

In browser devtools, toggle to a 390px wide viewport (iPhone 14). Expected:
- Sidebar stacks: small avatar on left, name/bio/meta/links flow to the right and below
- Pinned grid: single column
- Experience rows: role·org on top line, date indented below
- Hobby strip: 2×2 grid

- [ ] **Step 3: Commit**

```bash
git add app/styles/HomePage.css
git commit -m "feat: add responsive styles for mobile layout"
```

---

### Task 11: Final cleanup

**Files:**
- Verify: `app/components/ThemeProvider.jsx`, `app/components/ThemeToggle.jsx`, `app/components/Footer.jsx`, `app/components/FadeIn.jsx`, `app/components/Background.jsx`, `app/components/EmailButton.jsx`, `app/components/GitHubbutton.jsx`, `app/components/LinkedInButton.jsx`, `app/components/SocialButtons.css`, `app/components/Card.css`, `app/components/Burger.css`, `app/components/Background.css`, `app/components/Footer.css`

- [ ] **Step 1: Delete unused component files**

These files are no longer imported anywhere after layout.jsx was updated:

```bash
rm app/components/ThemeProvider.jsx
rm app/components/ThemeToggle.jsx
rm app/components/Footer.jsx
rm app/components/Footer.css
rm app/components/FadeIn.jsx
rm app/components/Background.jsx
rm app/components/Background.css
rm app/components/EmailButton.jsx
rm app/components/GitHubbutton.jsx
rm app/components/LinkedInButton.jsx
rm app/components/SocialButtons.css
rm app/components/Card.css
rm app/components/Burger.css
rm app/template.jsx
```

- [ ] **Step 2: Verify dev server still runs clean**

```bash
npm run dev
```

Expected: No build errors, no console warnings about missing imports. Full page renders correctly.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: remove unused components and template after one-page consolidation"
```

---

## Verification Checklist

Before marking the plan complete, confirm each item in the browser:

- [ ] Navbar shows only "CHARLTON SHIH" (left) and "RESUME" (right)
- [ ] Background is `#0d1117` throughout
- [ ] Sidebar: circular avatar, name, bio, UCLA/location meta, GitHub/LinkedIn/email links
- [ ] 6 pinned repo cards in a 2-col grid, each with name, desc, language dot
- [ ] 8 compact repo rows with language dot + external link icon
- [ ] 7 experience rows: logo + role · org + date
- [ ] 3 research rows: logo + role · org + italic desc + date
- [ ] About bio + 4 hobby images in a row
- [ ] Footer: GitHub · LinkedIn · Email
- [ ] No broken image 404s in Network tab
- [ ] Mobile (390px): sidebar stacks, pinned grid single-col, experience rows wrap
