import { NavLink } from "react-router-dom";
import cits_logo_final from "../assets/cits_logo_final.png";
import '../css/Header.css';
function Header() {
  return (
    <div className="par">
    <header className="header">
      <div className="container">
        <div className="logo">
             <img src={cits_logo_final} alt="CITS Logo" className="c-name"/>
        </div>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <div className="dropdown">
            <span className="dropdown-title">Pipeline ▾</span>

            <div className="dropdown-menu">
              <NavLink to="/pipeline">Pipeline</NavLink>
              <NavLink to="/cpus">CPUs</NavLink>
              <NavLink to="/hackathon">Hackathon</NavLink>
            </div>
          </div>
          <NavLink to="/mous">Mous</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/give">Give Back</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact</NavLink>
         

      
          
          
        </div>
        </div>
      </header>
      </div>
  );
}

export default Header;
