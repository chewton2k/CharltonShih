import "./ExperiencePage.css";

const ExperiencePage = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">experience.</h2>

        {/* Block 1 */}
        <div className="experience-block">
          <p className="role">Undergraduate Researcher</p>
          <h3 className="organization">Physical Sciences and Mathematics Lab</h3>
          <p className="date-location">Dec 2025 - Present &nbsp; | &nbsp; Los Angeles, California</p>
          <p className="details">
            • Collaborated with a three-person team to design and develop multiplayer DCM cascading bandits under
            reinforcement learning frameworks, targeting sublinear regret under unique action and reward information asymmetry settings <br/>
            • Experimented with Thompson Sampling and UCB algorithms to analyze multi-agent, multi-click bandit performance <br/> 
            • Conducted large-scale simulations (100,000+ rounds) to validate theoretical bounds, measuring regret growth under varying exploration strategies (mMDSEE, UCB Intervals, Round-Robin Allocation)
          </p>
        </div>

        {/* Block 2 */}
                <div className="experience-block">
          <p className="role">Full Stack Developer</p>
          <h3 className="organization">AdOptimal</h3>
          <p className="date-location">Dec 2025 - Aug 2025 &nbsp; | &nbsp; Los Angeles, California</p>
          <p className="details">
            • Ad-Optimal connects businesses with student organizations, simplifying processes for advertisements and transactions <br/>
            • Built and maintained RESTful API endpoints to support real-time communication and payment processing, integrating
            with frontend components and ensuring reliable client-server interactions <br/>
            • Developed and optimized partial-search functionality, improving search efficiency and cutting load times by 50% <br/>
            • Utilized web scraping for data collection and implemented OAuth 2.0 with JWT for secure, stateless authorization
          </p>
        </div>

        {/* Block 3 */}
        <div className="experience-block">
          <p className="role">Undergraduate Researcher</p>
          <h3 className="organization">UCLA Computer Science Department</h3>
          <p className="date-location">Jul 2024 - Jul 2025 &nbsp; | &nbsp; Los Angeles, California</p>
          <p className="details">
            • Collaborated with a 10-person team to develop affordable autonomous surgery robots under Prof. Arisaka and Yunbo Wang <br/> 
            • Established servomotor communication using ROS2, ESP32, and Python<br/>
            • Boosted tracking efficiency through OpenCV for ultrasound reconstruction and biopsy operations <br/> 
            • Applied imitation learning with ACT, CNNs, and motor outputs to enhance robotic operations
          </p>
        </div>


        {/* Block 4 */}
        <div className="experience-block">
          <p className="role">Learning Assistant (CS 35L)</p>
          <h3 className="organization">UCLA Henry Samueli School of Engineering and Applied Science</h3>
          <p className="date-location">Mar 2025 - Jun 2025 &nbsp; | &nbsp; Los Angeles, California</p>
          <p className="details">
            • Led 20–30 student discussion sessions on software construction, covering Emacs, networks, network security, scripting,
            operating systems, and software testing techniques <br/> 
            • Collaborated with course professors and independently conducted office hours to assist students with coursework and
            projects
          </p>
        </div>

        {/* Block 5 */}
        <div className="experience-block">
          <p className="role">Learning Assistant (Math 32B)</p>
          <h3 className="organization">UCLA Henry Samueli School of Engineering and Applied Science</h3>
          <p className="date-location">Jan 2024 - Jul 2024 &nbsp; | &nbsp; Los Angeles, California</p>
          <p className="details">
            • Led discussion sessions of 20-30 students on course topics for multivariable calculus <br/> 
            • Collaborated with course professors and peers to align discussion sessions with course learning objectives
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
