"use client";

import React from "react";


interface DataProps {
  data: [
    user_id: string, 
    data: Array<{
      count: number;
      first_name: string;
      institution_id: string;
      institutions: {
        campus: string;
        institution: string;
      };
      last_name: string;
      user_id: string;
    }> | undefined
  ];
}

const HallOfFame: React.FC<DataProps> = ({data}) => {
  console.log(data);
  const user_id = data[0];
  const candidates = data[1];

  const hallOfFameEntries = [
    { name: "John Doe", achievement: "Top Performer" },
    { name: "Jane Smith", achievement: "Best Innovator" },
    { name: "Alex Brown", achievement: "Lifetime Contribution" },
  ];

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold mb-6">Hall of Fame</h1>
      <div className="w-full max-w-2xl space-y-4">
        {candidates ? candidates.map((entry, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-gray-800 text-white relative"
          >
            <h2 className="text-xl font-semibold">{entry.first_name} {entry.last_name}</h2>
            <p className="text-sm mt-1">{entry.count}</p>
            <p className="text-sm mt-1">{entry.institutions.institution} - {entry.institutions.campus}</p>
          </div>
        )) : null}
      </div>
    </div>
  );
};

export default HallOfFame;