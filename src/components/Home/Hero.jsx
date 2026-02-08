import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedNumber from "../AnimatedNumbers.jsx";
import "../../css/Home/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="trusted">
          <span></span>
          Trusted since 3+ Years
        </div>
        <h1>
          Building Future-Ready
          <br />
          Digital Solutions
        </h1>
        <p>
          Building Future-Ready Digital Capabilities
          Empowering enterprises with future-ready technology talent, 
          cloud-skilled professionals, and deployment-ready workforce solutions
          that support digital transformation, 
          operational efficiency, and sustainable growth.
        </p>
        <div className="btns">
          <NavLink className="btn-primary" to="/services">
            Our Services
            <span className="arrow">➜</span>
          </NavLink>
          <NavLink to="/career" className="btn-outline">
            Explore Careers
          </NavLink>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <h2><AnimatedNumber end={500} />+</h2>
          <p> Clients Served</p>
        </div>
        <div className="stat">
          <h2><AnimatedNumber end={3} />+</h2>
          <p> Years Experience</p>
        </div>
        <div className="stat">
          <h2><AnimatedNumber end={98} />%</h2>
          <p> Client Satisfaction</p>
        </div>
        <div className="stat">
          <h2><AnimatedNumber end={50} />+</h2>
          <p> Tech Experts</p>
        </div>
      </div>
      <div className="scroll-down">
        <span>⌄</span>
      </div>
    </div>
  );
}

export default Hero;