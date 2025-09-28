import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EventsSection from "./sections/EventsSection";
import GuidelineSection from "./components/Guidelines/Guidelines";
import FooterSection from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <GuidelineSection/>
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
