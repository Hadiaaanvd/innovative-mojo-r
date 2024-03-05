import React from "react";
import screen1 from "../../assets/screen1.png";
import screen2 from "../../assets/screen2.png";
import screen3 from "../../assets/screen3.png";
import "./new-heights.styles.scss";
import { useNavigate } from "react-router-dom";
const NewHeights = (props) => {
  const navigate = useNavigate();
  return (
    <div className="new-heights-component">
      <div className="col-10 mx-auto new-heights">
        <div className="heights-images-container">
          <img src={screen1} alt="" />
          <img src={screen2} alt="" />
          <img src={screen3} alt="" />
        </div>
        <div className="content">
          <i className="fas fa-tablet-screen-button"></i>
          <h2>Take Your Business To New Heights</h2>
          <div className="subtext">
            Flutter is Google's UI toolkit for building beautiful, natively
            compiled applications for mobile, web, desktop, and embedded devices
            from a single codebase.
          </div>
          <button
            onClick={() => {
              navigate("/mobile-app-development-contact");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewHeights;
