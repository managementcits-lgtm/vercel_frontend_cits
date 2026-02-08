import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceHero from "../components/Services/ServiceHero.jsx";
import ServiceGrid from "../components/Services/ServiceGrid.jsx";
import Advantage from "../components/Services/Advantage.jsx";
import "../css/Services/ServicesGlobal.css";

const Services = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Services | CITS Workforce & Manpower Solutions</title>
        <meta
          name="description"
          content="CITS provides end-to-end workforce and manpower solutions for software and cloud-driven organizations."
        />
      </Helmet>
      
      <ServiceHero />
      <ServiceGrid />
      <Advantage />
    </div>
  );
};

export default Services;