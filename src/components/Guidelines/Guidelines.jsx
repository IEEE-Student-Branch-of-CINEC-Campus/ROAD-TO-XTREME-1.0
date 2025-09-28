import React from "react";
import { FaUserGraduate, FaUsers, FaMapMarkerAlt, FaRegEdit } from "react-icons/fa";
import "./Guidelinesc.css";

function Guidelines() {
  return (
    <section id = "guide" className="guidelines">
      <h2 className="guidelines-title">Road to Xtreme Guidelines</h2>
      <br/><br/>
      <div className="guidelines-grid">
        <div className="guideline-card">
          <FaUserGraduate className="guideline-icon" />
          <h3>Who can participate</h3>
          <br/>
          <p>Open to all university undergraduates across all Sri Lankan universities. No prior experience required.</p>
        </div>
        <div className="guideline-card">
          <FaUsers className="guideline-icon" />
          <h3>Team Size</h3>
          <br/>
          <p>Teams of maximum 3 members. You can compete individually or as a team of 2–3 members.</p>
        </div>
        <div className="guideline-card">
          <FaMapMarkerAlt className="guideline-icon" />
          <h3>Location</h3>
          <br/>
          <p>Fully online hackathon! All teams must register and compete through HackerRank.</p>
        </div>
        <div className="guideline-card">
          <FaRegEdit className="guideline-icon" />
          <h3>Registration</h3>
          <br/>
          <p>All teams must register before the closing date. Team name must match your HackerRank account handle.</p>
        </div>
      </div>
    </section>
  );
}

export default Guidelines; 
