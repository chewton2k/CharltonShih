import "./UCLADesignPage.css";

const UCLADesignPage = () => {
  return (
    <section className="ucla-section">
      <div className="ucla-header">
        <h2 className="ucla-title">ucla design.</h2>
        <p className="ucla-subtitle">screenshots, flows, and implementation details</p>
      </div>

      <div className="ucla-description">
        <p>
          Interactive web app for designing and reviewing dorm layouts with drag & drop furniture, searchable database,
          and a NoSQL-backed data model. Built with React and a Node/Express API over MongoDB.
        </p>
      </div>

      <div className="ucla-video">
        <div className="ucla-video-inner">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q7ZB6bKBBoM?si=cZKez03C9ZEcW2m9" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        </div>
      </div>

      <div className="ucla-details">
        <h3>purpose / features.</h3>
        <p>
        Transitioning into a new dorm room presents challenges, particularly for freshmen or individuals unfamiliar with their new environment. Properly planning a room layout and understanding the necessary items can significantly ease this transition. UCLA Design is a web application that helps users visualize and plan their next room. With built-in scaling, users won’t have to scale objects to their new room manually and can set dimensions for any new objects a user wants to import. Designs are dynamically stored within a database and can be queried for easy access to saved rooms. 
	The platform also promotes user interaction and collaboration with built-in templating where all public rooms are displayed on a templates page, ready to be saved and personalized to anybody’s preference. With additional features such as a “todo-list” and “first day of college checklist,” users can also store personal items they need to be reminded about along with default essential items and tasks that need to be done. As for financial worries, prices for the default 14P meal plan are displayed, allowing users to manage or adjust their budget accordingly.
	UCLA Design is also authenticated, prompting users to log in or register before they start their journey on the platform. To thwart against unwanted attackers,  all information stored in the session within the database, where personal information is tied to the user along with password encryption, is inaccessible even with an admin API key. Lastly, to protect against password guessing, there are password requirements a user must fulfill before registering, along with a timeout set after multiple invalid attempts to login. 

        </p>

        <h3>technology.</h3>
        <p>
        MongoDB/Mongoose, Express, React, and Node.
        </p>

      </div>


      <div className="ucla-gallery">
      <img src="/CharltonShih/UCLAdesign.png" alt="UCLA design 1" onClick={() => openLightbox("/CharltonShih/UCLAdesign.png")} />
      <img src="/CharltonShih/UCLA.png" alt="UCLA design 2" onClick={() => openLightbox("/CharltonShih/UCLAdesign1.png")} />
      </div>
    </section>
  );
};

export default UCLADesignPage;


