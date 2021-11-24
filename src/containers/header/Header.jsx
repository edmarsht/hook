import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import fish from "../../assets/fish.svg";
import { BiAnchor } from "react-icons/bi";


function Header() {
  return (
    <div className="hook__header section__padding" id="home">
      <div className="hook__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of. <BiAnchor />
        </p>
        <div className="hook__header-content__input">
          <input type="email" placeholder="your Email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="hook__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="hook__header-image">
          <img src={fish} alt="ai" />
        </div>
    </div>
  );
}

export default Header;
