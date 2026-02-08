import React from "react";
import '../../css/About/AboutValues.css'

function AboutValues() {
  return (
    <section className="cv">
      <div className="cv-head">
        <span className="tag">Core Values</span>
        <h2>What Drives Us</h2>
        <p>
          At CITS, we are driven by the conviction that people power technology. 
          Our purpose is to manufacture talent that is not only technically proficient but also disciplined, 
          adaptable, and enterprise-ready.
        </p>
      </div>

      <div className="cv-row">
        {[
          { icon: "bi-award", title: "Excellence", desc: "We strive for excellence in everything we do." },
          { icon: "bi-people", title: "Collaboration", desc: "We believe in the power of teamwork." },
          { icon: "bi-heart", title: "Integrity", desc: "We conduct our business with honesty." },
          { icon: "bi-globe", title: "Innovation", desc: "We continuously explore new technologies." }
        ].map((val, index) => (
          <div className="cv-card" key={index}>
            <div className="cv-icon">
              <i className={`bi ${val.icon}`}></i>
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutValues;