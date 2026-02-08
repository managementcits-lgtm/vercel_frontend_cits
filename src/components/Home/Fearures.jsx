import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Home/Features.css";

function Features() {
  return (
    
    <section className="herotwo">
      <div className="offer-wrap">
        <div className="offer-pill">What We Offer</div>
        <h1 className="offer-title">Enterprise-Grade Solutions</h1>
        <p className="offer-sub">
          Discover our comprehensive range of IT services and solutions <br />
          designed to accelerate your digital journey.
        </p>
      </div>
      <div className="twobox">
        <div className="twobox1">
          <NavLink to="/services">
            <div className="icon-box">
              <i className="bi bi-pc-display-horizontal"></i>
            </div>
            <h3>IT Services</h3>
            <p>Comprehensive IT infrastructure management and support.</p>
          </NavLink>
        </div>
        <div className="twobox2">
          <NavLink to="/services">
            <div className="icon-box">
              <i className="bi bi-cloud"></i>
            </div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud architecture and migration services.</p>
          </NavLink>
        </div>
        <div className="twobox3">
          <NavLink to="/services">
            <div className="icon-box">
              <i className="bi bi-lightbulb"></i>
            </div>
            <h3>Digital Transformation</h3>
            <p>End-to-end strategies to modernize businesses.</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Features;