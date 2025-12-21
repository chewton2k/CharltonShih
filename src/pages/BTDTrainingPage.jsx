import { useState } from "react";
import "./BTDTrainingPage.css";

const BTDTrainingPage = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section className="btd-section">
      <div className="btd-header">
        <h2 className="btd-title">btd training camp.</h2>
        <p className="btd-subtitle">3D FPS physics-based aim trainer built with Three.js</p>
      </div>

      <div className="btd-description">
        <p>
          A First-Person Shooter (FPS) aim trainer inspired by the classic Balloon Tower Defense game. 
          Built entirely with <strong>Three.js</strong> and <strong>Vanilla JavaScript</strong>, the goal is simple: 
          train your aim by shooting balloons that follow complex parabolic trajectories before they escape.
        </p>

        <h3>gameplay loop.</h3>
        <p>
          Balloons spawn in procedural waves with increasing difficulty. Players use FPS controls (WASD + Mouse) to navigate and aim, 
          shooting projectiles that obey kinematic physics to pop moving targets. You lose lives when balloons escape—survive as long as possible!
        </p>
        <h3>core features.</h3>
        <p>
          The game features a full FPS control system with wall collision, a custom physics engine for realistic projectile arcs, 
          and shadow mapping for depth. There are 9 types of balloons (Red to Lead), each with unique speed, health, and child spawning logic.
        </p>
        <h3> technical overview.</h3>
        <p> Built on a modular "Entity-Component" style architecture in pure JavaScript. It utilizes Three.js for WebGL rendering with custom Toon/Phong shaders, 
        a RequestAnimationFrame game loop with delta time for smooth physics, procedural wave generation, and OBJ/MTL asset loading.</p>
      </div>

      <div className="btd-gallery">
        <img src="/CharltonShih/btd.png" alt="BTD Gameplay 1" onClick={() => openLightbox("/CharltonShih/btd.png")} />
        <img src="/CharltonShih/btd2.png" alt="BTD Gameplay 2" onClick={() => openLightbox("/CharltonShih/btd2.png")} />
        <img src="/CharltonShih/btd3.png" alt="BTD Gameplay 3" onClick={() => openLightbox("/CharltonShih/btd3.png")} />
        <img src="/CharltonShih/btd4.png" alt="BTD Gameplay 4" onClick={() => openLightbox("/CharltonShih/btd4.png")} />
      </div>

      {lightboxSrc && (
        <div className="btd-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="btd-lightbox-inner">
            <img src={lightboxSrc} alt="BTD enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default BTDTrainingPage;
