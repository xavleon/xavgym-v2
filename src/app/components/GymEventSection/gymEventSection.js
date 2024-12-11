"use client";

import React, { useEffect, useState } from "react";

const GymEventSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const eventDate = new Date("2024-12-31T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-lime-500 text-3xl md:text-4xl font-bold">
          Let's Join GYM Event Now
        </h2>
        <div className="text-lime-500 text-4xl md:text-6xl font-extrabold mt-6">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s
        </div>
        <button className="mt-8 bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-6 rounded-md">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default GymEventSection;
