import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC<{ durationInSeconds: number }> = ({
  durationInSeconds,
}) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center">
      <span className="text-4xl font-bold">
        {minutes < 10 ? `0${minutes}` : minutes}
      </span>
      <span className="text-4xl mx-2">:</span>
      <span className="text-4xl font-bold">
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default CountdownTimer;
