'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronIcon } from './icons';

export default function ExperienceItem({ exp, isOpen, onToggle }) {
  return (
    <div className="p-list-item">
      <div className="p-list-row" onClick={onToggle}>
        <div className="p-list-left">
          <img src={exp.logo} alt="" className="p-org-logo" width={16} height={16} loading="lazy" />
          <div className="p-list-text">
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
        </div>
        <div className="p-exp-row-right">
          <span className="p-list-date">{exp.date}</span>
          <ChevronIcon open={isOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
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
  );
}
