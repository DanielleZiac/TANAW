"use client";

import React from "react";
import { getButtonStyles } from "../styles/buttonStyles";
type LeaderboardEntry = {
  rank: number;
  name: string;
  score: number;
  image: string;
};

// Example leaderboard data with schools and scores
const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Batangas State University TNEU", score: 855, image: "/images/institution/bsulogo.png" },
  { rank: 2, name: "Ateneo de Manila University", score: 415, image: "/images/institution/admulogo.png" },
  { rank: 3, name: "De La Salle University", score: 325, image: "/images/institution/dlsulogo.png" },
  { rank: 4, name: "University of Santo Tomas", score: 224, image: "/images/institution/ustlogo.png" },
  { rank: 5, name: "Far Eastern University", score: 103, image: "/images/institution/feulogo.png" },
];

interface DataProps {
  data: Array<{
    campus: string,
    count: number,
    institution: string,
    institution_id: string,
    institution_logo: string,
  }> | undefined
}

const Leaderboard: React.FC<DataProps> = ({data}) => {

  console.log(data)

  return (
    <div className="min-h-screen mt-10 flex flex-col items-center bg-transparent py-6 px-4">
      {/* Header */}
      <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        COLLEGE LEADERBOARD
      </h1>

      {/* Top 3 Section */}
      <div className="flex justify-center  gap-4 mb-8 w-full max-w-4xl">
        {data ? data.slice(0, 3).map((entry, index) => (
          <div
            key={index}
            className={`${getButtonStyles(false).className} flex flex-col items-center   bg-white shadow-lg rounded-lg p-4 relative flex-shrink-0 w-28 sm:w-32`}
        style={getButtonStyles(false).style}
          >
            <img
              src={entry.institution_logo}
              alt={`${entry.institution} logo`}
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-4 border-cBlue mb-2"
            />
            <span className="text-sm sm:text-lg font-semibold text-gray-700 text-center">
              {entry.institution} - {entry.campus}
            </span>
            <span className="text-sm sm:text-lg font-semibold text-cBlue text-center">
              {entry.count}
            </span>
            {index === 0 && (
              <span className="absolute top-[-20px] sm:top-[-25px] text-2xl sm:text-3xl">👑</span>
            )}
          </div>
        )) : null}
      </div>
      <hr className="w-full max-w-4xl border-t-2 border-gray-300" />
      {/* Leaderboard Table */}
      <div className="bg-transparent  rounded-lg w-screen max-w-md sm:max-w-2xl p-4 overflow-x-auto">
        <h2 className="text-lg sm:text-hadow-mdxl font-semibold text-gray-800 mb-4 text-center">
          R A N K I N G S
        </h2>
        <ul className="space-y-2">
          {data ? data.map((entry, index) => (
            <li
              key={index}
              className={`flex items-center p-3 rounded-lg ${
                index < 1 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-50`}
            >
              <span className="text-sm sm:text-lg font-semibold text-gray-600 w-8 sm:w-10 text-center">
                {index + 1}
              </span>
              <img
                src={entry.institution_logo}
                alt={`${entry.institution} logo`}
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full ml-2"
              />
              <span className="ml-4 text-sm sm:text-base text-gray-700">{entry.institution} - {entry.campus}</span>
              <span className="ml-auto text-cBlue font-bold text-sm sm:text-base">
                {entry.count}
              </span>
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;