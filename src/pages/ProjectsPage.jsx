
const ProjectCard = ({ title, description, image }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <ProjectCard
        title="Pill Pal"
        description="A web application designed to automate and simplify prescription usage."
        image="/assets/images/pill-pal.jpg"
      />
      <ProjectCard
        title="Heart Beat"
        description="A mobile application designed to connect users through music."
        image="/assets/images/heart-beat.jpg"
      />
    </div>
  </section>
);

export default Projects;
