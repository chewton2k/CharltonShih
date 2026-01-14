/**
 * Project data for the GitHub-style repository view
 * Each project is represented as a folder with README.md and STACK.md files
 */

export const repoConfig = {
  name: "charltonshih",
  fullName: "charltonshih/projects",
  description: "A collection of software engineering projects",
  visibility: "public",
  defaultBranch: "main",
};

export const projects = [
  {
    id: "ucla-design",
    name: "ucla-design",
    displayName: "UCLA Design",
    description: "Real-time drag-and-drop UI for furniture placement",
    lastCommit: "Initial commit",
    lastCommitDate: "2 months ago",
    caseStudyPath: "/projects/ucla-design",
    links: {
      github: "https://github.com/chewton2k/UCLADesign",
      live: null,
    },
    readme: `# UCLA Design

A real-time, state-managed drag-and-drop UI for furniture placement built with React's component-based architecture.

## Overview

Developed a comprehensive furniture placement tool using optimized event-driven rendering for seamless interactivity. The system allows users to design and visualize room layouts in real-time.

## Features

- **Drag-and-Drop Interface** - Intuitive furniture placement with real-time updates
- **State Management** - Efficient React state handling for complex layouts
- **NoSQL Database** - MongoDB document database for storing designs
- **Real-time Collaboration** - Multiple users can work on the same design

## Links

- [View Case Study](/projects/ucla-design)
- [View Code](https://github.com/chewton2k/UCLADesign)
`,
    stack: `# Tech Stack

## Frontend
- **React.js** - Component-based UI architecture
- **CSS** - Custom styling with responsive design
- **Event-driven rendering** - Optimized drag-and-drop interactions

## Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL document database

## Architecture
- Component-based architecture
- Event-driven state management
- RESTful API design
`,
    tags: ["React.js", "MongoDB", "Node.js"],
  },
  {
    id: "pillpall",
    name: "pillpall",
    displayName: "PillPal",
    description: "Automated pill dispenser with IoT integration",
    lastCommit: "Add OAuth integration",
    lastCommitDate: "3 months ago",
    caseStudyPath: "/projects/pillpall",
    links: {
      github: null,
      live: null,
    },
    readme: `# PillPal

An automated pill dispenser with tracking and notifications. Full-stack IoT system connecting hardware and software seamlessly.

## Overview

PillPal is a comprehensive healthcare solution that automates medication management through intelligent hardware integration and user-friendly software interfaces.

## Features

- **Automated Dispensing** - ESP32-controlled servo motors for precise pill dispensing
- **IR Sensors** - Detection system to confirm pill release
- **Calendar Integration** - Google Calendar API for medication schedules
- **OAuth 2.0** - Secure authentication and authorization
- **Real-time Notifications** - Alerts for missed doses and refill reminders

## Links

- [View Case Study](/projects/pillpall)
`,
    stack: `# Tech Stack

## Hardware
- **ESP32** - Microcontroller for hardware control
- **Servo Motors** - Precise pill dispensing mechanism
- **IR Sensors** - Pill detection and confirmation

## Frontend
- **React** - User interface for schedule management
- **Material UI** - Component library

## Backend
- **Node.js** - Server runtime
- **MongoDB** - Database for user data and schedules
- **Google Calendar API** - Schedule synchronization
- **OAuth 2.0** - Secure authentication
`,
    tags: ["IoT", "React", "MongoDB"],
  },
  {
    id: "btd-training",
    name: "btd-training",
    displayName: "BTD Training Camp",
    description: "3D FPS physics-based aim trainer",
    lastCommit: "Add procedural waves",
    lastCommitDate: "1 month ago",
    caseStudyPath: "/projects/btd-training",
    links: {
      github: "https://github.com/chewton2k/BalloonTowerTraining",
      live: null,
    },
    readme: `# Bloon Towers Defense Training Camp

A 3D FPS physics-based aim trainer built with Three.js. Features procedural waves, custom physics, and shadow mapping for a complete BTD experience.

## Overview

An immersive aim training experience inspired by Bloon Towers Defense, featuring realistic physics and progressively challenging gameplay.

## Features

- **3D Graphics** - Three.js powered rendering engine
- **Procedural Waves** - Dynamically generated enemy patterns
- **Custom Physics** - Realistic projectile and collision physics
- **Shadow Mapping** - Enhanced visual fidelity
- **Score Tracking** - Progress monitoring and leaderboards

## Links

- [View Details](/projects/btd-training)
- [View Code](https://github.com/chewton2k/BalloonTowerTraining)
`,
    stack: `# Tech Stack

## Frontend
- **Three.js** - 3D graphics library
- **JavaScript** - Core game logic
- **WebGL** - Hardware-accelerated graphics

## Features
- Custom physics engine
- Procedural generation
- Shadow mapping
- Particle systems

## Architecture
- Game loop pattern
- Entity-component system
- Event-driven input handling
`,
    tags: ["Three.js", "JavaScript", "Physics"],
  },
  {
    id: "bruinwalk",
    name: "bruinwalk",
    displayName: "Bruinwalk",
    description: "Reviews, grade distributions, and professor ratings",
    lastCommit: "Update review system",
    lastCommitDate: "3 weeks ago",
    caseStudyPath: "/projects/bruinwalk",
    links: {
      github: null,
      live: null,
    },
    readme: `# Bruinwalk

Helping UCLA students make informed decisions about their classes and professors through reviews and grade distributions.

## Overview

Bruinwalk is a platform that allows UCLA students to review professors and courses. It provides grade distributions, detailed reviews, and ratings to help students plan their academic quarter.

## Features

- **Professor Reviews** - Detailed reviews from fellow students
- **Grade Distributions** - Historical grade data for courses
- **Search & Filter** - Find courses and professors easily
- **User Profiles** - Track your reviews and contributions

## Links

- [View Case Study](/projects/bruinwalk)
`,
    stack: `# Tech Stack

## Frontend
- **React** - Component-based UI
- **Interactive Charts** - Grade distribution visualizations

## Backend
- **Python** - Server-side logic
- **Django** - Web framework
- **PostgreSQL** - Relational database

## Features
- Search functionality
- Review submission system
- Grade analytics
`,
    tags: ["Python", "Django", "PostgreSQL"],
  },
  {
    id: "ucla-clubhouse",
    name: "ucla-clubhouse",
    displayName: "UCLA Clubhouse",
    description: "Central directory for student organizations",
    lastCommit: "Add event calendar",
    lastCommitDate: "1 month ago",
    caseStudyPath: "/projects/clubhouse",
    links: {
      github: null,
      live: null,
    },
    readme: `# UCLA Clubhouse

Central hub for discovering student life at UCLA. Browse categories, find recruitment info, and connect with leadership.

## Overview

The Clubhouse is the central hub for discovering student life at UCLA. Browse categories, find recruitment info, and connect with club leadership.

## Features

- **Club Directory** - Browse hundreds of organizations
- **Advanced Filtering** - Find clubs by category, size, and more
- **Event Calendars** - Upcoming club events and recruitment
- **Direct Messaging** - Connect with club leaders

## Links

- [View Case Study](/projects/clubhouse)
`,
    stack: `# Tech Stack

## Frontend
- **React** - Component-based UI
- **CSS** - Custom styling

## Backend
- **Node.js** - Server runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database

## Features
- Club verification system
- Event management
- Messaging system
`,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "hourtrack",
    name: "hourtrack",
    displayName: "HourTrack",
    description: "Productivity tool for tracking hours and tasks",
    lastCommit: "Firebase deployment",
    lastCommitDate: "2 weeks ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/hourtracker",
      live: "https://hourtracker-59385.web.app/",
    },
    readme: `# HourTrack

A productivity tool for tracking hours and managing tasks efficiently.

## Overview

HourTrack helps users monitor their time investment across different projects and tasks, providing insights into productivity patterns.

## Features

- **Time Tracking** - Log hours worked on specific tasks
- **Project Organization** - Group tasks by project
- **Analytics Dashboard** - Visualize time distribution
- **Firebase Backend** - Real-time data synchronization

## Links

- [Live Demo](https://hourtracker-59385.web.app/)
- [View Code](https://github.com/chewton2k/hourtracker)
`,
    stack: `# Tech Stack

## Frontend
- **React** - Component-based UI
- **CSS** - Custom styling

## Backend
- **Firebase** - Backend-as-a-Service
- **Firestore** - NoSQL database
- **Firebase Hosting** - Static site deployment

## Features
- Real-time sync
- User authentication
- Cloud functions
`,
    tags: ["React", "Firebase", "Productivity"],
  },
  {
    id: "crowdplan",
    name: "crowdplan",
    displayName: "CrowdPlan",
    description: "Full-stack event coordination platform",
    lastCommit: "Docker containerization",
    lastCommitDate: "4 months ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/CrowdPlan",
      live: null,
    },
    readme: `# CrowdPlan

A full-stack event coordination platform using Next.js and PostgreSQL, containerized with Docker for scalable deployment.

## Overview

CrowdPlan streamlines event planning by providing tools for coordination, scheduling, and participant management.

## Features

- **Event Management** - Create and manage events
- **Participant Coordination** - Invite and track attendees
- **Real-time Updates** - Live event status changes
- **Containerized** - Docker for consistent deployments

## Links

- [View Code](https://github.com/chewton2k/CrowdPlan) *(Repository currently unavailable)*
`,
    stack: `# Tech Stack

## Frontend
- **Next.js** - React framework with SSR
- **TypeScript** - Type-safe JavaScript

## Backend
- **PostgreSQL** - Relational database
- **Prisma** - Database ORM

## Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
`,
    tags: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    id: "miniredis",
    name: "miniredis",
    displayName: "MiniRedis",
    description: "High-concurrency Redis-like server",
    lastCommit: "Connection pooling",
    lastCommitDate: "5 months ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/MiniRedis",
      live: null,
    },
    readme: `# MiniRedis

A high-concurrency Redis-like server using Python and Gevent. Implements asynchronous socket handling and connection pooling.

## Overview

MiniRedis is a lightweight implementation of Redis's core functionality, designed for learning and experimentation with concurrent server architectures.

## Features

- **Async Socket Handling** - Non-blocking I/O operations
- **Connection Pooling** - Efficient resource management
- **Redis Protocol** - Compatible with Redis clients
- **High Concurrency** - Gevent-powered green threads

## Links

- [View Code](https://github.com/chewton2k/MiniRedis)
`,
    stack: `# Tech Stack

## Core
- **Python** - Server implementation
- **Gevent** - Coroutine-based networking

## Features
- Asynchronous I/O
- Connection pooling
- Redis protocol implementation
- In-memory data structures

## Architecture
- Event-driven design
- Green threads for concurrency
- Socket multiplexing
`,
    tags: ["Python", "Gevent", "Network"],
  },
  {
    id: "club-scraper",
    name: "club-scraper",
    displayName: "Club Scraper",
    description: "Python web scraper for UCLA clubs",
    lastCommit: "Selenium automation",
    lastCommitDate: "6 months ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/ClubScraper",
      live: null,
    },
    readme: `# Club Scraper

A Python web scraper for gathering UCLA club information. Uses Selenium to automate browser actions and extract contact details.

## Overview

Automates the collection of club information from UCLA's club directory, including contact details and organization descriptions.

## Features

- **Browser Automation** - Selenium WebDriver
- **Data Extraction** - Parse and structure club info
- **Export Options** - CSV and JSON output
- **Rate Limiting** - Respectful scraping practices

## Links

- [View Code](https://github.com/chewton2k/ClubScraper)
`,
    stack: `# Tech Stack

## Core
- **Python** - Scripting language
- **Selenium** - Browser automation

## Libraries
- **BeautifulSoup** - HTML parsing
- **Pandas** - Data manipulation

## Output
- CSV export
- JSON export
`,
    tags: ["Python", "Selenium"],
  },
  {
    id: "stock-prediction",
    name: "stock-prediction",
    displayName: "Stock Prediction",
    description: "ML model for stock trend prediction",
    lastCommit: "Backtesting optimization",
    lastCommitDate: "7 months ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/PredictingStocks",
      live: null,
    },
    readme: `# Stock Prediction

Machine learning model to predict stock trends. Optimized with backtesting on 10 years of data, achieving 58.8% accuracy.

## Overview

A quantitative analysis tool that uses machine learning to identify potential stock market trends based on historical data patterns.

## Features

- **ML Prediction** - Scikit-learn based models
- **Backtesting** - 10 years of historical data
- **58.8% Accuracy** - Validated prediction performance
- **Feature Engineering** - Technical indicators

## Links

- [View Code](https://github.com/chewton2k/PredictingStocks)
`,
    stack: `# Tech Stack

## Core
- **Python** - Data science language
- **Scikit-learn** - ML library
- **Pandas** - Data manipulation

## Features
- Technical indicators
- Feature engineering
- Model validation

## Analysis
- Backtesting framework
- Performance metrics
- Cross-validation
`,
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    id: "blockchain",
    name: "blockchain",
    displayName: "Simple Blockchain",
    description: "Blockchain with PoW mining in Python",
    lastCommit: "P2P API implementation",
    lastCommitDate: "8 months ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/blockchain",
      live: null,
    },
    readme: `# Simple Blockchain

A simplified blockchain implementation in Python + Flask with PoW mining, transaction validation, and peer-to-peer APIs.

## Overview

Educational blockchain implementation demonstrating core concepts of distributed ledger technology, including proof of work and consensus.

## Features

- **Proof of Work** - Mining algorithm
- **Transaction Validation** - Secure transaction processing
- **P2P Network** - Peer-to-peer communication APIs
- **Block Explorer** - View chain state

## Links

- [View Code](https://github.com/chewton2k/blockchain)
`,
    stack: `# Tech Stack

## Core
- **Python** - Implementation language
- **Flask** - Web framework for APIs

## Features
- SHA-256 hashing
- Merkle trees
- PoW consensus

## Architecture
- RESTful APIs
- P2P networking
- Chain validation
`,
    tags: ["Python", "Flask", "Crypto"],
  },
  {
    id: "riseandwise",
    name: "riseandwise",
    displayName: "RiseAndWise",
    description: "Smart alarm with AI-powered questions",
    lastCommit: "OpenAI integration",
    lastCommitDate: "9 months ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/Rise-Wise",
      live: null,
    },
    readme: `# RiseAndWise

A smart alarm app integrating OpenAI API for dynamic course-related questions. Requires correct answers to turn off alarm.

## Overview

RiseAndWise encourages active learning by requiring users to answer educational questions before dismissing their morning alarm.

## Features

- **OpenAI Integration** - Dynamic question generation
- **Course-specific** - Questions tailored to your classes
- **Gamified Wake-up** - Must answer correctly to dismiss
- **Progress Tracking** - Monitor learning over time

## Links

- [View Code](https://github.com/chewton2k/Rise-Wise)
`,
    stack: `# Tech Stack

## Frontend
- **React Native** - Cross-platform mobile app
- **Expo** - Development framework

## Backend
- **Node.js** - API server
- **OpenAI API** - Question generation

## Features
- Push notifications
- Local storage
- Alarm scheduling
`,
    tags: ["React Native", "OpenAI", "Node"],
  },
  {
    id: "lotto-group",
    name: "lotto-group",
    displayName: "Lotto Group",
    description: "SwiftUI app for lottery ticket pooling",
    lastCommit: "Vision OCR integration",
    lastCommitDate: "10 months ago",
    caseStudyPath: null,
    links: {
      github: "https://github.com/chewton2k/Office-Group",
      live: null,
    },
    readme: `# Lotto Group

A SwiftUI app for pooling lottery tickets. Uses Vision library to scan ticket numbers.

## Overview

Lotto Group simplifies lottery pools by allowing groups to scan, track, and manage shared lottery tickets with automatic number recognition.

## Features

- **OCR Scanning** - Vision framework ticket scanning
- **Group Management** - Create and join lottery pools
- **Number Tracking** - Automatic ticket number extraction
- **Result Checking** - Compare against winning numbers

## Links

- [View Code](https://github.com/chewton2k/Office-Group)
`,
    stack: `# Tech Stack

## Frontend
- **SwiftUI** - Native iOS UI framework
- **Vision** - Apple's ML framework for OCR

## Backend
- **Firebase** - Backend services
- **Cloud Firestore** - Real-time database

## Features
- Camera integration
- Text recognition
- Real-time sync
`,
    tags: ["SwiftUI", "Firebase", "Vision"],
  },
];

/**
 * Get a project by its ID
 */
export const getProjectById = (id) => projects.find((p) => p.id === id);

/**
 * Root level files for the repository
 */
export const rootFiles = [
  {
    name: "README.md",
    type: "file",
    content: `# Projects

Welcome to my project repository. This collection showcases various software engineering projects spanning web development, IoT, machine learning, and more.

## Featured Projects

| Project | Description | Tech Stack |
|---------|-------------|------------|
| UCLA Design | Real-time drag-and-drop furniture placement | React, MongoDB, Node.js |
| PillPal | Automated IoT pill dispenser | ESP32, React, MongoDB |
| BTD Training | 3D physics-based aim trainer | Three.js, JavaScript |
| Bruinwalk | Professor reviews and grade distributions | Python, Django, PostgreSQL |
| UCLA Clubhouse | Student organization directory | React, Node.js, MongoDB |

## Navigation

Click on any folder to explore the project's details, including:
- **README.md** - Project overview and features
- **STACK.md** - Technical implementation details

## Contact

Feel free to reach out for collaboration opportunities or questions about any project.
`,
  },
];
