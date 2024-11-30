"use client";

import React from "react";


interface DataProps {
  data: [
    user_id: string, 
    data: Array<{
      caption: String,
      created_date: String,
      sdg_number: String,
      total_count: number,
      url: String,
      user_id: String,
      user_sdg_id: String
    }> | undefined
  ];
}

const HallOfFame: React.FC<DataProps> = ({data}) => {
  console.log(data);
  const user_id = data[0];
  const candidates = data[1];

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold mb-6">Hall of Fame</h1>
      <div className="w-full max-w-2xl space-y-4">
        {candidates ? candidates.map((entry, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-gray-800 text-white relative"
          >
            <img src={entry.url} />
            <p className="text-sm mt-1">{entry.total_count}</p>
            <p className="text-sm mt-1">{entry.caption}</p>
          </div>
        )) : null}
      </div>
    </div>
  );
};

export default HallOfFame;