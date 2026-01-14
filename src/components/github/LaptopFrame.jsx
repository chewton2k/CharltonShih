import React from "react";
import "./LaptopFrame.css";

/**
 * LaptopFrame - A realistic MacBook-style laptop screen container
 * Frames the GitHub repository UI for an immersive experience
 */
const LaptopFrame = ({ children }) => {
  return (
    <div className="laptop-frame">
      <div className="laptop-frame__screen">
        <div className="laptop-frame__bezel">
          <div className="laptop-frame__camera" />
          <div className="laptop-frame__display">{children}</div>
        </div>
      </div>
      <div className="laptop-frame__bottom">
        <div className="laptop-frame__notch" />
      </div>
      <div className="laptop-frame__base">
        <div className="laptop-frame__touchpad" />
      </div>
    </div>
  );
};

export default LaptopFrame;
