import { LaptopFrame, GitHubRepoView } from "../components/github";
import "./ProjectsPage.css";

/**
 * ProjectsPage - GitHub repository-style projects showcase
 * Renders inside a MacBook-style laptop frame for immersive experience
 */
const ProjectsPage = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content-wrapper">
        <h2 className="projects-title">projects.</h2>
        <p className="projects-subtitle">
          Browse my work like a GitHub repository. Click folders to explore project details.
        </p>
        <LaptopFrame>
          <GitHubRepoView />
        </LaptopFrame>
      </div>
    </section>
  );
};

export default ProjectsPage;
