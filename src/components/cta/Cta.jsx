import React from "react";
import "./Cta.css";

function Cta() {
  return (
    <div className="hook__cta section__margin gradient__bg-cta">
      <div className="hook__cta-container">
        <div className="hook__cta-container-title">
          <p>Request Early Access to Get Started</p>
          <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <div>
          <button className="hook__cta-container-button"> Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
