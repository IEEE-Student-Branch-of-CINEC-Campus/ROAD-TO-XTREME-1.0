import "./Background.css";
import backgroundImage from "../assets/background.jpg";

const Background = () => {
  return (
    <div className="background-container">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;
