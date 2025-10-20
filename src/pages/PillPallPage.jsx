import { useState } from "react";
import "./PillPallPage.css";

const PillPallPage = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section className="pillpall-section">
      <div className="pillpall-header">
        <h2 className="pillpall-title">pillpal.</h2>
        <p className="pillpall-subtitle">screens, flows, and recent updates</p>
      </div>

      <div className="pillpall-description">
        <p>
          PillPal is a web app focused on simplifying medication tracking and
          reminders with a friendly, accessible experience.
        </p>

        <h3>motivation.</h3>
        <p>
        Managing daily medications can be confusing, especially for people who take multiple 
        prescriptions or care for loved ones. Missed doses and timing errors are common, yet avoidable 
        with the right tools. PillPall was created to make medication management intuitive, reliable, and personalized.
        </p>
        <h3>what it does.</h3>
        <p>
        PillPall helps users organize and track their medications through a clean, user-friendly interface. It sends timely reminders, 
        logs dosage history, and can provide insights into adherence patterns. Designed with accessibility and ease of use in mind, it 
        aims to reduce human error and improve medication consistency, especially for seniors and patients with complex regimens.
        </p>
        <h3> technical overview.</h3>
        <p> Built using Typescript, React.js, MongoDB, Express, Arduino, and Websockets, PillPall integrates with a secure backend for data storage and 
        leverages local notifications for timely alerts. The focus is on seamless UI/UX design, efficient data handling, and scalable architecture.</p>
      </div>

      <div className="pillpall-gallery">
        <img src="/CharltonShih/pillpall.png" alt="PillPal screen 1" onClick={() => openLightbox("/CharltonShih/pillpall.png")} />
        <img src="/CharltonShih/pillpall2.png" alt="PillPal screen 2" onClick={() => openLightbox("/CharltonShih/pillpall2.png")} />
        <img src="/CharltonShih/pillpall3.png" alt="PillPal screen 3" onClick={() => openLightbox("/CharltonShih/pillpall3.png")} />
        <img src="/CharltonShih/pillpall4.png" alt="PillPal screen 4" onClick={() => openLightbox("/CharltonShih/pillpall4.png")} />
        <img src="/CharltonShih/pillpall5.png" alt="PillPal screen 5" onClick={() => openLightbox("/CharltonShih/pillpall5.png")} />
      </div>

      {lightboxSrc && (
        <div className="pillpall-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="pillpall-lightbox-inner">
            <img src={lightboxSrc} alt="PillPall enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PillPallPage;


