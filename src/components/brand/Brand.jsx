import React from "react";
import "./Brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

function Brand() {
  return (
    <div className="hook__brand">
      <div className="hook__brand-header">
        <div className="hook__brand-header__line-left">━━━━━━</div>
        <div className="hook__brand-header__text gradient__text-othero">
          Over 80,000 paying customers trust SendGrid to send more than 90
          billion emails every month
        </div>
        <div className="hook__brand-header__line-right">━━━━━━</div>
      </div>
      <div className="hook__brand-images">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brand;
