"use client";

import React from "react";
import Link from "next/link"; // Assuming you're using Next.js for routing
import FloatingDropdown from '../components/layouts/FloatingDropDown';

interface Candidate {
  caption: string;
  created_date: string;
  sdg_number: string;
  total_count: number;
  url: string;
  user_id: string;
  user_sdg_id: string;
}

interface DataProps {
  data: [
    user_id: string,
    data: Candidate[] | undefined
  ];
}

const HallOfFame: React.FC<DataProps> = ({ data }) => {
  console.log(data);
  const user_id = data[0];
  const candidates = data[1];

  // Sort candidates by `total_count` in descending order and pick the top 3
  const topCandidates = candidates
    ? [...candidates].sort((a, b) => b.total_count - a.total_count).slice(0, 3)
    : [];

  return (
    <section className="mt-16 px-4 lg:ml-64">
      <FloatingDropdown />
      <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl sm:text-[100px] ml-20 mt-5 lg:ml-64 lg:mt-20 font-semibold text-center sm:text-left">
      HALL OF FAME
      </h2>
      </div>
      <hr className="border-black mb-4 lg:mt-10 lg:ml-36 mx-auto sm:mx-0 w-4/4 sm:w-4/5" />

      {/* Candidates Container */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-5">
        {topCandidates.length > 0 ? (
          topCandidates.map((entry, index) => (
            <div
              key={entry.user_sdg_id} // Use a unique key if available
              className="bg-gradient-to-r from-gray-800 to-black rounded-lg shadow-lg w-[300px] sm:w-[370px] sm:mt-20 sm:ml-4 h-auto relative p-4 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              {/* Post Image */}
              <div className="flex justify-center mb-3">
                <div className="w-full max-w-2xl overflow-hidden rounded-lg shadow-md">
                  <img
                    src={entry.url}
                    alt={`Post ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  {index === 0 && (
                    <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 sm:top-[-25px] text-3xl">
                      👑
                    </span>
                  )}
                </div>
              </div>

              {/* Post Description */}
              <div className="flex justify-center items-center w-full px-3 py-2 bg-white rounded-full shadow-inner mb-2 overflow-hidden text-ellipsis">
                <p className="text-sm sm:text-lg text-black font-semibold text-center whitespace-nowrap">
                  {entry.caption}
                </p>
              </div>

              {/* Likes and Date */}
              <div className="flex justify-between items-center px-3 py-2 w-full">
                <div className="flex items-center space-x-2">
                  {/* Heart Icon */}
                  <svg
                    className="w-5 h-5 text-white cursor-pointer"
                    fill={entry.isLiked ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                  <span className="font-bold text-xs sm:text-sm text-white">
                    {entry.total_count}
                  </span>
                </div>
                <span className="font-bold text-xs sm:text-sm text-white">
                  {entry.created_date}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No candidates available.</p> // Fallback UI
        )}
      </div>
    </section>
  );
};

export default HallOfFame;