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
            <img src={google} alt="google" />
            <img src={slack} alt="slack" />
            <img src={atlassian} alt="atlassian" />
            <img src={dropbox} alt="dropbox" />
            <img src={shopify} alt="shopify" />
        </div>
    )
}

export default Brand
