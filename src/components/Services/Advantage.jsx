import React from "react";
import "../../css/Services/Advantage.css";

const Advantage = () => {
  return (
    <section className="advantage">
      <div className="adv-wrap">
        <span className="adv-tag">Why Choose Us</span>
        <h2 className="adv-title">The Akhil Cloud Technology Platform LLP Advantage</h2>
        <p className="adv-sub">
          CITS provides structured manpower manufacturing and technology workforce services backed by 
          the governance, standards, and industry expertise.
        </p>

        <div className="adv-grid">
          <div className="adv-card">
            <div className="adv-num">1</div>
            <h3>Cloud-First Expertise</h3>
            <p>Deep expertise in cloud architecture and migration.</p>
          </div>
          <div className="adv-card">
            <div className="adv-num">2</div>
            <h3>Proven Delivery Model</h3>
            <p>Structured processes ensuring high-quality project delivery.</p>
          </div>
          <div className="adv-card">
            <div className="adv-num">3</div>
            <h3>24/7 Technical Support</h3>
            <p>Always-on monitoring and expert support for your systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;