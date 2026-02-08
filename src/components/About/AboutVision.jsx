import React from "react";
import '../../css/About/AboutVision.css'


function AboutVision() {
  return (
    <section className="vm">
      <div className="vm-row">
        <div className="card">
          <div className="icon i1">
            <i className="bi bi-eye"></i>
          </div>
          <h3>Our Vision</h3>
          <p>
            To become a trusted manpower manufacturing unit in the software and cloud ecosystem, recognized
            for quality, reliability, and workforce excellence.
          </p>
        </div>

        <div className="card">
          <div className="icon i2">
            <i className="bi bi-bullseye"></i>
          </div>
          <h3>Our Mission</h3>
          <p>
            To create and supply skilled technology manpower that enables software and cloud-driven
            organizations to scale efficiently and operate with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutVision;