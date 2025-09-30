// Scroll-triggered animations for timeline elements
// Updated: Fixed element scope issue - v1.1
export const initTimelineScrollAnimations = () => {
  const timelineLine = document.querySelector(".timeline-line");
  const timelineDots = document.querySelectorAll(".timeline-dot");
  const timelineCards = document.querySelectorAll(".timeline-card");

  if (
    !timelineLine ||
    timelineDots.length === 0 ||
    timelineCards.length === 0
  ) {
    return;
  }

  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -20% 0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    try {
      entries.forEach((entry) => {
        const element = entry.target;

        // Defensive check to ensure element exists
        if (!element) {
          console.warn("Scroll animation: element is null or undefined");
          return;
        }

        if (entry.isIntersecting) {
          // Animate timeline line
          if (element.classList.contains("timeline-container")) {
            setTimeout(() => {
              if (timelineLine) {
                timelineLine.classList.add("animate");
              }
            }, 200);
          }

          // Animate timeline dots
          if (element.classList.contains("timeline-dot")) {
            setTimeout(() => {
              element.classList.add("animate");
            }, 400);
          }

          // Auto-hover timeline cards
          if (element.classList.contains("timeline-card")) {
            setTimeout(() => {
              element.classList.add("auto-hovered");
            }, 600);
          }
        } else {
          // Reset animations when out of view
          if (element.classList.contains("timeline-dot")) {
            element.classList.remove("animate");
          }
          if (element.classList.contains("timeline-card")) {
            element.classList.remove("auto-hovered");
          }
        }
      });
    } catch (error) {
      console.error("Scroll animation error:", error);
    }
  }, observerOptions);

  // Observe timeline container for line animation
  const timelineContainer = document.querySelector(".timeline-container");
  if (timelineContainer) {
    observer.observe(timelineContainer);
  }

  // Observe each timeline dot
  timelineDots.forEach((dot, index) => {
    observer.observe(dot);
  });

  // Observe each timeline card
  timelineCards.forEach((card, index) => {
    observer.observe(card);
  });

  // Cleanup function
  return () => {
    observer.disconnect();
  };
};

// Enhanced scroll-based progress animation
export const initTimelineProgress = () => {
  const timelineLine = document.querySelector(".timeline-line");
  const timelineCards = document.querySelectorAll(".timeline-card");

  if (!timelineLine || timelineCards.length === 0) {
    return;
  }

  const updateTimelineProgress = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate scroll progress
    const scrollProgress = Math.min(
      scrollTop / (documentHeight - windowHeight),
      1
    );

    // Update timeline line height based on scroll progress
    const timelineSection = document.querySelector(".event-section");
    if (timelineSection) {
      const sectionTop = timelineSection.offsetTop;
      const sectionHeight = timelineSection.offsetHeight;
      const sectionProgress = Math.max(
        0,
        Math.min(1, (scrollTop - sectionTop + windowHeight) / sectionHeight)
      );

      timelineLine.style.height = `${sectionProgress * 100}%`;

      // Add animate class when progress starts
      if (sectionProgress > 0.1) {
        timelineLine.classList.add("animate");
      }
    }
  };

  // Throttled scroll handler
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateTimelineProgress();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Initial call
  updateTimelineProgress();

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
