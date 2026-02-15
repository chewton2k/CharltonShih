import { useState } from "react";
import "./ExperiencePage.css";

// i want to add some logos to the side of the name of the company, small ones 

const experiences = [
    {
    role: "Software Engineer",
    organization: "ACM TeachLA (UCLA)",
    link: "https://teachla.uclaacm.com/",
    date: "February 2026 - Present",
    location: "Los Angeles, California",
    details: [
      "Coming Soon...",
    ],
  },
  {
    role: "Software Engineering Intern",
    organization: "AfterQuery",
    link: "https://www.afterquery.com/",
    date: "October 2025 - Present",
    location: "San Francisco, California (remote)",
    details: [
      "Engineered a full-stack RL training environment for a GRC platform, designing and implementing scalable APIs, frontend interfaces, and unified Docker/nginx deployment using TypeScript, FastAPI, and SQLAlchemy/SQLite",
      "Built a Python MCP server exposing tool calls for Excel report generation (charts, formulas), reducing manual data entry by 50%+, and integrated it into a Harbor benchmarking pipeline using LLM verifiers to score trajectories and outputs",
      "Authored and executed detailed QA plans for a full-stack application, validating state consistencies and user flow",
      "Developed a Python CLI/pip package for LLM-driven FK-safe data generation with async batching (10–20+ calls/row)",
    ],
  },
  {
    role: "Software Engineering",
    organization: "Bruinwalk (Student Media UCLA)",
    link: "https://www.bruinwalk.com/",
    date: "October 2025 - Present",
    location: "Los Angeles, California",
    details: [
      "Refactored backend and Docker, React, and Django workflows for 50,000+ monthly users, cutting loading times by 20%",
      "Automated scripts to populate new enrollment information utilizing Redis for caching and cutting API calls by 33%",
      "Scaled PostgreSQL backend and parsers on 10 DigitalOcean VMs, supporting over 1M+ views monthly site visits",
    ],
  },
  {
    role: "Computational and AI Epigenetics Researcher",
    organization: "Pellegrini Lab and The Roychowdhury Group Lab",
    link: "https://www.vwaniroychowdhury.com/complexnetworks",
    date: "September 2025 - January 2026",
    location: "Los Angeles, California",
    details: [
      "Built genomic tokenization and embedding pipelines using Python, PyTorch, and Hugging Face Transformers to analyze plasma RRBS DNA, processing over 17 million+ reads to classify samples using SeqIO, NumPy, Pandas, and XGBoost",
      "Applied PCA, UMAP, and LLM-based genomic embeddings to visualize methylation variance relationships across samples",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Clubhouse @ UCLA",
    link: "https://www.clubhouseucla.com/",
    date: "March 2025 - Present",
    location: "Los Angeles, California",
    details: [
      "Developed a full-stack React, Next.js, Supabase, TailwindCSS, and Vercel, serving 200+ users since launch",
      "Constructed and optimized SQL queries and API integrations to sort over 100+ reviews across 1,400+ club entries, streamlining data aggregation, improving accuracy, and workflow efficiency for development and deployment",
      "Worked alongside a 14-person cross-functional team to translate Hi-Fis into functional UI features using TailwindCSS",
    ],
  },
  {
    role: "Reinforcement Learning Researcher",
    organization: "BruinML Lab",
    date: "December 2025 - October 2026",
    location: "Los Angeles, California",
    details: [
      "Collaborated with a three-person team to design and develop multiplayer DCM cascading bandits under reinforcement learning frameworks, targeting sublinear regret under unique action and reward information asymmetry settings",
      "Experimented with Thompson Sampling and UCB algorithms to analyze multi-agent, multi-click bandit performance",
      "Conducted large-scale simulations (100,000+ rounds) to validate theoretical bounds, measuring regret growth under varying exploration strategies (mMDSEE, UCB Intervals, Round-Robin Allocation)",
    ],
  },
  {
    role: "Software Engineer",
    organization: "AdOptimal",
    date: "December 2025 - August 2025",
    location: "Los Angeles, California",
    details: [
      "Ad-Optimal connects businesses with student organizations, simplifying processes for advertisements and transactions",
      "Built and maintained RESTful API endpoints to support real-time communication and payment processing, integrating with frontend components and ensuring reliable client-server interactions",
      "Developed and optimized partial-search functionality, improving search efficiency and cutting load times by 50%",
      "Utilized web scraping for data collection and implemented OAuth 2.0 with JWT for secure, stateless authorization",
    ],
  },
  {
    role: "Machine Learning Researcher",
    organization: "Arisaka Elegant Mind Lab",
    date: "July 2024 - July 2025",
    location: "Los Angeles, California",
    details: [
      "Collaborated with a 10-person team to develop affordable autonomous surgery robots under Prof. Arisaka and Yunbo Wang",
      "Established servomotor communication using ROS2, ESP32, and Python",
      "Trained and tuned ACT policies using PyTorch and Mujoco, stabilizing learning across 5000+ epochs of human demonstration data",
      "Boosted tracking efficiency through OpenCV for ultrasound reconstruction and biopsy operations",
      "Applied imitation learning with ACT, CNNs, and motor outputs to enhance robotic operations",
    ],
  },
  {
    role: "Learning Assistant (CS 35L)",
    organization: "UCLA Henry Samueli School of Engineering and Applied Science",
    link: "https://web.cs.ucla.edu/classes/spring1f/cs35L/",
    date: "March 2025 - June 2025",
    location: "Los Angeles, California",
    details: [
      "Led 20–30 student discussion sessions on software construction, covering Emacs, networks, network security, scripting, operating systems, and software testing techniques",
      "Collaborated with course professors and independently conducted office hours to assist students with coursework and projects",
    ],
  },
  {
    role: "Learning Assistant (Math 32B)",
    organization: "UCLA Henry Samueli School of Engineering and Applied Science",
    link: "https://catalog.registrar.ucla.edu/course/2022/math32b?siteYear=2022",
    date: "January 2024 - July 2024",
    location: "Los Angeles, California",
    details: [
      "Led discussion sessions of 20-30 students on course topics for multivariable calculus",
      "Collaborated with course professors and peers to align discussion sessions with course learning objectives",
    ],
  },
];

const ExperiencePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experience-section">
      <div className="experience-max-width">
        <h2 className="experience-title">experience.</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div
                className={`timeline-content ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <div className="card-header">
                  <div className="card-info">
                    <div className="role-badge">{exp.role}</div>
                    <h3 className="organization-name">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="org-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.organization}
                          <span className="link-arrow">↗</span>
                        </a>
                      ) : (
                        exp.organization
                      )}
                    </h3>
                    <div className="meta-info">
                      <span className="date">{exp.date}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  <div className={`expand-icon ${expandedIndex === index ? 'rotated' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className={`details-wrapper ${expandedIndex === index ? 'open' : ''}`}>
                  <ul className="details-list">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
