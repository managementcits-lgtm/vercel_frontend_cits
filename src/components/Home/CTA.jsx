import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Home/CTA.css";

function CTA() {
  return (
    <section className="cta">
      <h1>Ready to Transform Your Business?</h1>
      <p>
        Let's discuss how our expertise can help you achieve your technology
        goals and drive innovation in your organization.
      </p>
      <div className="cta-btns">
        <NavLink className="btn-pri" to="/contact">
          Get in Touch <span>➜</span>
        </NavLink>
        <NavLink className="btn-out" to="/services">
          Explore Services
        </NavLink>
      </div>
    </section>
  );
}

export default CTA;