import "./UCLADesignPage.css";

const UCLADesignPage = () => {
  return (
    <section className="ucla-section">
      <div className="ucla-header">
        <h2 className="ucla-title">ucla design</h2>
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
        <h3>Purpose / Features</h3>
        <p>
        Transitioning into a new dorm room presents challenges, particularly for freshmen or individuals unfamiliar with their new environment. Properly planning a room layout and understanding the necessary items can significantly ease this transition. UCLA Design is a web application that helps users visualize and plan their next room. With built-in scaling, users won’t have to scale objects to their new room manually and can set dimensions for any new objects a user wants to import. Designs are dynamically stored within a database and can be queried for easy access to saved rooms. 
	The platform also promotes user interaction and collaboration with built-in templating where all public rooms are displayed on a templates page, ready to be saved and personalized to anybody’s preference. With additional features such as a “todo-list” and “first day of college checklist,” users can also store personal items they need to be reminded about along with default essential items and tasks that need to be done. As for financial worries, prices for the default 14P meal plan are displayed, allowing users to manage or adjust their budget accordingly.
	UCLA Design is also authenticated, prompting users to log in or register before they start their journey on the platform. To thwart against unwanted attackers,  all information stored in the session within the database, where personal information is tied to the user along with password encryption, is inaccessible even with an admin API key. Lastly, to protect against password guessing, there are password requirements a user must fulfill before registering, along with a timeout set after multiple invalid attempts to login. 

        </p>

        <h3>Technology</h3>
        <p>
        For the technical aspects for our project, we utilize the MERN stack: MongoDB/Mongoose (database), Express, React, and Node. Scripts have also been installed like concurrently to run the client and server side simultaneously. For the frontend, Vite was used to set up a React-based template along with a TailwindCSS package for styling each component and page. Lastly, the project was mainly written using Javascript, HTML, and CSS.
        </p>

        <h3>Contribution</h3>
        <p>
        Throughout the project, I made several contributions toward the improvement and completion of the project. My first contribution was towards core development as I set up the repository and pushed a template of the project using Vite. At the beginning of the project, my development focused primarily on the client side, such as importing necessary packages to be used, like Express and tailwindcss, leading to an easy connection with endpoints between the frontend and the backend. I also populated our public folder with many designs and icons that would later be used to style all the pages.  
	For my core/server-side development, I made several significant contributions. These included implementing user-generated items, adding the templates page with backend routes and controllers, creating object placement logic, and developing room schemas, routes, and controllers. For the user-generated items, I implemented a key backend feature that links item generation to a specific user ID, enabling personalized management. This feature later integrated seamlessly with other backend logic developed by the team, such as design schemas and controllers. For the templates page, I contributed to accurately displaying the object array, allowing users to visualize their design before saving their choices. In terms of placement logic, I enhanced the room design flow by enabling objects to be moved once dropped from the sidebar. This improvement not only boosted customization but also allowed the team to reallocate efforts toward other critical tasks that needed completion.
	In terms of UI/UX development, I was responsible for implementing numerous components and pages, including CallToAction, Checklist, DropDownMenu, FurnitureObjects, HandleNewFurniture, HeartButton, HeroSection, HomePageButton, HomePageMiddle, HomePageTop, LogInButton, LogInForm, Navbar, PlanExpSection, RegistrationForm, RoomObjects, SearchBar, SideBar, SignUpButton, SubmitButton, TemplateGrid, CreateDesignPage, HomePage, LogInPage, RegistrationPage, and TemplatePage. I also handled the styling, navigation, and structure for each page, ensuring that user experience was prioritized while improving the visual consistency and structure across the site. This work was crucial in allowing the team to display backend information, which played an important role in testing and debugging. 
	To protect against threats, my contributions were also in the form of security and data flow management. I added protected routes to ensure secure access control, improving the overall structure of the system’s security. Additionally, I implemented password hashing and complexity requirements to strengthen account protection, complementing the team’s effort in authentication and user management. Lastly, throughout the project, my contributions also included bug fixing and improvements, allowing teammates to pull from the most recent and reliable code for development. 
        </p>

        <h3>Reflection &amp; Challenges</h3>
        <p>
        At the start of the project, the technical challenges seemed manageable, but as development progressed, numerous obstacles came about that required creative solutions and persistent troubleshooting.
One significant challenge involved implementing object placement logic using HTML5. Initially, objects were incorrectly aligning to the top-left corner rather than being centered. This made the layout feel unintuitive and clunky. After reviewing documentation and experimenting with different approaches, I found that we could just translate images down and to the right by 50%  to the correct position. Another challenge with the object placement logic was that we couldn’t move the object after placing them down. To fix this we realized that there was no logic handling the object after it was on the gird. I later included a patch that fixed this bug and understood that documentation based on experience was extremely important, as other people might encounter a similar problem and will understand their errors I once made. 
Another challenge arose when working with backend controllers. Errors would often appear as generic res.status issues, providing little understanding into what was actually failing. To address this, I relied heavily on console.log() to trace how data was being sent and received, identifying points where information was being sent in an incorrect format leading to undefined data. This method helped me pinpoint logic errors and correct them efficiently while understanding that assigning correct res.status codes to the backend logic is very important when dealing with post and get methods. 
Styling the website using TailwindCSS also proved challenging, particularly when trying to align components and containers consistently. Learning Tailwind's class structure required practice, but by studying its documentation and analyzing websites like Uber, I gained a better understanding of efficient styling techniques. This improvement helped me implement flexible designs that adapted well to various screen sizes without elements breaking or floating out of place. Refere
Another hurdle was ensuring the site’s protected routes functioned properly. Initially, user sessions failed to persist, preventing authentication data from being stored securely. To solve this, I explored multiple solutions, including JWT and local session storage. By reviewing some online threads, testing different approaches, and watching videos about authentication, I found a method that securely stored user data while allowing authentication to persist across pages utilizing window.sessionStorage saves and adding parameters like usernames and booleans to the backend for security. 
Similarly to controllers, while passing queries and information between the backend and frontend, I faced issues where data wasn’t being correctly retrieved or sent. By placing console.log() statements and comparing the request/response structure with examples of proper API handling, I could debug and fix incomplete or inaccurate data flow issues that bugged the platform. 
These challenges provided valuable learning experiences. Each difficulty motivated me to explore new resources like documentation, refine my problem-solving strategies, and improve my understanding of both frontend and backend development work together to fix persistent errors. However, unlike technical expertise, these challenges also allowed me to reflect on personal character and taught me the value of patience, persistence, and out-of-the-box thinking when tackling problems like these. 

        </p>

        <h3>Improvements &amp; Future Changes</h3>
        <p>
        There are several improvements and features I would like to implement if our team had more time for the project. One feature I’d like to add is a review system with descriptions and a star rating, allowing users to leave feedback on other users' room designs, aiding future users in making better decisions by seeing what others have found helpful or problematic in specific layouts.
Another improvement I also want to do is redesign the layout of pages to improve navigation and visual clarity. For example, I would want to expand the homepage with more information about the platform’s features helping new users better understand the platform’s functionality and purpose.
For improved convenience, I’d like to implement OAuth 2.0 as an alternative sign-in method, enabling users to log in using services like Google. This would help improve the authentication process and make the platform more accessible to others who don’t want to create a login. Additionally, I would also like to improve the overall security of the program to prevent against security breaches through better session storage and more layered logic around the routes and protect personal information. 
The last feature I’d like to add is live collaboration between two users. This would allow roommates to edit room layouts together in real-time, improving coordination and making the design process more interactive. This can be done through ideas like Web3 or real-time updates through a database like Firebase, along with MongoDB.
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


