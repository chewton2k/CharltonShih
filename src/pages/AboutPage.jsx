  import "./AboutPage.css";

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
              exploring new concepts within math and cs, or dabbling with blockchain and cryptocurrency.
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
            <img src="me.jpeg" className="about-image" alt="me" />
          </div>
        </div>

      </section>
    );
  };

  export default AboutPage;
