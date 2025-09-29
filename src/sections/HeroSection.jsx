import { useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import logo from "../assets/logo.png";
import heroImage from "../assets/hero.png";
import { smoothScrollTo } from "../utils/smoothScroll";
import "./Sections.css";
import "../index.css";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".navbar-link");

    const handleNavClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      smoothScrollTo(targetId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    };

    links.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    // Cleanup
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src={logo}
              alt="IEEE Xtreme Logo"
              className="navbar-logo-img"
            />
          </div>

          <ul className="navbar-menu">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="#event" className="navbar-link">
                Timeline
              </a>
            </li>
            <li>
              <a href="#guide" className="navbar-link">
                Guide
              </a>
            </li>
          </ul>

          <div className="navbar-auth">
            <button
              className="register-btn"
              onClick={() =>
                (window.location.href = "https://forms.gle/xePL4VVHoFAdALtt7")
              }
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-menu-list">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="#event" className="navbar-link">
                Timeline
              </a>
            </li>
            <li>
              <a href="#guide" className="navbar-link">
                Guide
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="hero-content">
        <div className="hero-content-container">
          <Countdown />

          <h2 className="hero-title">
            <div className="hero-title-top">
              <span className="road-to">Road to</span>
            </div>
            <div className="hero-title-bottom">
              <span className="x-text">X</span>
              <span className="treme">treme</span>
            </div>
          </h2>

          <p className="hero-text">
            Road to Xtreme is a series of training sessions for IEEEXtreme 19.0,
            the 24-hour global coding hackathon. It helps students improve
            coding skills, practice problem-solving, and prepare to compete
            internationally.
          </p>

          {/* Mobile Register Button */}
          <button
            className="mobile-hero-register-btn"
            onClick={() =>
              (window.location.href = "https://forms.gle/xePL4VVHoFAdALtt7")
            }
          >
            Register Now
          </button>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
