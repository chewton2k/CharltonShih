import './HomePage.css';

const HomePage = () => {
  return (
    <section id="home" className="home">
      <div>
        <h1>
          I'm Shawn and I'm a product designer who loves{' '}
          <span className="rainbow-text">innovation</span> and{' '}
          <span className="rainbow-text">creativity</span>
        </h1>
      </div>
      <div>
        <p>
          Currently studying Cognitive Science and Data Science Engineering at UCLA
        </p>
      </div>

      <div className="box-container">
        <div className="box-item">
          <div className="gray-box"></div>
          <h3 className="box-description">Pill Pall</h3>
        </div>
        <div className="box-item">
          <div className="gray-box"></div>
          <h3 className="box-description">Heart Beat</h3>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
