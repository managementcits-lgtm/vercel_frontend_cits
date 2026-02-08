import { NavLink } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <>
      <footer className="ft">
        <div className="col-brand">
          <div className="logo">
            <span className="lg">CITS</span>
            <p>(a unit of)</p>
            <br />
            <h2>Akhil <span>Cloud Technology platform LLP</span></h2>
          </div>

          <p className="txt">
            Building future-ready digital solutions for enterprises worldwide.
            Empowering businesses through innovative technology.
          </p>

          <div className="soc">
            <NavLink to="/linkedin"><i className="bi bi-linkedin"></i></NavLink>
            <NavLink to="/twitter"><i className="bi bi-twitter-x"></i></NavLink>
            <NavLink to="/facebook"><i className="bi bi-facebook"></i></NavLink>
          </div>
        </div>

        <div className="col">
          <h4>Company</h4>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="col">
          <h4>Solutions</h4>
          <NavLink to="/services">Cloud Solutions</NavLink>
          <NavLink to="/services">IT Consulting</NavLink>
          <NavLink to="/services">Digital Transformation</NavLink>
          <NavLink to="/services">Enterprise Software</NavLink>
        </div>

        <div className="col">
          <h4>Contact</h4>
          <p><i className="bi bi-geo-alt"></i> Hyderabad, Telangana</p>
          <p><i className="bi bi-telephone"></i> +91-4079692270</p>
          <p><i className="bi bi-envelope"></i> hr.team@cloudtechnologies.org.in</p>
          <p><i className="bi bi-envelope"></i> management@cits.org.in</p>
          <p><i className="bi bi-envelope"></i> management@cloudtechnologies.org.in</p>
        </div>
      </footer>

      <hr className="ft-hr" />

      <div className="copyright">
        © {new Date().getFullYear()} Akhil Cloud Technology Platform LLP.
        All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
