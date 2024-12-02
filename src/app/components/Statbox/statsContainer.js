import React from "react";
import StatBox from "../Statbox/statBox";

const StatsContainer = () => {
  return (
    <div className="bg-lime-500 py-10">
      <div className="flex justify-around max-w-6xl mx-auto">
        <StatBox title="Experience" value="12+" />
        <StatBox title="Program Class" value="10+" />
        <StatBox title="Members" value="24k+" />
        <StatBox title="Trainers" value="183+" />
      </div>
    </div>
  );
};

export default StatsContainer;
