import React from "react";

const StatBoxWithIcon = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center text-black px-6">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-800 text-sm mt-2">{description}</p>
    </div>
  );
};

export default StatBoxWithIcon;
