import React, { useState, useEffect } from "react";
import "../css/carrer.css";
import { Helmet } from "react-helmet-async";
import { validateCareerForm } from "../utils/careerValidation";
import { createApplication, getJobs } from "../services/careerApi.js";

function Career() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /* 🔹 Fetch jobs from backend */
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (err) {
      console.error("Failed to load jobs");
    }
  };

  /* 🔹 Submit form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("job", selectedJob);

    const validationError = validateCareerForm(formData);
    if (validationError) {
      setError(validationError);
      setMessage("");
      return;
    }

    try {
      const res = await createApplication(formData);
      setMessage(res.message);
      setError("");
      setSelectedJob("");
      e.target.reset();
    } catch (err) {
      setError("Submission failed. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="careers-page">
      <Helmet>
        <title>Careers at CITS | Build Your Technology Career</title>
        <meta
          name="description"
          content="Explore career opportunities at CITS and grow with a trusted workforce and technology solutions partner."
        />
      </Helmet>

      {/* HERO */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p>
            Build your career with us. We're looking for passionate individuals who
            <br /> want to shape the future of technology.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <span className="benefits-tag">Why Join Us</span>
        <h2>Benefits & Perks</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-box"><i className="bi bi-rocket-takeoff"></i></div>
            <h3>Career Growth</h3>
            <p>Clear career paths with mentorship and learning opportunities.</p>
          </div>

          <div className="benefit-card">
            <div className="icon-box"><i className="bi bi-heart-pulse"></i></div>
            <h3>Health Benefits</h3>
            <p>Comprehensive health insurance for you and your family.</p>
          </div>

          <div className="benefit-card">
            <div className="icon-box"><i className="bi bi-people"></i></div>
            <h3>Great Culture</h3>
            <p>Collaborative environment with talented professionals.</p>
          </div>

          <div className="benefit-card">
            <div className="icon-box"><i className="bi bi-cup-hot"></i></div>
            <h3>Work-Life Balance</h3>
            <p>Flexible work arrangements and generous PTO.</p>
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section className="jobs-section" id="jobs">
        <span className="section-tag">Open Positions</span>
        <h2>Current Opportunities</h2>
        <p className="section-sub">
          Explore our open positions and find your perfect role.
        </p>

        <div className="jobs-list">
          {jobs.length === 0 && <p>No openings available.</p>}

          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span><i className="bi bi-building"></i> {job.department}</span>
                  <span><i className="bi bi-geo-alt"></i> {job.location}</span>
                  <span><i className="bi bi-clock"></i> {job.job_type}</span>
                </div>
              </div>

              <a
                href="#apply"
                className="apply-btn"
                onClick={() => setSelectedJob(job.id)}
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* APPLY FORM */}
      <section className="apply-section" id="apply">
        <span className="section-tag">Apply Now</span>
        <h2>Submit Your Application</h2>
        <p className="section-sub">
          Ready to join our team? Fill out the form below and upload your resume.
        </p>

        {message && <div className="form-success">{message}</div>}
        {error && <div className="form-error">{error}</div>}

        <form className="apply-form" onSubmit={handleSubmit}>
          {/* Job Dropdown */}
          <div className="form-group">
            <label>Apply For *</label>
            <select
              name="job"
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              required
            >
              <option value="">Select job position</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="form-group">
            <label>College / University *</label>
            <input
              type="text"
              name="college"
              placeholder="Enter your college or university name"
              required
            />
          </div>

          {/* CGPA + Year */}
          <div className="form-group half">
            <div>
              <label>CGPA *</label>
              <input
                type="text"
                name="cgpa"
                placeholder="e.g. 8.25"
                required
              />
            </div>

            <div>
              <label>Year of Passing *</label>
              <input
                type="number"
                name="year_of_passing"
                placeholder="e.g. 2024"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Experience (in years)</label>
            <input
              type="text"
              name="experience"
              placeholder="e.g. 0, 1, 2 (leave blank if fresher)"
            />
          </div>

          <div className="form-group">
            <label>Skills *</label>
            <input
              type="text"
              name="skills"
              placeholder="e.g. React, Python, AWS, Docker"
              required
            />
          </div>

          <div className="form-group">
            <label>Resume / CV *</label>
            <div className="resume-box">
              <input type="file" name="resume" accept=".pdf" required />
              <p>Upload your resume (PDF only)</p>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

export default Career;