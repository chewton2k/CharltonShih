# GitHub-Style One-Page Portfolio Redesign

**Date:** 2026-04-11  
**Branch:** githubonepage  

---

## Overview

Consolidate the existing multi-page portfolio into a single scrollable page styled after a GitHub profile. The site currently has separate routes for projects, experience, about, research, and individual case study pages. All of that collapses into one page with a GitHub dark aesthetic.

---

## Color System

Replace the current Apple-inspired light/dark CSS variables with GitHub's dark palette:

| Variable | Value | Usage |
|---|---|---|
| `--gh-canvas` | `#0d1117` | Page background |
| `--gh-surface` | `#161b22` | Cards, sidebar background |
| `--gh-border` | `#30363d` | Card borders, dividers |
| `--gh-text` | `#e6edf3` | Primary text |
| `--gh-text-muted` | `#8b949e` | Secondary text, dates |
| `--gh-accent` | `#58a6ff` | Links, repo names |
| `--gh-green` | `#3fb950` | Language dots (green default) |

Language dot colors per language (subset): Rust `#dea584`, JavaScript `#f1e05a`, Python `#3572A5`, TypeScript `#3178c6`, Swift `#f05138`.

Keep the existing Inter font. Use `ui-monospace, SFMono-Regular, 'SF Mono', Menlo` for dates and language labels.

---

## Layout

Two-column layout, sticky sidebar on the left:

```
[Navbar: name only + resume link]
┌─────────────────────────────────────────────────────┐
│ [Sidebar ~280px sticky] │ [Main column, scrollable]  │
│  - Avatar (circular)    │  1. Pinned repos           │
│  - Name                 │  2. More repositories      │
│  - Bio (2 lines)        │  3. Experience             │
│  - UCLA CS · 2027       │  4. Research               │
│  - Location             │  5. About                  │
│  - GitHub link          │                            │
│  - LinkedIn link        │                            │
│  - Email link           │                            │
└─────────────────────────────────────────────────────┘
[Footer: GitHub · LinkedIn · Email]
```

On mobile: sidebar stacks above main column, full width.

---

## Navbar

Stripped to minimal: just `CHARLTON SHIH` on the left and a `Resume` link on the right. Remove all other nav links — sidebar handles context. Keep theme toggle removed (page is dark-only, matching GitHub's dark mode).

---

## Section 1: Pinned Repos

Header: pin icon + "Pinned" label (GitHub style).

2×3 grid of repo cards. Each card:
- Book/repo icon + repo name in `--gh-accent` blue
- 1-line description
- Language dot (colored circle) + language name at bottom-left

**6 pinned projects:**
1. Imprint — `#f1e05a` JavaScript
2. embd-IDE — `#dea584` Rust
3. leo — `#dea584` Rust
4. BTD Training Camp — `#f1e05a` JavaScript
5. PillPal — `#61afef` React (use `#61dafb`)
6. UCLA Design — `#61dafb` React

---

## Section 2: More Repositories

Compact list below pinned. Each row: repo name + language dot + external GitHub link icon. No descriptions. Thin `--gh-border` divider between rows.

**8 repos:**
HourTrack, CrowdPlan, MiniRedis, Club Scraper, Stock Prediction, Simple Blockchain, RiseAndWise, Lotto Group

---

## Section 3: Experience

Section header: briefcase icon + "Experience".

Compact list — one row per entry, `--gh-border` divider between rows:
```
[logo 18px]  Role · Organization (linked)          date (monospace, right-aligned)
```

**7 entries** (research roles moved out):
1. Software Engineer · ACM TeachLA (UCLA) — Feb 2026–Present
2. Software Engineering Intern · AfterQuery — Oct 2025–Present
3. Software Engineering · Bruinwalk — Oct 2025–Present
4. Software Engineer · Clubhouse @ UCLA — Mar 2025–Present
5. Software Engineer · AdOptimal — Dec 2024–Aug 2025
6. Learning Assistant (CS 35L) · UCLA Engineering — Mar 2025–Jun 2025
7. Learning Assistant (Math 32B) · UCLA Engineering — Jan 2024–Jul 2024

---

## Section 4: Research

Section header: flask icon + "Research".

Same compact row format as Experience, with an added 1-line description per entry (research context matters more than titles alone).

**3 entries:**
1. Reinforcement Learning Researcher · BruinML Lab — Dec 2024–Oct 2025  
   *Multiplayer DCM cascading bandits under RL frameworks*
2. Computational and AI Epigenetics Researcher · Pellegrini Lab / Roychowdhury Group — Sep 2025–Jan 2026  
   *Genomic tokenization and methylation analysis using PyTorch + HuggingFace*
3. Machine Learning Researcher · Arisaka Elegant Mind Lab — Jul 2024–Jul 2025  
   *ACT policy training for autonomous surgery robots with ROS2 and Mujoco*

---

## Section 5: About

2–3 sentence bio (condensed from existing about page). Below the bio: a single horizontal strip of 4 hobby images (`kobebeef.jpeg`, `steak.png`, `tennis.png`, `motor.png`), each with `border-radius: 8px` and equal width. No caption or gallery header.

---

## Footer

Single row: `GitHub · LinkedIn · Email` links centered, muted text. Thin top border in `--gh-border`.

---

## Files to Create / Modify

| File | Action |
|---|---|
| `app/page.jsx` | Full rewrite — all sections |
| `app/styles/HomePage.css` | Full rewrite — GitHub layout + components |
| `app/globals.css` | Update CSS variables to GitHub dark palette |
| `app/components/Navbar.jsx` | Simplify to name + resume only |
| `app/components/Navbar.css` | Update styles |
| `app/layout.jsx` | Review — may need to remove unused imports |

## Files to Delete

| File |
|---|
| `app/projects/page.jsx` |
| `app/projects/bruinwalk/page.jsx` |
| `app/projects/clubhouse/page.jsx` |
| `app/projects/pillpall/page.jsx` |
| `app/projects/ucla-design/page.jsx` |
| `app/experience/page.jsx` |
| `app/about/page.jsx` |
| `app/research/page.jsx` |
| `app/styles/AboutPage.css` |
| `app/styles/BruinwalkPage.css` |
| `app/styles/ExperiencePage.css` |
| `app/styles/PillPallPage.css` |
| `app/styles/ProjectsPage.css` |
| `app/styles/UCLAClubhousePage.css` |
| `app/styles/UCLADesignPage.css` |

---

## Out of Scope

- Individual project case study pages (bruinwalk, clubhouse, pillpall, ucla-design) are deleted entirely — no replacements
- No contribution graph (decorative only, not worth the complexity)
- No dark/light toggle — site is dark-only matching GitHub's dark mode
- No animations beyond subtle hover states on cards
