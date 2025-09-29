// Unified smooth scroll utility
let isScrolling = false;

export const smoothScrollTo = (targetId, offset = 80) => {
  // Prevent multiple scroll animations
  if (isScrolling) return;

  const target = document.getElementById(targetId);
  if (!target) return;

  isScrolling = true;

  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = Math.min(Math.abs(distance) * 0.5, 1000); // Dynamic duration based on distance
  let startTime = null;

  // Optimized easing function
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const run = startPosition + distance * easedProgress;

    window.scrollTo(0, run);

    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      isScrolling = false;
    }
  };

  requestAnimationFrame(animation);
};

// Clean up function to reset scroll state
export const resetScrollState = () => {
  isScrolling = false;
};
