  import "./AboutPage.css";

  const AboutPage = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Text Section */}
          <div className="about-text">
            <h1 className="h1">
              Hi again! I see you’re scouring my little corner of the internet,
              let me formally introduce myself.
            </h1>
            <p>
              My name is Shawn Nguyen and I’m a
              product designer based in Los Angeles/Orange County, California!
              I want to design products that solve real problems for real people.
              My mission is to build technology that feels human, empowers
              communities, and makes the world better—not scarier.
            </p>
            <p>
              Currently, I’m in my third-year at{" "}
              <span className="highlight">UCLA</span> pursuing a B.S. Cognitive
              Science with a minor in Data Science Engineering. I’m open to
              learning anything and everything about the world of design and user
              research!
            </p>
            <p>
              You can reach out to me via{" "}
              <a href="#" className="link">
                LinkedIn
              </a>{" "}
              or{" "}
              <a href="mailto:youremail@gmail.com" className="link">
                email
              </a>{" "}
              — I look forward to chatting with you!
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img src="/shawn.jpeg" className="about-image" alt="me" />
          </div>
        </div>

        {/* Image Grid Section */}
  <div className="gallery-section">
    <h2 className="gallery-title">While I’m offline, I love...</h2>

    <div className="image-row">
      <img src="/matcha.jpeg" alt="gallery 1" />
      <img src="/cooking.jpeg" alt="gallery 2" />
      <img src="/friends.jpeg" alt="gallery 3" />
      <img src="/gym.jpeg" alt="gallery 4" />
    </div>

    <h2 className="gallery-title">On Repeat</h2>

    <div className="image-row">
      <img src="/sza.jpeg" alt="gallery 5" />
      <img src="/somber.jpeg" alt="gallery 6" />
      <img src="/marias.jpeg" alt="gallery 7" />
      <img src="/album.jpeg" alt="gallery 8" />
    </div>
  </div>
      </section>
    );
  };

  export default AboutPage;
