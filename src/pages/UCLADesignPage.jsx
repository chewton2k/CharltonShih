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
        For the technical aspects for our project, we utilize the MERN stack: MongoDB/Mongoose (database), Express, React, and Node. Scripts have also been installed like concurrently to run the client and server side simultaneously. For the frontend, Vite was used to set up a React-based template along with a TailwindCSS package for styling each component and page. Lastly, the project was mainly written using Javascript, HTML, and CSS.
        </p>

        <h3>contribution.</h3>
        <p>
        Throughout the project, I made several contributions toward the improvement and completion of the project. My first contribution was towards core development as I set up the repository and pushed a template of the project using Vite. At the beginning of the project, my development focused primarily on the client side, such as importing necessary packages to be used, like Express and tailwindcss, leading to an easy connection with endpoints between the frontend and the backend. I also populated our public folder with many designs and icons that would later be used to style all the pages.  
	For my core/server-side development, I made several significant contributions. These included implementing user-generated items, adding the templates page with backend routes and controllers, creating object placement logic, and developing room schemas, routes, and controllers. For the user-generated items, I implemented a key backend feature that links item generation to a specific user ID, enabling personalized management. This feature later integrated seamlessly with other backend logic developed by the team, such as design schemas and controllers. For the templates page, I contributed to accurately displaying the object array, allowing users to visualize their design before saving their choices. In terms of placement logic, I enhanced the room design flow by enabling objects to be moved once dropped from the sidebar. This improvement not only boosted customization but also allowed the team to reallocate efforts toward other critical tasks that needed completion.
	In terms of UI/UX development, I was responsible for implementing numerous components and pages, including CallToAction, Checklist, DropDownMenu, FurnitureObjects, HandleNewFurniture, HeartButton, HeroSection, HomePageButton, HomePageMiddle, HomePageTop, LogInButton, LogInForm, Navbar, PlanExpSection, RegistrationForm, RoomObjects, SearchBar, SideBar, SignUpButton, SubmitButton, TemplateGrid, CreateDesignPage, HomePage, LogInPage, RegistrationPage, and TemplatePage. I also handled the styling, navigation, and structure for each page, ensuring that user experience was prioritized while improving the visual consistency and structure across the site. This work was crucial in allowing the team to display backend information, which played an important role in testing and debugging. 
	To protect against threats, my contributions were also in the form of security and data flow management. I added protected routes to ensure secure access control, improving the overall structure of the system’s security. Additionally, I implemented password hashing and complexity requirements to strengthen account protection, complementing the team’s effort in authentication and user management. Lastly, throughout the project, my contributions also included bug fixing and improvements, allowing teammates to pull from the most recent and reliable code for development. 
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


