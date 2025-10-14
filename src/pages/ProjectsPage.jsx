import React from "react";
import "./ProjectsPage.css";
import { Link } from "react-router-dom";
import LiquidEther from "../components/Background";

const ProjectsPage = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">projects.</h2>
      <div className="projects-grid">
        {/* Project 1 - UCLA Design */}
        
        <div className="project-card">
          <h3 className="project-title">UCLA Design</h3>
          <p className="project-description">
            Developed a real-time, state-managed drag-and-drop UI for furniture placement using React's component-based
            architecture and optimized event-driven rendering for seamless interactivity. Designed and optimized a NoSQL document database in MongoDB, indexing user-generated layouts and
            integrating queryable search functionality.
          </p>
          <p className="project-tech">
            React.js · MongoDB · Node.js · Express · JS · TailwindCSS
          </p>
          <a href="#/projects/ucla-design" className="project-link">View More Screens →</a>
          <a href="https://github.com/chewton2k/UCLADesign" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">PillPal</h3>
          <p className="project-description">
            Collaborated with a 16-person team of mechanical, electrical, and UI/UX engineers to build Pill Pal, an automated pill
            dispenser that tracks usage and notifies users of scheduled doses. Developed a full-stack IoT system connecting ESP32 microcontrollers, servo motors, and IR sensors with a web platform
            to enable real-time dispensing and confirmation tracking. Integrated Google Calendar API, OAuth 2.0, and Google Cloud IAM to manage medication schedules with secure reminders
            and event creation.
          </p>
          <p className="project-tech">
            Typescript · React.js · MongoDB · Arduino · WebSocket
          </p>
          <Link to="/projects/pillpall" className="project-link">View More Screens →</Link>
        </div>

        <div className="project-card">
          <h3 className="project-title">CrowdPlan</h3>
          <p className="project-description">
            Architected a full-stack event coordination platform using Next.js, React, Node.js, Express, Prisma, and PostgreSQL,
            containerized with Docker and Docker Compose for reproducible, scalable development and deployment
            Integrated API routing, database migrations, authentication, and environment configuration, maintaining scalability and
            reproducibility across local and cloud environments
          </p>
          <p className="project-tech">
            Typescript · Next.js · PostgreSQL · Docker · Prisma · Git/Github
          </p>
          <a href="https://github.com/chewton2k/CrowdPlan" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project (unavailable) →
          </a>
        </div>

        {/* Project 2 - Club Scraper */}
        <div className="project-card">
          <h3 className="project-title">Club Scraper</h3>
          <p className="project-description">
            Python web scraper for gathering information on tech clubs at UCLA from their official student association page. Uses Selenium to automate browser actions and extract relevant data such as club names, emails, Instagram handles, and signatories.
          </p>
          <p className="project-tech">
            python · jupyterlab · selenium
          </p>
          <a href="https://github.com/chewton2k/ClubScraper" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>

        {/* Project 3 - Stock Market Prediction */}
        <div className="project-card">
          <h3 className="project-title">Stock Market Prediction Using Machine Learning and Data Analysis</h3>
          <p className="project-description">
            Built data frames and visualizations with Pandas, NumPy, and Jupyter to compare predictions with targets across
            10000 data points. Trained an ML model (scikit-learn) with 50% precision; optimized with backtesting (10 years of data) and new
            predictors, boosting accuracy to 58.8%.
          </p>
          <p className="project-tech">
            python · jupyterlab · Scikit-learn · Pandas · NumPy · matplotlib
          </p>
          <a href="https://github.com/chewton2k/PredictingStocks" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>

        {/* Project 4 - Lotto Group */}
        <div className="project-card">
          <h3 className="project-title">Lotto Group</h3>
          <p className="project-description">
            Enabled users to create groups and pool money for lottery ticket purchases, streamlining the process for workplaces and other communities. Developed using SwiftUI, implementing API calls to display California lottery drawings and jackpots. Leveraged Vision library to accurately scan and parse drawing numbers from tickets.
          </p>
          <p className="project-tech">
            swift · Foundation · Swiftdata · Firebase · vision
          </p>
          <a href="https://github.com/chewton2k/Office-Group" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>

        {/* Project 6 - RiseAndWise */}
        <div className="project-card">
          <h3 className="project-title">RiseAndWise</h3>
          <p className="project-description">
            Built a smart alarm app in React Native that integrates with OpenAI's API to generate dynamic multiple-choice questions tied to a user's courses. Designed a reinforcement-based wake-up system requiring correct answers to deactivate alarms, combining academic review with daily routines. Implemented Supabase backend and Node.js API for course input, question storage, and scalable real-time question generation.
          </p>
          <p className="project-tech">
            Typescript · React Native · Node · Supabase · ExpoGo
          </p>
          <a href="https://github.com/chewton2k/Rise-Wise" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>

              <div className="project-card">
          <h3 className="project-title">Blockchain</h3>
          <p className="project-description">
            Built a simplified blockchain in Python + Flask, implementing block structures with cryptographic hashing, proof-of-work
            mining, transaction validation, and APIs for peer-to-peer communication.
            Demonstrated chain integrity and consensus by resolving forks, validating blocks, synchronizing nodes, and crypto security
          </p>
          <p className="project-tech">
            Python · Flask · Requests · Postman 
          </p>
          <a href="https://github.com/chewton2k/blockchain" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;