import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { sendCpuInquiry } from "../services/cpuInquiryApi";
import "../css/cpus.css";

const Cpus = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cpuModelRef = useRef();
  const quantityRef = useRef();
  const ramRef = useRef();
  const storageRef = useRef();
  const messageRef = useRef();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      full_name: fullNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      cpu_model: cpuModelRef.current.value,
      quantity: quantityRef.current.value,
      ram: ramRef.current.value,
      storage: storageRef.current.value,
      message: messageRef.current.value,
    };

    try {
      await sendCpuInquiry(formData);

      // ✅ SUCCESS
      setSuccessMsg("Inquiry submitted successfully. Our team will contact you soon.");
      setErrorMsg("");

      // ✅ CLEAR INPUTS
      fullNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      cpuModelRef.current.value = "";
      quantityRef.current.value = "";
      ramRef.current.value = "";
      storageRef.current.value = "";
      messageRef.current.value = "";

      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (error) {
      console.error(error.response?.data);
      setErrorMsg("Submission failed. Please try again.");
      setSuccessMsg("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
        <title>CPUs | Technical Resources at CITS</title>
        <meta
          name="description"
          content="Discover CITS technical resources and skilled professionals supporting software and cloud-based projects."
        />
    </Helmet>

      {/* HERO */}
      <section className="sos-hero">
        <span className="sos-hero-badge">
          <span className="sos-badge-icon">
            <i className="bi bi-cpu"></i>
          </span>
          <span className="sos-spancir">Strategic Alliances</span>
        </span>

        <h1>
          <span className="sos-white-text">Next-Gen</span>{" "}
          <span className="sos-blue-text">Processors</span>
        </h1>

        <p>
          Our strategic partnerships and collaborations that drive innovation
          and deliver exceptional value.
        </p>

        <div className="sos-btns">
          <NavLink to="/services" className="sos-btn-primary">
            Our Services <i className="bi bi-arrow-right"></i>
          </NavLink>
          <NavLink to="/career" className="sos-btn-outline">
            Explore Careers
          </NavLink>
        </div>
      </section>

      {/* FORM */}
      <section className="sos-pipeline">
        <div className="sos-form-wrapper">
          <h1>Our CPU Pipeline</h1>
          <p className="sos-subtitle">Submit your custom requirements below.</p>

          {successMsg && (
            <div className="sos-success-msg">
              <i className="bi bi-check-circle-fill"></i>
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="sos-error-msg">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="sos-custom-form">
            <div className="sos-form-grid">
              <div className="sos-input-group">
                <label>Full Name</label>
                <input type="text" ref={fullNameRef}  placeholder="Enter your full name" required />
              </div>

              <div className="sos-input-group">
                <label>Admin Email</label>
                <input type="email" ref={emailRef}  placeholder="Enter admin email address" required />
              </div>

              <div className="sos-input-group">
                <label>Phone Number</label>
                <input type="text" ref={phoneRef} placeholder="Enter contact phone number" required />
              </div>

              <div className="sos-input-group">
                <label>CPU Model</label>
                <input type="text" ref={cpuModelRef} placeholder="e.g. Intel Xeon, AMD EPYC" required />
              </div>

              <div className="sos-input-group">
                <label>Quantity</label>
                <input type="number" ref={quantityRef} min="1" placeholder="e.g. 10" required />
              </div>

              <div className="sos-input-group">
                <label>RAM</label>
                <input type="text" ref={ramRef}  placeholder="e.g. 64GB DDR5" required />
              </div>

              <div className="sos-input-group">
                <label>Storage</label>
                <input type="text" ref={storageRef} placeholder="e.g. 2TB NVMe SSD" required />
              </div>

              <div className="sos-input-group sos-full-width">
                <label>Use Case Details</label>
                <textarea ref={messageRef} rows="4" placeholder="Describe workload, performance needs, deployment environment, etc."></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="sos-btn-primary sos-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  Submitting <i className="bi bi-arrow-repeat"></i>
                </>
              ) : (
                <>
                  Submit Configuration <i className="bi bi-arrow-right"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="sos-cta-section">
        <h2>Interested in Our CPUs?</h2>
        <p>Contact our team to learn more about partnership opportunities.</p>
        <NavLink to="/contact" className="sos-cta-btn">
          Contact Sales <i className="bi bi-arrow-right"></i>
        </NavLink>
      </section>
    </>
  );
};

export default Cpus;
