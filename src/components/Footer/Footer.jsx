import React from "react";
import "./Footerc.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";
import cinecLogo from "../../assets/CINEC IEEE SB B&W logo.png";
import { smoothScrollTo } from "../../utils/smoothScroll";

const Footer = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-logos">
          <img src={logo} alt="IEEE Xtreme Logo" className="footer-logo" />
          <img
            src={cinecLogo}
            alt="CINEC IEEE Student Branch Logo"
            className="footer-logo cinec-logo"
          />
        </div>

        <ul className="footer-nav">
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#event" onClick={(e) => handleNavClick(e, "event")}>
              Timeline
            </a>
          </li>
          <li>
            <a href="#guide" onClick={(e) => handleNavClick(e, "guide")}>
              Guide
            </a>
          </li>
          {/* <li>
            <a href="#guide" onClick={(e) => handleNavClick(e, "guide")}>
              Rules
            </a>
          </li> */}
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          <b>© Road To Xtreme 1.0 </b>
          <br />
          IEEE Student Branch of CINEC Campus
        </p>

        <div className="social-icons">
          <a href="https://www.facebook.com/share/17GotuLJqa/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/cinecieee?igsh=MXNrMWdrYmgzbXp1dg==">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/ieee-cinec-student-branch/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
