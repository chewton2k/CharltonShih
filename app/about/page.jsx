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
            My name is Charlton Shih and I&apos;m an Computer Science undergraduate student
            based in Los Angeles, California. I&apos;m especially interested in using
            algorithms, data structures, and mathematical thinking to tackle meaningful
            problems in machine learning and software engineering.
          </p>
          <p>
            Currently, I&apos;m in my third-year at{" "}
            <span className="highlight">UCLA</span> pursuing a B.S. in Computer Science.
            I love research and enjoy working at the intersection of mathematics and
            computing, especially when it leads to new ideas, stronger systems, or deeper
            technical understanding. Right now, I&apos;m exploring optimization,reinforcement
            learning environments, and autonomous robotics. Outside of class and work, I like
            staying active and spending time on new projects, learning more across math and
            computer science, and recently exploring CLI tools and IDEs.
          </p>
          <p>
            You can reach out to me via{" "}
            <a href="https://www.linkedin.com/in/charlton-shih/" target="_blank" className="link">
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
          <img src="/me.jpeg" className="about-image" alt="me" />
        </div>
      </div>

    <div className="gallery-section">
        <h2 className="gallery-title">Some of my favorite hobbies...</h2>

        <div className="image-row">
          <img src="/kobebeef.jpeg" alt="gallery 1" />
          <img src="/steak.png" alt="gallery 2" />
          <img src="/chilicrab.png" alt="gallery 3" />
          <img src="/motor.png" alt="gallery 4" />
        </div>

        <div className="image-row">
          <img src="/tennis.png" alt="gallery 5" />
          <img src="/don.jpeg" alt="gallery 6" />
          <img src="/class.jpeg" alt="gallery 7" />
          <img src="/studying.png" alt="gallery 8" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
