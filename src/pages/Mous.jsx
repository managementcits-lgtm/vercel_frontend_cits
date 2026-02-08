import React, { useState, useEffect } from "react"; // useState add chesa
import "../css/mous.css";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { getMousApi } from "../services/mousApi.js";
import { runMouScript } from "../js/mousScript.js";
import AnimatedNumber from "../components/AnimatedNumbers.jsx";

function Mous() {
  useEffect(() => {
    getMousApi()
      .then(data => {
        runMouScript(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="mous-page">
      <Helmet>
        <title>MOU | CITS Partnerships & Collaborations</title>
        <meta
          name="description"
          content="Explore CITS partnerships and memorandums of understanding with technology and industry leaders."
        />
      </Helmet>

      <section className="hero">
        <span className="hero-badge">
          <span className="badge-icon"><i className="bi bi-people-fill"></i></span>
          Strategic Alliances
        </span>

        <h1>Memorandums of Understanding</h1>
        <p>
          Our strategic partnerships and collaborations that drive innovation and
          deliver exceptional value to our clients.
        </p>

        <div className="hero-stats">
          <div>
            <strong><AnimatedNumber end={6} /></strong>
            <span>Active Partnerships</span>
          </div>
          <div>
            <strong><AnimatedNumber end={15} />+</strong>
            <span>Countries</span>
          </div>
          <div>
            <strong><AnimatedNumber end={10} />+</strong>
            <span>Years of Collaboration</span>
          </div>
        </div>
      </section>

      <section className="partnerships">
        <div className="top-bar">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input type="text" id="searchInput" placeholder="Search partnerships..." />
          </div>

          <div className="filters">
            <button className="filter-btn active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="cloud">Cloud</button>
            <button className="filter-btn" data-filter="education">Education</button>
            <button className="filter-btn" data-filter="security">Security</button>
            <button className="filter-btn" data-filter="innovation">Innovation</button>
          </div>

          <p className="result-count" id="resultCount">
            Showing 0 of 0 partnerships
          </p>

          <hr className="tophr" />
        </div>

        <div className="cards" id="cards"></div>
      </section>

      <div className="modal-overlay" id="mouModal" onClick={(e) => { if(e.target.id === "mouModal") window.closeModal(); }}>
        <div className="modal">
          <button className="close-btn" onClick={() => window.closeModal()}>
            &times;
          </button>

          <div className="modal-header">
            <div className="modal-icon">
              <i id="modalIcon" className="bi"></i>
            </div>
            <span className="modal-tag" id="modalTag"></span>
          </div>

          <h2 id="modalTitle"></h2>

          <p className="modal-date">
            <i className="bi bi-calendar"></i>
            Partnership since <span id="modalDate"></span>
          </p>

          <hr />

          <h4>About This Partnership</h4>
          <p id="modalDesc"></p>

          <h4>Key Highlights</h4>
          <ul id="modalList"></ul>

          <hr />

          <div className="modal-actions">
              <a id="viewPdf" target="_blank" rel="noreferrer" className="btn blue">
                <i className="bi bi-eye"></i> View PDF
              </a>

              <NavLink to="/contact" className="btn blue">
                <i className="bi bi-arrow-right"></i> View More
              </NavLink>
          </div>
        </div>
      </div>

      <section className="partnership-cta">
        <div className="cta-icon">
          <i className="bi bi-people-fill"></i>
        </div>

        <h2>Interested in Partnership?</h2>

        <p>
          We're always looking for strategic partners who share our vision for
          innovation and excellence.
        </p>

        <div className="cta-buttons">
          <NavLink to="/contact" className="cta-btn primary">
            Contact Us <i className="bi bi-arrow-right"></i>
          </NavLink>
          <NavLink to="/about" className="cta-btn secondary">
            Learn About Us
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Mous;