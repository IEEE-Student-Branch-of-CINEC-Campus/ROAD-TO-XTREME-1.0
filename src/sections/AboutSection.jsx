import "./Sections.css";
import "../index.css";

const aboutItems = [
  {
    text: "Boost your logical thinking, problem-solving, and coding skills.",
  },
  {
    text: "Prepare for the 24-hour IEEEXtreme 19.0 coding challenge and compete globally.",
  },
  {
    text: "Level up through practical sessions, coding practice, and expert mentorship.",
  },
  {
    text: "Collaborate, innovate, and grow with fellow undergraduates.",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <div className="about-title-section">
            <p className="about-overview">OVERVIEW</p>
            <h1 className="about-main-title">
              About
              <br />
              <span className="about-highlight">Road to Xtreme</span>
            </h1>
          </div>
          {/* <div className="about-description">
            <p>
              Road to xtreme is an island-wide, inter-university coding hackathon 
              organized by Computer Society Chapter - IEEE Student Branch of CINEC campus
            </p>
          </div> */}
        </div>

        {/* Content Grid */}
        <div className="about-content-grid">
          {aboutItems.map((item, index) => (
            <div key={index} className="about-item">
              <div className="about-accent-bar"></div>
              <p className="about-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
