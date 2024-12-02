import React from "react";
import StatBoxWithIcon from "../Statbox/StatBoxWithIcon"; // Import the new StatBox variant

const StatsWithIconsContainer = () => {
  return (
    <div className="bg-lime-500 py-10">
      <div className="flex justify-around max-w-6xl mx-auto">
        <StatBoxWithIcon
          icon="" // Replace with actual icon path
          title="Professional Trainer With More Experience"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi enim quam elementum fermentum."
        />
        <StatBoxWithIcon
          icon="" // Replace with actual icon path
          title="Quality And Comfortable Standard Gym"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi enim quam elementum fermentum."
        />
        <StatBoxWithIcon
          icon="" // Replace with actual icon path
          title="Room Available For VIP Members"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi enim quam elementum fermentum."
        />
      </div>
    </div>
  );
};

export default StatsWithIconsContainer;