import React from 'react'
import "./Brand.css";
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import atlassian from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"

function Brand() {
    return (
        <div className="hook__brand">
        Over 80,000 paying customers trust SendGrid to send more than 90 billion emails every month.
        <div className="hook__brand-images">
            <img src={google} alt="google" />
            <img src={slack} alt="slack" />
            <img src={atlassian} alt="atlassian" />
            <img src={dropbox} alt="dropbox" />
            <img src={shopify} alt="shopify" />
        </div>
        </div>
    )
}

export default Brand
