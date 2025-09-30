import "./ProjectsPage.css";

const Projects = () => {
return (
    <section className="projects-section">
      <h2 className="projects-title">projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">lotto group</h3>
          <p className="project-description">
            iOS app for pooling tickets, scanning lotto numbers, and managing
            group entries in real time.
          </p>
          <p className="project-tech">
            swift · swiftui · firebase · vision · git/github
          </p>
          <div className="project-images">
            <img src="/images/lotto-1.png" alt="Lotto Group screenshot 1" />
            <img src="/images/lotto-2.png" alt="Lotto Group screenshot 2" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">stock market prediction</h3>
          <p className="project-description">
            machine learning pipeline to forecast stock trends using regression
            models and engineered features.
          </p>
          <p className="project-tech">
            python · pandas · numpy · scikit-learn · jupyter
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-title">ucla room design</h3>
          <p className="project-description">
            interactive web app for designing and reviewing dorm layouts with
            drag & drop furniture and searchable database.
          </p>
          <p className="project-tech">
            mongodb · express · react (vite) · node.js
          </p>
          <div className="project-images">
            <img src="/images/room-1.png" alt="UCLA Room Design screenshot 1" />
            <img src="/images/room-2.png" alt="UCLA Room Design screenshot 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
