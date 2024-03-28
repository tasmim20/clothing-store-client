"use client";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface Props {}

const CountdownTimerComponent: React.FC<Props> = () => {
  // Calculate end time (5 days from now)
  const endTime = Date.now() + 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

  const calculateTimeLeft = () => {
    const difference = endTime - Date.now();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  return (
    <div>
      <div className="flex justify-end items-end my-5">
        <CountdownCircleTimer
          isPlaying
          duration={endTime - Date.now()}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          strokeWidth={6}
          onComplete={() => console.log("Countdown completed")}
        >
          {({ remainingTime }) => {
            const timeLeft = calculateTimeLeft();
            return (
              <div style={{ color: "#ff487a" }} className="font-bold">
                <div>{timeLeft.days} days</div>
                <div>{timeLeft.hours} hours</div>
                <div>{timeLeft.minutes} minutes</div>
                <div>{timeLeft.seconds} seconds</div>
              </div>
            );
          }}
        </CountdownCircleTimer>
      </div>
      <h1 className="text-red-600 font-bold text-xl flex justify-end items-end">
        Days Left
      </h1>
    </div>
  );
};

export default CountdownTimerComponent;
