"use client";

import React from "react";
import { SDG_TITLES } from "../data/sdgTitles"; // Make sure to adjust the import path if needed

const Explore = () => {
  return (
    <div className="fixed flex flex-col min-h-screen w-[100%] bg-cGray text-white">
      {/* Top Background Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('images/explorebg.png')", // Ensure explorebg.png is in your public folder
        }}
      >
        {/* Optionally add content or title here */}
      </div>

      {/* United Nations Section */}
      <div className="px-4 py-6">
        <h2 className="text-2xl text-black font-semibold mb-4">UNITED NATIONS</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Example containers */}
          <div className="h-32 bg-transparent rounded-lg overflow-hidden">
            <img
              src="/images/un1.png" // Replace with actual image paths
              alt="United Nations 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-32 bg-transparent rounded-lg overflow-hidden">
            <img
              src="/images/un2.png" // Replace with actual image paths
              alt="United Nations 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scrollable Goals Section */}
      <h2 className="text-2xl text-black font-semibold mb-4 ml-4">THE 17 GOALS</h2>
      <div className="flex-1 px-4 py-1 overflow-y-auto max-h-[200px]">
  <div className="space-y-4">
    {/* Map through SDG_TITLES and create each SDG goal */}
    {SDG_TITLES.map((title, index) => (
      <div
        key={index}
        className="h-20 rounded-lg flex items-center px-4 text-white bg-gray-800 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/images/SDGlink${index + 1}.jpg')`, // Dynamic background image
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        
        <h3 className="text-lg font-medium bg-transparent p-2 rounded relative z-10">
          SDG {index + 1} | {title}
        </h3>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Explore;
