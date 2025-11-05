import "./ExperiencePage.css";

const experiences = [
      {
    role: "Software Engineering Intern",
    organization: "Bruinwalk (Student Media UCLA)",
    link:"https://www.bruinwalk.com/",
    date: "October 2025 - Present",
    location: "Los Angeles, California",
    details: [
      "Coming soon..."
    ]
  },
    {
    role: "Computational and AI Epigenetics Researcher",
    organization: "Pellegrini Lab and The Roychowdhury Group Lab",
    link: "https://www.vwaniroychowdhury.com/complexnetworks",
    date: "September 2025 - Present",
    location: "Los Angeles, California",
    details: [
      "Built genomic tokenization and embedding pipelines using Python, PyTorch, and Hugging Face Transformers to analyze plasma RRBS DNA, processing over 17 million+ reads to classify samples using SeqIO, NumPy, Pandas, and XGBoost",
      "Applied PCA, UMAP, and LLM-based genomic embeddings to visualize methylation variance relationships across samples"
    ]
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
      "Worked alongside a 14-person cross-functional team to translate Hi-Fis into functional UI features using TailwindCSS"
    ]
  },
  {
    role: "Reinforcement Learning Researcher",
    organization: "BruinML Lab",
    date: "December 2025 - October 2025",
    location: "Los Angeles, California",
    details: [
      "Collaborated with a three-person team to design and develop multiplayer DCM cascading bandits under reinforcement learning frameworks, targeting sublinear regret under unique action and reward information asymmetry settings",
      "Experimented with Thompson Sampling and UCB algorithms to analyze multi-agent, multi-click bandit performance",
      "Conducted large-scale simulations (100,000+ rounds) to validate theoretical bounds, measuring regret growth under varying exploration strategies (mMDSEE, UCB Intervals, Round-Robin Allocation)"
    ]
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
      "Utilized web scraping for data collection and implemented OAuth 2.0 with JWT for secure, stateless authorization"
    ]
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
      "Applied imitation learning with ACT, CNNs, and motor outputs to enhance robotic operations"
    ]
  },
  {
    role: "Learning Assistant (CS 35L)",
    organization: "UCLA Henry Samueli School of Engineering and Applied Science",
    link: "https://web.cs.ucla.edu/classes/spring1f/cs35L/", 
    date: "March 2025 - June 2025",
    location: "Los Angeles, California",
    details: [
      "Led 20–30 student discussion sessions on software construction, covering Emacs, networks, network security, scripting, operating systems, and software testing techniques",
      "Collaborated with course professors and independently conducted office hours to assist students with coursework and projects"
    ]
  },
  {
    role: "Learning Assistant (Math 32B)",
    organization: "UCLA Henry Samueli School of Engineering and Applied Science",
    link: "https://catalog.registrar.ucla.edu/course/2022/math32b?siteYear=2022", 
    date: "January 2024 - July 2024",
    location: "Los Angeles, California",
    details: [
      "Led discussion sessions of 20-30 students on course topics for multivariable calculus",
      "Collaborated with course professors and peers to align discussion sessions with course learning objectives"
    ]
  }
];

const ExperiencePage = () => {
  return (
    <section className="experience-section">
      <div className="experience-wrapper">
        {/* Header */}
        <div className="experience-header">
          <h2 className="experience-title">experience.</h2>
        </div>

        {/* Stacked List */}
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <article key={index} className="experience-card">
              <div className="card-content">
                <header className="card-header">
                  <div className="role-container">
                    <span className="role-badge">{exp.role}</span>
                  </div>
                  <h3 className="organization">
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organization-link"
                      >
                        {exp.organization} <span className="link-icon">🔗</span>
                      </a>
                    ) : (
                      exp.organization
                    )}
                  </h3>
                  <div className="date-info">
                    <p className="date">{exp.date}</p>
                    <p className="location">📍 {exp.location}</p>
                  </div>
                </header>
                <div className="card-details">
                  <ul className="details-list">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="detail-item">
                        <span className="bullet-point" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
