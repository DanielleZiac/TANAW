"use client";

import { useRouter, redirect } from "next/navigation";
import React, { useEffect, useRef, useState  } from "react";

interface DataProps {
  data: [
    sdg: string, 
    schools: any
    // schools: [
    //   {school: string, sdg_number: number, count: number}
    // ]
  ];
}

// add parameters
const LeaderboardsSdgs: React.FC<DataProps> = ({data}) => {
  console.log(data);
  const sdg = data[0]
  const schools = data[1]
  console.log("schools", schools)
  console.log("sdg", sdg)


  return (
    <div className="flex flex-col items-center min-h-screen px-24 py-16">
      <h1>Leaderboards Sdgs {sdg}</h1>
      {schools.map((school: {school: string, count: number}, index: number) => (
        <p key={index}>{index + 1} {school.school} {school.count}</p>
      ))}
    </div>
  );
};

export default LeaderboardsSdgs;