import "../../src/sections/Sections.css";
import "../../src/index.css";

const aboutItems = [
  {
    text: "A 24-hours coding marathon designed to test your logical thinking, problem-solving, and coding skills."
  },
  {
    text: "Acts as a preparatory platform for the IEEExtreme 19.0 Global Hackathon, inspiring students to compete at the international grounds."
  },
  {
    text: "Fully Online Format – inclusive participation from universities across Sri Lanka."
  },
  {
    text: "Encourages teamwork, innovation, and collaboration among undergraduates."
  }
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
              About<br />
              <span className="about-highlight">Road to Xtreme</span>
            </h1>
          </div>
          <div className="about-description">
            <p>
              Road to xtreme is an island-wide, inter-university coding hackathon 
              organized by Computer Society Chapter - IEEE Student Branch of CINEC campus
            </p>
          </div>
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