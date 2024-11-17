"use client";

import { useRouter, redirect } from "next/navigation";
import { React, useEffect, useRef, useState  } from "react";

// add parameters
const LeaderboardsSdgs: React.FC = (data) => {
  const sdg = data.data[0]
  const schools = data.data[1]
  // console.log("schools", schools)
  // console.log("sdg", sdg)


  return (
    <div className="flex flex-col items-center min-h-screen px-24 py-16">
      <h1>Leaderboards Sdgs {sdg}</h1>
      {schools.map((school, index) => (
        <p key={index}>{index + 1} {school.school} {school.count}</p>
      ))}
    </div>
  );
};

export default LeaderboardsSdgs;