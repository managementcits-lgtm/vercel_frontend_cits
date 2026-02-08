import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../css/give.css";
import { fetchWorkshops, fetchGallery } from "../services/giveApi.js";
import AnimatedNumber from "../components/AnimatedNumbers.jsx";


function GiveBackPage() {
  /* ---------- STATE ---------- */
  const [workshops, setWorkshops] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [filter, setFilter] = useState("all");

  const [lightbox, setLightbox] = useState({
    open: false,
    img: "",
    title: "",
    desc: "",
  });

  /* ---------- FETCH DATA ---------- */
  useEffect(() => {
    fetchWorkshops()
      .then((data) =>
        setWorkshops(data.filter((i) => i.item_type === "workshop"))
      )
      .catch(console.error);

    fetchGallery()
      .then((data) =>
        setGallery(data.filter((i) => i.item_type === "gallery"))
      )
      .catch(console.error);
  }, []);

  /* ---------- FILTERED WORKSHOPS ---------- */
  const filteredWorkshops =
    filter === "all"
      ? workshops
      : workshops.filter((w) => w.status === filter);

  return (
    <div className="give-back">
      <Helmet>
        <title>Give Back | CITS Social Responsibility</title>
        <meta
          name="description"
          content="Learn how CITS contributes to community development and social responsibility initiatives."
        />
      </Helmet>

      {/* ================= COMMUNITY ================= */}
      <section className="community-section">
        <div className="badge">
          <span>♡</span> Community First
        </div>

        <h1 className="title">
          Giving Back to the <span>Community</span>
        </h1>

        <p className="subtitle">
          We believe in nurturing the next generation of tech leaders through
          education, mentorship, and hands-on opportunities.
        </p>

        <div className="stats">
          <div className="stat-card">
            <h2>
              <AnimatedNumber end={2500} />+
            </h2>
            <p>Students Impacted</p>
          </div>

          <div className="stat-card">
            <h2>
              <AnimatedNumber end={150} />+
            </h2>
            <p>Bootcamps</p>
          </div>

          <div className="stat-card">
            <h2>
              <AnimatedNumber end={25} />
            </h2>
            <p>Partner Institutions</p>
          </div>
        </div>

         <span class="circle c1"></span>
        <span class="circle c2"></span>
        <span class="circle c3"></span>
      </section>

      {/* ================= WORKSHOPS ================= */}
      <section className="workshops">
        <h2 className="ws-title">Bootcamps</h2>
        <p className="ws-subtitle">
          Hands-on learning experiences designed to build real-world skills.
        </p>

        <div className="ws-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={filter === "upcoming" ? "active" : ""}
            onClick={() => setFilter("upcoming")}
          >
            Upcoming
          </button>
        </div>

        <div className="ws-grid">
          {filteredWorkshops.length === 0 && (
            <p className="empty">No Bootcamps found</p>
          )}

          {filteredWorkshops.map((ws) => (
            <div key={ws.id} className="ws-card">
              <div className="ws-head">
                <h3>{ws.title}</h3>
                <span className={`badge ${ws.status?.toLowerCase()}`}>
                  {ws.status}
                </span>
              </div>

              <p className="ws-desc">{ws.description}</p>
              <p className="ws-date">{ws.date}</p>

              {ws.participants && (
                <div className="ws-foot">
                  <i className="bi bi-people"></i>{" "}
                  {ws.participants} Participants
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="gallery-section">
        <div className="gallery-badge">
          <i className="bi bi-camera"></i> Moments Captured
        </div>

        <h2 className="gallery-title">Photo Gallery</h2>
        <p className="gallery-subtitle">
          Glimpses from our community events and student programs.
        </p>

        <div className="gallery-grid">
          {gallery.length === 0 && (
            <p className="empty">No gallery images available</p>
          )}

          {gallery.map((img) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() =>
                setLightbox({
                  open: true,
                  img: img.image,
                  title: img.title,
                  desc: img.description,
                })
              }
            >
              <img
                src={img.image}
                alt={img.title}
                loading="lazy"
              />
              <div className="overlay">
                <h4>{img.title}</h4>
                <p>{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightbox.open && (
        <div
          className="lightbox"
          onClick={() => setLightbox({ ...lightbox, open: false })}
        >
          <span
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({ ...lightbox, open: false });
            }}
          >
            &times;
          </span>

          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="lightbox-content-box">
              <h3>{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="partner-cta">
        <div className="partner-content">
          <h2>Want to Partner With Us?</h2>
          <p>
            Join us in our mission to empower the next generation of tech
            leaders.
          </p>
          <a href="/contact" className="cta-btn">
            Get In Touch ➜
          </a>
        </div>
      </section>
    </div>
  );
}

export default GiveBackPage;
