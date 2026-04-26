'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { pinnedProjects } from '../data/projects';
import { experiences } from '../data/experiences';
import { useGravity } from '../hooks/useGravity';
import ProjectCard from './ProjectCard';
import ExperienceItem from './ExperienceItem';

export default function WorkSection() {
  const [openExp, setOpenExp] = useState(null);
  const containerRef = useRef(null);
  const { gravityOn, activateGravity, deactivateGravity } = useGravity();

  return (
    <div>
      <div className="p-hero">
        <motion.p
          className="p-hero-greeting"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
        >
          Hi there, I&rsquo;m Charlton.
        </motion.p>
        <motion.p
          className="p-hero-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
        >
          Software engineer &amp; researcher at UCLA — I build at the intersection of AI, systems, and the web.
          <br/>
          <br/>
          I'm a prev. SWE/AI Intern @ AfterQuery, prev. research assistant @ BruinML, Arisaka, and Pellegrini/Roychowdhury Lab. I'm always down to chat at <a href="mailto:ctwshih@gmail.com">ctwshih[at]gmail.com</a> !
        </motion.p>
      </div>

      <div ref={containerRef}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
          <button
            className={`p-gravity-btn${gravityOn ? ' p-gravity-btn--reset' : ''}`}
            onClick={gravityOn ? deactivateGravity : activateGravity}
          >
            {gravityOn
              ? <><span className="p-gravity-icon">↺</span> Reset</>
              : <> Gravity</>
            }
          </button>
        </div>

        <section className="p-section">
          <h2 className="p-section-label">Projects</h2>
          <div className="p-projects-grid">
            {pinnedProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
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

        {/* <section className="p-section">
          <h2 className="p-section-label">Experience</h2>
          <div className="p-list">
            {experiences.map((exp, i) => (
              <ExperienceItem
                key={i}
                exp={exp}
                isOpen={openExp === i}
                onToggle={() => setOpenExp(openExp === i ? null : i)}
              />
            ))}
          </div>
        </section>*/}
      </div>
    </div>
  );
}
