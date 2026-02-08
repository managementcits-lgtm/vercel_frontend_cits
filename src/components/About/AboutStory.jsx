import React from "react";
import '../../css/About/AboutStory.css'
import AnimatedNumber from "../AnimatedNumbers.jsx";

function AboutStory() {
  return (
    <section className="story">
      <div className="st-l">
        <span className="tag">Our Story</span>
        <h2>Pioneering Digital <br /> Excellence Since 2023</h2>
        <p>
          CITS is a specialized manpower manufacturing and technology enablement unit of Akhil 
          Cloud Technologies Platform LLP, established to deliver skilled, 
          deployment-ready talent and software support services for modern digital enterprises.
        </p>
        <p>
          We are dedicated to building, nurturing, and supplying
          highly competent technology professionals who power innovation across cloud infrastructure,
          software development, and IT operations.
        </p>
        <p>
          At CITS, we bridge the gap between talent and technology by creating a reliable workforce ecosystem
          that supports the evolving needs of the software and cloud computing industry.
        </p>
      </div>

      <div className="st-r">
        <div className="box b1">
          <h3><AnimatedNumber end={3} />+</h3>
          <span>Years Experience</span>
        </div>
        <div className="box">
          <h3><AnimatedNumber end={500} />+</h3>
          <span>Clients Served</span>
        </div>
        <div className="box">
          <h3><AnimatedNumber end={50} />+</h3>
          <span>Tech Experts</span>
        </div>
        <div className="box b2">
          <h3><AnimatedNumber end={10} />+</h3>
          <span>Countries</span>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;