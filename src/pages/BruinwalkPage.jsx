import { useState } from "react";
import "./BruinwalkPage.css";

const BruinwalkPage = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section className="bruinwalk-section">
      <div className="bruinwalk-header">
        <h2 className="bruinwalk-title">bruinwalk.</h2>
        <p className="bruinwalk-subtitle">reviews, grade distributions, and professor ratings</p>
      </div>

      <div className="bruinwalk-description">
        <p>
          Helping UCLA students make informed decisions about their classes and professors.
        </p>

        <h3>overview.</h3>
        <p>
          [Placeholder] Bruinwalk is a platform that allows UCLA students to review professors and courses.
          It provides grade distributions, detailed reviews, and ratings to help students plan their academic quarter.
        </p>

        <h3>features.</h3>
        <p>
          [Placeholder] Search functionality, interactive grade charts, detailed review submission system, and user profiles.
        </p>
        
        <h3>stack.</h3>
        <p>
          [Placeholder] Python, Django, PostgreSQL, React, etc.
        </p>
      </div>

      <div className="bruinwalk-gallery">
        {/* Placeholders - user can replace paths later */}
         <div style={{height: '200px', background: '#f0f0f0', borderRadius: '8px'}}></div>
         <div style={{height: '200px', background: '#f0f0f0', borderRadius: '8px'}}></div>
         <div style={{height: '200px', background: '#f0f0f0', borderRadius: '8px'}}></div>
      </div>

      {lightboxSrc && (
        <div className="bruinwalk-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="bruinwalk-lightbox-inner">
            <img src={lightboxSrc} alt="Bruinwalk enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default BruinwalkPage;
