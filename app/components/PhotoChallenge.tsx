// page.tsx
"use client";

import React from "react";
import PhotoChallengeComponent from "../photochallenge/page";

const PhotoChallenge: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <PhotoChallengeComponent />
    </div>
  );
};

export default PhotoChallenge;
