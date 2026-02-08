import { useEffect, useState } from "react";
import "../css/pipeline.css";
import { Helmet } from "react-helmet-async";
import { getProjects } from "../services/pipelineApi.js";
import HillGraph from "../components/HillGraph.jsx"; // Using HillGraph here

function Pipeline() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);

  // Categorize projects
  const projectCategories = {
    active: projects.filter(p => p.status === "active"),
    upcoming: projects.filter(p => p.status === "upcoming"),
    completed: projects.filter(p => p.status === "completed"),
  };

  // Render a project card
  const renderCard = (p) => (
    <div key={p.id} className={`project-card ${p.status}-card`}>
      <div className="card-top">
        <h3>{p.title}</h3>
        <span className={`badge ${p.status}`}>
          {p.status.toUpperCase()}
        </span>
      </div>

      <p className="client">{p.client}</p>
      <p className="desc">{p.description}</p>

      {/* ✅ HillGraph for active projects */}
      {p.status === "active" && <HillGraph progress={p.progress} />}

      <p className="date">
        <i className="bi bi-calendar"></i>
        {p.start_date} → {p.end_date}
      </p>
    </div>
  );

  return (
    <div className="pipeline-page">
      <Helmet>
        <title>Talent Pipeline | CITS Workforce Readiness</title>
        <meta
          name="description"
          content="CITS maintains a strong talent pipeline delivering deployment-ready professionals for industry needs."
        />
      </Helmet>


      {/* Header */}
      <section className="pipeline-header">
        <h1>Project Pipeline</h1>
        <p>
          Track our ongoing initiatives and upcoming projects delivering innovative
          <br /> solutions across industries.
        </p>
      </section>

      {/* Sections */}
      {Object.entries(projectCategories).map(([status, list]) => (
        <section key={status} className={`pipeline-section ${status}-section`}>
          <h2 className="section-title">
            {status.charAt(0).toUpperCase() + status.slice(1)} Projects
          </h2>
          <div className="project-grid">
            {list.map(renderCard)}
          </div>
        </section>
      ))}

    </div>
  );
}

export default Pipeline;
