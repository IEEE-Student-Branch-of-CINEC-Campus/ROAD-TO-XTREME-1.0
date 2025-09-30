// Unified smooth scroll utility
let isScrolling = false;

export const smoothScrollTo = (targetId, offset = 80) => {
  // Prevent multiple scroll animations
  if (isScrolling) return;

  const target = document.getElementById(targetId);
  if (!target) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  isScrolling = true;

  // Calculate target position with proper offset for fixed navbar
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // Ensure minimum duration for smooth animation
  const duration = Math.max(Math.min(Math.abs(distance) * 0.5, 1000), 300);
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
      // Ensure we're exactly at the target position
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animation);
};

// Clean up function to reset scroll state
export const resetScrollState = () => {
  isScrolling = false;
};
