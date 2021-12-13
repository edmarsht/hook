import React from "react";
import "./Possibility.css";
import fished from "../../assets/fished.svg";

function Possibility() {
  return (
    <div className="hook__possibility section__margin" id="possibility">
      <div className="hook__possibility-image">
        <img src={fished} alt="fished" />
      </div>
      <div className="hook__possibility-content">
        <h4><strong>Request Early Access to Get Started</strong></h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <a href="#"><h4>Request Early Access to Get Started</h4></a>
      </div>
    </div>
  );
}

export default Possibility;
