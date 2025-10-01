import { useState } from "react";
import "./ExperiencePage.css";

const experiences = [
  {
    role: "Undergraduate Researcher",
    organization: "Physical Sciences and Mathematics Lab",
    date: "Dec 2025 - Present | Los Angeles, California",
    details: [
      "Collaborated with a three-person team to design and develop multiplayer DCM cascading bandits under reinforcement learning frameworks, targeting sublinear regret under unique action and reward information asymmetry settings",
      "Experimented with Thompson Sampling and UCB algorithms to analyze multi-agent, multi-click bandit performance",
      "Conducted large-scale simulations (100,000+ rounds) to validate theoretical bounds, measuring regret growth under varying exploration strategies (mMDSEE, UCB Intervals, Round-Robin Allocation)"
    ]
  },
  {
    role: "Full Stack Developer",
    organization: "AdOptimal",
    date: "Dec 2025 - Aug 2025 | Los Angeles, California",
    details: [
      "Ad-Optimal connects businesses with student organizations, simplifying processes for advertisements and transactions",
      "Built and maintained RESTful API endpoints to support real-time communication and payment processing, integrating with frontend components and ensuring reliable client-server interactions",
      "Developed and optimized partial-search functionality, improving search efficiency and cutting load times by 50%",
      "Utilized web scraping for data collection and implemented OAuth 2.0 with JWT for secure, stateless authorization"
    ]
  },
  {
    role: "Undergraduate Researcher",
    organization: "UCLA Computer Science Department",
    date: "Jul 2024 - Jul 2025 | Los Angeles, California",
    details: [
      "Collaborated with a 10-person team to develop affordable autonomous surgery robots under Prof. Arisaka and Yunbo Wang",
      "Established servomotor communication using ROS2, ESP32, and Python",
      "Boosted tracking efficiency through OpenCV for ultrasound reconstruction and biopsy operations",
      "Applied imitation learning with ACT, CNNs, and motor outputs to enhance robotic operations"
    ]
  },
  {
    role: "Learning Assistant (CS 35L)",
    organization: "UCLA Henry Samueli School of Engineering and Applied Science",
    date: "Mar 2025 - Jun 2025 | Los Angeles, California",
    details: [
      "Led 20–30 student discussion sessions on software construction, covering Emacs, networks, network security, scripting, operating systems, and software testing techniques",
      "Collaborated with course professors and independently conducted office hours to assist students with coursework and projects"
    ]
  },
  {
    role: "Learning Assistant (Math 32B)",
    organization: "UCLA Henry Samueli School of Engineering and Applied Science",
    date: "Jan 2024 - Jul 2024 | Los Angeles, California",
    details: [
      "Led discussion sessions of 20-30 students on course topics for multivariable calculus",
      "Collaborated with course professors and peers to align discussion sessions with course learning objectives"
    ]
  }
];

const ExperiencePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBlock = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">experience.</h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-block ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleBlock(index)}
          >
            <p className="role">{exp.role}</p>
            <h3 className="organization">{exp.organization}</h3>
            <p className="date-location">{exp.date}</p>

            <div className="details">
              <ul>
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
