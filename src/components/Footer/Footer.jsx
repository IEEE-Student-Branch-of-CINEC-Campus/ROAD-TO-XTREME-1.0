import React from "react";
import "./Footerc.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/CINEC IEEE SB B&W logo.png";

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <img src={logo} alt="Xtreme Logo" className="footer-logo" />
        <img src={logo2} alt="Student branch Logo" className="footer-logo" />
        <ul className="footer-nav">
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#event" onClick={(e) => scrollToSection(e, "event")}>
              Timeline
            </a>
          </li>
          <li>
            <a href="#guide" onClick={(e) => scrollToSection(e, "guide")}>
              Guide
            </a>
          </li>
          {/* <li>
            <a href="#guide" onClick={(e) => scrollToSection(e, "guide")}>
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
