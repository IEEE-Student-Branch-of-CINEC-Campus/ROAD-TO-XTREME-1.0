import { motion } from "framer-motion";
import { useEffect } from "react";
import "./EventSection.css";
import {
  initTimelineScrollAnimations,
  initTimelineProgress,
} from "../utils/scrollAnimations";

const timelineEvents = [
  {
    main: "Registration Opening",
    date: "September 30",
    description:
      "Participants can sign up and form their teams as registration opens for all eligible students ready to embark on this exciting coding journey.",
  },
  {
    main: "Competitive Programming & Importance of DSA",
    date: "4th October 2025 - 7:00 PM",
    description:
      "Explore the world of competitive programming, understand the importance of DSA, and see how algorithmic problem-solving impacts the real world.",
  },
  {
    main: "AI Task Machine Learning in Algorithm Improvement and Problem-Solving",
    date: "6th October 2025 - 7:00 PM",
    description:
      "Submit your AI task with a well-prepared prompt and learn best practices for crafting effective AI solutions.",
  },
  {
    main: "Training Weeks: Trial Coding Sessions",
    date: "11 – 18 October 2025",
    description:
      "Hands-on coding sessions simulating competition conditions to help participants experience the contest environment, tackle different problem levels, and assess readiness for the actual IEEEXtreme challenge.",
  },
  {
    main: "IEEEXtreme Awareness Session",
    date: "18th October 2025 - 7:00 PM",
    description:
      "An engaging session to raise awareness about key concepts, tools, and techniques to prepare participants for upcoming challenges.",
  },
  {
    main: "IEEE Xtreme Global Hackathon – Campus Hosting",
    date: " 25th October 2025",

    venue: "CINEC Campus – Zenith Lecture Hall",
    description:
      "Hosting the IEEE Xtreme Global Hackathon on campus. Participants will compete in this 24-hour global coding challenge, experiencing real contest conditions and showcasing their problem-solving skills.",
  },
];

const EventSection = () => {
  useEffect(() => {
    // Initialize scroll-triggered animations
    const cleanupTimelineAnimations = initTimelineScrollAnimations();
    const cleanupTimelineProgress = initTimelineProgress();

    // Cleanup on unmount
    return () => {
      if (cleanupTimelineAnimations) cleanupTimelineAnimations();
      if (cleanupTimelineProgress) cleanupTimelineProgress();
    };
  }, []);

  return (
    <section id="event" className="event-section">
      <div className="event-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="event-title"
        >
          Event Timeline
        </motion.h2>

        <motion.p
          className="event-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our latest workshops, announcements, success
          stories, events, achievements, and insights from the IEEE Xtreme
          community.
        </motion.p>

        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div
                className={`timeline-card ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <p className="event-main">{event.main}</p>
                <h3 className="event-date">{event.date}</h3>
                <p className="event-desc">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
