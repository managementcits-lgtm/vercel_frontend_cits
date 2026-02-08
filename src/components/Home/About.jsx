import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Home/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-card">
          <div className="logo-circle">CITS</div>
          <h2>
            Akhils Cloud Technology platform LLP
          </h2>
          <p>Innovating Since 2023</p>
        </div>
      </div>
      <div className="about-right">
        <span className="pill">About Us</span>
        <h1>
          Your Trusted
          <br />
          Technology Partner
        </h1>
        <p className="desc">
          CITS serves as a trusted technology partner by delivering skilled, 
          deployment-ready manpower and workforce solutions for software and 
          cloud-driven organizations. As a dedicated manpower manufacturing 
          unit of Akhil Cloud Technologies Platform LLP.
        </p>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i>3+ years of expertise</li>
          <li><i className="bi bi-check-circle-fill"></i>ISO certified</li>
          <li><i className="bi bi-check-circle-fill"></i>24/7 support</li>
          <li><i className="bi bi-check-circle-fill"></i>Agile delivery</li>
        </ul>
        <NavLink className="about-btn" to="/about">
          Learn More About Us <span>➜</span>
        </NavLink>
      </div>
    </section>
  );
}

export default About;