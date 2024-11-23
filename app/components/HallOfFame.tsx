"use client";

import React from "react";

const HallOfFame: React.FC = () => {
  const hallOfFameEntries = [
    { name: "John Doe", achievement: "Top Performer" },
    { name: "Jane Smith", achievement: "Best Innovator" },
    { name: "Alex Brown", achievement: "Lifetime Contribution" },
  ];

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold mb-6">Hall of Fame</h1>
      <div className="w-full max-w-2xl space-y-4">
        {hallOfFameEntries.map((entry, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-gray-800 text-white relative"
          >
            <h2 className="text-xl font-semibold">{entry.name}</h2>
            <p className="text-sm mt-1">{entry.achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;