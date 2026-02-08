import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Services/ServiceGrid.css";

function ServiceGrid() {
  // Modal open cheyadaniki state
  const [activeModal, setActiveModal] = useState(null);

  const servicesData = [
    {
      id: "cloud",
      icon: "bi-cloud",
      title: "Cloud Solutions",
      shortDesc: "Scalable cloud infrastructure and migration services.",
      fullText: "Secure, scalable, and cost-effective cloud services to modernize your infrastructure.",
      points: ["Cloud Migration", "AWS / Azure / GCP", "Hybrid Cloud", "Cloud Security"]
    },
    {
      id: "infra",
      icon: "bi-hdd-network",
      title: "IT Infrastructure",
      shortDesc: "Enterprise-grade infrastructure management and support.",
      fullText: "Reliable IT infrastructure services ensuring performance, scalability, and uptime.",
      points: ["Network Management", "Server Setup", "Virtualization", "Disaster Recovery"]
    },
    {
      id: "security",
      icon: "bi-shield-check",
      title: "Cybersecurity",
      shortDesc: "Comprehensive security solutions to protect your assets.",
      fullText: "Advanced security solutions to protect systems, networks, and data.",
      points: ["Threat Detection", "Firewall Management", "Vulnerability Assessment", "Compliance Security"]
    }
    // Nuvvu migilina 5 services ni kuda ide format lo ikkada add cheyochu...
  ];

  function handleOpen(item) {
    setActiveModal(item);
    document.body.style.overflow = "hidden"; // Background scroll stop
  }

  function handleClose() {
    setActiveModal(null);
    document.body.style.overflow = "auto"; // Background scroll resume
  }

  return (
    <section className="svc">
      <div className="wrap">
        <div className="head">
          <span className="tag">What We Offer</span>
          <h2>Enterprise Solutions</h2>
          <p>
            Explore our comprehensive range of technology manpower and workforce
            services designed to support modern software and cloud-driven organizations.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid">
          {servicesData.map(function(s) {
            return (
              <div key={s.id} className="card" onClick={function() { handleOpen(s); }} style={{ cursor: "pointer" }}>
                <div className="ico">
                  <i className={"bi " + s.icon}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
              </div>
            );
          })}
        </div>

        {/* --- MODAL (OVERLAP) --- */}
        {activeModal && (
          <div className="modal" style={{ display: "flex" }} onClick={handleClose}>
            <div className="modal-box" onClick={function(e) { e.stopPropagation(); }}>
              <button className="close" onClick={handleClose} style={{ border: "none", background: "none", cursor: "pointer" }}>
                &times;
              </button>
              
              <div className="m-head">
                <div className="ico big">
                  <i className={"bi " + activeModal.icon}></i>
                </div>
                <h3>{activeModal.title}</h3>
              </div>

              <p className="m-text">{activeModal.fullText}</p>
              
              <ul className="features">
                {activeModal.points.map(function(point, i) {
                  return <li key={i}>{point}</li>;
                })}
              </ul>

              <NavLink to="/contact" className="btn" onClick={handleClose}>
                Get a Quote
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServiceGrid;