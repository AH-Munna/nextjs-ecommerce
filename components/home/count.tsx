"use client";
import React, { useState, useEffect } from "react";

// should be from database
const SaleEnd = Date.now() + 20880000;

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(SaleEnd - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = SaleEnd - Date.now();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center space-x-1 font-bold">
      <p className="text-lg bg-primary text-primary-foreground px-2 py-1.5 rounded-md">
        {hours < 10 ? `0${hours}` : hours}
      </p>
      <span className="text-lg text-primary">:</span>
      <p className="text-lg bg-primary text-primary-foreground px-2 py-1.5 rounded-md">
        {minutes < 10 ? `0${minutes}` : minutes}
      </p>
      <span className="text-lg text-primary">:</span>
      <p className="text-lg bg-primary text-primary-foreground px-2 py-1.5 rounded-md">
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};

export default CountDown;
