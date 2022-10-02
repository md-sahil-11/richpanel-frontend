import React, { useState } from "react";
import "./styles.css";
function PlanSelection() {
  const [check, setCheck] = useState(false);
  return (
    <div className="container">
      <div className="top">
        <h1>Plans & Pricing</h1>
        <div className="toggle-btn">
          <span style={{ margin: "0.8rem" }}>Annually</span>
          <label className="switch">
            <input
              type="checkbox"
              id="checbox"
              onClick={() => setCheck(!check)}
            />
            <span className="slider round"></span>
          </label>
          <span style={{ margin: "0.8rem" }}>Monthly</span>
        </div>
      </div>

      <div className="package-container">
        <div className="packages">
          <h1>Basic</h1>
          {check ? (
            <h2 className="text1"> $9.99</h2>
          ) : (
            <h2 className="text2">$119.99</h2>
          )}
          <ul className="list">
            <li className="first">2000 Subscribers</li>
            <li>12,000 Emails/month</li>
            <li>Multi-User Accounts</li>
            <li>Email Support</li>
          </ul>
          <a href="#" className="button button1">
            Start Now
          </a>
        </div>
        <div className="packages">
          <h1>Professional</h1>
          {check ? (
            <h2 className="text1">$19.99</h2>
          ) : (
            <h2 className="text2">$239.99</h2>
          )}
          <ul className="list">
            <li className="first">Basic +</li>
            <li>Landing Pages</li>
            <li>Pop-up Forms</li>
            <li>Premium Support</li>
          </ul>
          <a href="#" className="button button2">
            Start Now
          </a>
        </div>
        <div className="packages">
          <h1>Master</h1>
          {check ? (
            <h2 className="text1">$29.99</h2>
          ) : (
            <h2 className="text2">$359.99</h2>
          )}
          <ul className="list">
            <li className="first">Professional +</li>
            <li>Marketing Automation</li>
            <li>Instagram Ads</li>
            <li>Facebook Ads</li>
          </ul>
          <a href="#" className="button button3">
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlanSelection;
