  import "./AboutPage.css";
  import GithubButton from "../components/GitHubbutton";
  import LinkedInButton from "../components/LinkedInButton";
  import EmailButton from "../components/EmailButton";

  const AboutPage = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Text Section */}
          <div className="about-text">
            <h1 className="h1">
              Hi again! Let me formally introduce myself.
            </h1>
            <p>
              My name is Charlton Shih and I’m a
              software developer/ ML researcher based in Los Angeles, California!
              I have a strong interest in applying algorithms 
              and data structures to solve real-world problems,
              particularly in the fields of machine 
              learning and software development.
            </p>
            <p>
              Currently, I’m in my third-year at{" "}
              <span className="highlight">UCLA</span> pursuing a B.S. Computer Science. 
              My approach combines exploring the applications of mathematics and computer 
              science to develop algorithms and solve real-world problems! I'm passionate 
              about mathematics, and I'm currently working on optimization problems, machine 
              learning models, and device development. In my spare time, I challenge myself
              to be active and dedicate time to learning—whether it's building new projects,
              exploring new concepts within math and cs, or my recent interest in dabbling with blockchain and cryptocurrency.
            </p>
            <p>
              You can reach out to me via{" "}
              <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank"className="link">
                LinkedIn
              </a>{" "}
              or{" "}
              <a href="mailto:charltonshih645@g.ucla.edu" className="link">
                email
              </a>{" "}
              — I look forward to chatting with you!
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img src="/CharltonShih/me.jpeg" className="about-image" alt="me" />
          </div>
        </div>

      <div className="gallery-section">
          <h2 className="gallery-title">Some of my favorite hobbies...</h2>

          <div className="image-row">
            <img src="/CharltonShih/kobebeef.jpeg" alt="gallery 1" />
            <img src="/CharltonShih/steak.png" alt="gallery 2" />
            <img src="/CharltonShih/chilicrab.png" alt="gallery 3" />
            <img src="/CharltonShih/motor.png" alt="gallery 4" />
          </div>

          <br/> 

          <div className="image-row">
            <img src="/CharltonShih/tennis.png" alt="gallery 5" />
            <img src="/CharltonShih/don.jpeg" alt="gallery 6" />
            <img src="/CharltonShih/class.jpeg" alt="gallery 7" />
            <img src="/CharltonShih/studying.png" alt="gallery 8" />
          </div>
        </div>
      </section>
    );
  };

  export default AboutPage;
