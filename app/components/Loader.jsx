const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader-overlay${fadeOut ? ' loader-fade-out' : ''}`}>
      <div className="loader-wrapper">
        <div className="loader-circle" />
        <div className="loader-circle" />
        <div className="loader-circle" />
        <div className="loader-shadow" />
        <div className="loader-shadow" />
        <div className="loader-shadow" />
      </div>
    </div>
  );
};

export default Loader;
