import React from "react";
import '../../css/About/AboutTimeline.css'


function AboutTimeline() {
  const milestones = [
    { year: "20", title: "Company Founded", desc: "Started with a vision.", side: "left" },
    { year: "2012", title: "First Major Client", desc: "Secured partnership.", side: "right" },
    { year: "2015", title: "Cloud Expansion", desc: "Launched cloud services.", side: "left" },
    { year: "2018", title: "Global Reach", desc: "Expanded to 10+ countries.", side: "right" },
    { year: "2021", title: "500+ Clients", desc: "Milestone achievement.", side: "left" },
    { year: "2024", title: "AI Integration", desc: "Pioneering AI solutions.", side: "right" }
  ];

  return (
    <section className="tl">
      <div className="tl-head">
        <span className="tag">Our Journey</span>
        <h2 className="he">Milestones</h2>
      </div>
      <div className="tl-wrap">
        {milestones.map((item, index) => (
          <div className={`tl-item ${item.side}`} key={index}>
            <div className="card">
              <span className="yr">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTimeline;