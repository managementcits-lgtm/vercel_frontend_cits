import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Home/Hero.jsx";
import Features from "../components/Home/Fearures.jsx";
import About from "../components/Home/About.jsx";
import CTA from "../components/Home/CTA.jsx";
import "../css/Home/HomeGlobal.css";

function Home() {
  return (
    <div className="home-main-wrapper">
      <Helmet>
        <title>Akhil Cloud Technology Platform LLP</title>
        <meta
          name="description"
          content="CITS is a trusted technology partner delivering deployment-ready manpower and workforce solutions for software and cloud-driven organizations."
        />
      </Helmet>

      <Hero />
      <Features />
      <About />
      <CTA />
    </div>
  );
}

export default Home;