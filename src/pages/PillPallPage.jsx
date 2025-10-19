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


