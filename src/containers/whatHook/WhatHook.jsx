import React from "react";
import { Feature } from "../../components";
import "./WhatHook.css";

function WhatHook() {
  return (
    <div
      className="hook__whathook section__margin gradient__bg-whathook"
      id="whathook"
    >
      <div className="hook__whathook-feature">
        <Feature
          title="What is Hook ?"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="hook__whathook-heading">
        <h1 className="gradient__text-other">
          The possibilities are beyond your imagination
        </h1>
        <a href="#"><p>Explore The Library</p></a>
      </div>
      <div className="hook__whathook-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </div>
  );
}

export default WhatHook;
