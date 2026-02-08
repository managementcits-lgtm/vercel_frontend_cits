import React from "react";
import "../css/About/AboutGlobal.css"; 
import { Helmet } from "react-helmet-async";

import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutVision from "../components/About/AboutVision";
import AboutValues from "../components/About/AboutValues";
import AboutTimeline from "../components/About/AboutTimeline";

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About us | Learn about CITS</title>
        <meta
          name="description"
          content="Learn about CITS, a trusted manpower manufacturing unit of Akhil Cloud Technologies Platform LLP, focused on workforce excellence."
        />
      </Helmet>

      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutValues />
      <AboutTimeline />
    </div>
  );
}

export default About;