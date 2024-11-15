"use client";

import React, { useState } from "react";
import PhotoChallengeComponent from "./PhotoChallengeComponent";

const PhotoChallenge: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomChange = (event: React.WheelEvent) => {
    setZoomLevel((prevZoom) => Math.min(Math.max(0.5, prevZoom + event.deltaY * -0.001), 2));
  };

  return (
    <div
      onWheel={handleZoomChange}
      className="relative w-full h-screen bg-gray-100 overflow-hidden"
      style={{
        overflow: "hidden", // Prevent scroll on the whole page
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-16 bg-gray-200 flex items-center px-4 z-10">
        <span className="font-bold text-xl">Tanaw Logo</span>
        <nav className="ml-auto flex space-x-4">
          <a href="#" className="text-gray-600">Events</a>
          <a href="#" className="text-gray-600">About</a>
          <a href="#" className="text-gray-600">Contact</a>
        </nav>
      </header>

      {/* Main content container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          top: "4rem", // Adjust for header height
          bottom: "4rem", // Adjust for footer
          left: 0,
          right: 0,
          overflow: "hidden", // Disable scrollbars here as well
        }}
      >
        {/* Render PhotoChallengeComponent with zoomLevel */}
        <PhotoChallengeComponent zoomLevel={zoomLevel} />
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-white py-4 flex justify-center z-10">
        <input
          type="text"
          placeholder="Choose a photo challenge"
          className="border px-4 py-2 rounded-full w-2/3 max-w-lg"
        />
      </footer>
    </div>
  );
};

export default PhotoChallenge;
