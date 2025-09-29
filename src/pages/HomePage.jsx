import './HomePage.css';

const HomePage = () => {
  return (
    <section id="home" className="home">
      <div>
        <h1>
          I'm Charlton{' '}
          <span className="rainbow-text">innovation</span> and{' '}
          <span className="rainbow-text">creativity</span>
        </h1>
      </div>
      <div>
        <p>
          Currently studying computer science at UCLA
        </p>
      </div>

      <div className="box-container">
        <div className="box-item">
          <div className="gray-box"></div>
          <h3 className="box-description">PillPall</h3>
        </div>
        <div className="box-item">
          <div className="gray-box"></div>
          <h3 className="box-description">UCLA Design</h3>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
