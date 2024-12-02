import React from "react";

const StatBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center text-black">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="font-bold text-4xl">{value}</p>
    </div>
  );
};

export default StatBox;
