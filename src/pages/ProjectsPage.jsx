import React, { useState } from "react";
import "./ProjectsPage.css";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <section id="projects" className="projects-section">
      
      <div className="projects-content-wrapper">
        <h2 className="projects-title">projects.</h2>
        <div className="projects-grid">
          {/* Project 1 - UCLA Design */}
          <div className="project-card with-image">
            <div className="project-media">
               <img src="/CharltonShih/UCLAdesign.png" alt="UCLA Design" />
               <div className="media-overlay">
                  <Link to="/projects/ucla-design" className="overlay-link">View Details</Link>
               </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">UCLA Design</h3>
              <p className="project-description">
                Developed a real-time, state-managed drag-and-drop UI for furniture placement using React's component-based
                architecture and optimized event-driven rendering for seamless interactivity. Designed and optimized a NoSQL document database in MongoDB.
              </p>
              <div className="project-tags">
                <span>React.js</span><span>MongoDB</span><span>Node.js</span>
              </div>
              <div className="project-links">
                <Link to="/projects/ucla-design">Case Study →</Link>
                <a href="https://github.com/chewton2k/UCLADesign" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>

          {/* Project 2 - PillPal */}
          <div className="project-card with-image">
            <div className="project-media">
               <img src="/CharltonShih/pillpall.png" alt="PillPal" />
               <div className="media-overlay">
                  <Link to="/projects/pillpall" className="overlay-link">View Details</Link>
               </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">PillPal</h3>
              <p className="project-description">
                Automated pill dispenser with tracking and notifications. Full-stack IoT system connecting ESP32, servo motors, and IR sensors.
                Integrated Google Calendar API and OAuth 2.0 for schedule management.
              </p>
              <div className="project-tags">
                <span>IoT</span><span>React</span><span>MongoDB</span>
              </div>
              <div className="project-links">
                <Link to="/projects/pillpall">Case Study →</Link>
              </div>
            </div>
          </div>

          {/* BTD Training */}
          <div className="project-card with-image">
            <div className="project-media">
               <img src="/CharltonShih/btd.png" alt="BTD Training Camp" />
               <div className="media-overlay">
                  <Link to="/projects/btd-training" className="overlay-link">View Details</Link>
               </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Bloon Towers Defense Training Camp</h3>
              <p className="project-description">
                A 3D FPS physics-based aim trainer built with Three.js. Features procedural waves, custom physics, and shadow mapping for a complete BTD experience.
              </p>
              <div className="project-tags">
                <span>Three.js</span><span>JavaScript</span><span>Physics</span>
              </div>
              <div className="project-links">
                <Link to="/projects/btd-training">Details →</Link>
                <a href="https://github.com/chewton2k/BalloonTowerTraining" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>

          {/* CrowdPlan */}
          <div className="project-card with-image">
            <div className="project-media">
               <div className="project-gradient gradient-crowd">📅</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">CrowdPlan</h3>
              <p className="project-description">
                Architected a full-stack event coordination platform using Next.js and PostgreSQL.
                Containerized with Docker for scalable deployment.
              </p>
              <div className="project-tags">
                <span>Next.js</span><span>PostgreSQL</span><span>Docker</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/chewton2k/CrowdPlan" target="_blank" rel="noopener noreferrer">Code (Unavailable) ↗</a>
              </div>
            </div>
          </div>

          {/* Redis */}
          <div className="project-card">
            <div className="project-info">
              <h3 className="project-title">MiniRedis</h3>
              <p className="project-description">
                High-concurrency Redis-like server using Python and Gevent. 
                Implemented asynchronous socket handling and connection pooling.
              </p>
              <div className="project-tags">
                <span>Python</span><span>Gevent</span><span>Network</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/chewton2k/MiniRedis" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>

          {/* Club Scraper */}
          <div className="project-card">
            <div className="project-info">
              <h3 className="project-title">Club Scraper</h3>
              <p className="project-description">
                Python web scraper for gathering UCLA club info. Uses Selenium to automate browser actions and extract contact details.
              </p>
              <div className="project-tags">
                <span>Python</span><span>Selenium</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/chewton2k/ClubScraper" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>

          {/* Stock Prediction */}
          <div className="project-card with-image">
             <div className="project-media">
               <div className="project-gradient gradient-stock">📈</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Stock Prediction</h3>
              <p className="project-description">
                ML model to predict stock trends. Optimized with backtesting on 10 years of data, achieving 58.8% accuracy.
              </p>
              <div className="project-tags">
                <span>Python</span><span>Scikit-learn</span><span>Pandas</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/chewton2k/PredictingStocks" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>

          {/* Blockchain */}
          <div className="project-card">
            <div className="project-info">
              <h3 className="project-title">Simple Blockchain</h3>
              <p className="project-description">
                Simplified blockchain in Python + Flask with PoW mining, transaction validation, and peer-to-peer APIs.
              </p>
              <div className="project-tags">
                <span>Python</span><span>Flask</span><span>Crypto</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/chewton2k/blockchain" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>

          {/* RiseAndWise */}
          <div className="project-card with-image">
             <div className="project-media">
               <div className="project-gradient gradient-rise">⏰</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">RiseAndWise</h3>
              <p className="project-description">
                Smart alarm app integrating OpenAI API for dynamic course-related questions. Requires correct answers to turn off alarm.
              </p>
              <div className="project-tags">
                <span>React Native</span><span>OpenAI</span><span>Node</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/chewton2k/Rise-Wise" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>

          {/* Lotto Group */}
          <div className="project-card">
            <div className="project-info">
              <h3 className="project-title">Lotto Group</h3>
              <p className="project-description">
                SwiftUI app for pooling lottery tickets. Uses Vision library to scan ticket numbers.
              </p>
              <div className="project-tags">
                <span>SwiftUI</span><span>Firebase</span><span>Vision</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/chewton2k/Office-Group" target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ height: '4rem' }} /> {/* Spacer */}
      </div>
    </section>
  );
};

export default ProjectsPage;