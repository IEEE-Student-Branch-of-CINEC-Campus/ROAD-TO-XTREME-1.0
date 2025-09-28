import React from "react";
import {
  FaUserGraduate,
  FaUsers,
  FaMapMarkerAlt,
  FaRegEdit,
} from "react-icons/fa";
import "./Guidelinesc.css";

function Guidelines() {
  return (
    <section id="guide" className="guidelines">
      <h2 className="guidelines-title">Road to Xtreme Guidelines</h2>
      <br />
      <br />
      <div className="guidelines-grid">
        <div className="guideline-card">
          <FaUserGraduate className="guideline-icon" />
          <h3>Who can participate</h3>
          <br />
          <p>
            This preparation event is open to all university undergraduates
            across Sri Lanka.
          </p>
        </div>
        <div className="guideline-card">
          <FaUsers className="guideline-icon" />
          <h3>Team Size</h3>
          <br />
          <p>
            You can participate solo or form a team of 2–3 members for
            IEEEXtreme.
          </p>
        </div>
        <div className="guideline-card">
          <FaMapMarkerAlt className="guideline-icon" />
          <h3>Location</h3>
          <br />
          <p>
            Join our online preparation event, open to all! The main IEEEXtreme
            19.0 challenge will be hosted on campus.
          </p>
        </div>
        <div className="guideline-card">
          <FaRegEdit className="guideline-icon" />
          <h3>Registration</h3>
          <br />
          <p>
            All teams must register before the closing date. Make sure your team
            name matches your HackerRank account handle!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;
// Deploy
