// import { useState, useEffect } from "react";
// import "./Countdown.css";

// const Countdown = () => {
//   const TARGET_DATE = "2026-01-01T00:00:00";

//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const now = new Date();
//       const target = new Date(TARGET_DATE);
//       const difference = target - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     const timer = setInterval(calculateTimeLeft, 1000);
//     calculateTimeLeft();

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="countdown-section">
//       <div className="countdown">
//         <p className="countdown-label">Counting: </p>
//         <p className="countdown-value">{timeLeft.days} Days</p> :
//         <p className="countdown-value">{timeLeft.hours} Hours</p> :
//         <p className="countdown-value">{timeLeft.minutes} Minutes</p> :
//         <p className="countdown-value">{timeLeft.seconds} Seconds</p>
//       </div>
//     </section>
//   );
// };

// export default Countdown;

import { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const TARGET_DATE = new Date("2025-10-25T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup interval on unmount
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown">
        <p className="countdown-label">Counting: </p>
        <p className="countdown-value">{timeLeft.days} Days</p> :
        <p className="countdown-value">{timeLeft.hours} Hours</p> :
        <p className="countdown-value">{timeLeft.minutes} Minutes</p> :
        <p className="countdown-value">{timeLeft.seconds} Seconds</p>
      </div>
    </section>
  );
};

export default Countdown;
