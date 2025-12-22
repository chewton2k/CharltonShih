import { useState } from "react";
import "./UCLAClubhousePage.css";

const UCLAClubhousePage = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section className="uclaclubhouse-section">
      <div className="uclaclubhouse-header">
        <h2 className="uclaclubhouse-title">ucla clubhouse.</h2>
        <p className="uclaclubhouse-subtitle">central directory for student organizations</p>
      </div>

      <div className="uclaclubhouse-description">
        <p>
          Connecting students with hundreds of clubs and organizations on campus.
        </p>

        <h3>overview.</h3>
        <p>
          [Placeholder] The Clubhouse is the central hub for discovering student life at UCLA. 
          Browse categories, find recruitment info, and connect with leadership.
        </p>

        <h3>features.</h3>
        <p>
          [Placeholder] Advanced filtering, event calendars, direct messaging, and club verification system.
        </p>
        
        <h3>stack.</h3>
        <p>
          [Placeholder] MERN Stack (MongoDB, Express, React, Node).
        </p>
      </div>

      <div className="uclaclubhouse-gallery">
         {/* Placeholders */}
         <div style={{height: '200px', background: '#f0f0f0', borderRadius: '8px'}}></div>
         <div style={{height: '200px', background: '#f0f0f0', borderRadius: '8px'}}></div>
         <div style={{height: '200px', background: '#f0f0f0', borderRadius: '8px'}}></div>
      </div>

      {lightboxSrc && (
        <div className="uclaclubhouse-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="uclaclubhouse-lightbox-inner">
            <img src={lightboxSrc} alt="UCLA Club House enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default UCLAClubhousePage;
