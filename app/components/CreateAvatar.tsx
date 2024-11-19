// src/components/CreateAvatar.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getButtonStyles } from "../styles/buttonStyles"; // Importing getButtonStyles
import AvatarBox from "../styles/avatarBox"; // Import the reusable AvatarBox

const CreateAvatar: React.FC = () => {
  const router = useRouter();
  const [gender, setGender] = useState("boy");
  const [shirtStyle, setShirtStyle] = useState("round-neck");
  const [eyewear, setEyewear] = useState("none");
  const [college, setCollege] = useState("cics");

  const handleConfirmAvatar = () => {
    router.push("createavatar/createavatar2");
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-8">
      {/* Avatar Display Area */}
      <AvatarBox title="Your Avatar Preview" />

      <div className="space-y-2 w-full">
        {/* Gender Options */}
        <div>
          <p className="text-gray-800 text-lg font-bold">Gender</p>
          <div className="flex space-x-4">
            <button
              className={`${getButtonStyles(gender === "boy").className} py-2 px-6 text-lg`}
              style={getButtonStyles(gender === "boy").style}
              onClick={() => setGender("boy")}
            >
              Boy
            </button>
            <button
              className={`${getButtonStyles(gender === "girl").className} text-lg`}
              style={getButtonStyles(gender === "girl").style}
              onClick={() => setGender("girl")}
            >
              Girl
            </button>
          </div>
        </div>

        {/* Shirt Style Options */}
        <div>
          <p className="text-gray-800 text-lg font-bold">Shirt Style</p>
          <div className="flex space-x-4">
            <button
              className={`${getButtonStyles(shirtStyle === "round-neck").className} py-2 px-6 text-lg`}
              style={getButtonStyles(shirtStyle === "round-neck").style}
              onClick={() => setShirtStyle("round-neck")}
            >
              Round-Neck
            </button>
            <button
              className={`${getButtonStyles(shirtStyle === "collared").className} text-lg`}
              style={getButtonStyles(shirtStyle === "collared").style}
              onClick={() => setShirtStyle("collared")}
            >
              Collared
            </button>
          </div>
        </div>

        {/* Eyewear Options */}
        <div>
          <p className="text-gray-800 text-lg  font-bold">Eyewear</p>
          <div className="flex space-x-4">
            <button
              className={`${getButtonStyles(eyewear === "none").className}  py-2 px-6 text-lg`}
              style={getButtonStyles(eyewear === "none").style}
              onClick={() => setEyewear("none")}
            >
              None
            </button>
            <button
              className={`${getButtonStyles(eyewear === "glasses").className}  text-lg`}
              style={getButtonStyles(eyewear === "glasses").style}
              onClick={() => setEyewear("glasses")}
            >
              With Glasses
            </button>
          </div>
        </div>

        {/* College Options */}
        <div>
          <p className="text-gray-800 text-lg  font-bold">College</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              className={`${getButtonStyles(college === "cics").className}  py-2 px-6 text-lg`}
              style={getButtonStyles(college === "cics").style}
              onClick={() => setCollege("cics")}
            >
              CICS
            </button>
            <button
              className={`${getButtonStyles(college === "coe").className}  text-lg`}
              style={getButtonStyles(college === "coe").style}
              onClick={() => setCollege("coe")}
            >
              COE
            </button>
            <button
              className={`${getButtonStyles(college === "cafad").className}  py-2 px-6 text-lg`}
              style={getButtonStyles(college === "cafad").style}
              onClick={() => setCollege("cafad")}
            >
              CAFAD
            </button>
            <button
              className={`${getButtonStyles(college === "cet").className} text-lg`}
              style={getButtonStyles(college === "cet").style}
              onClick={() => setCollege("cet")}
            >
              CET
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Avatar Button */}
      <button
        className={`${getButtonStyles(false).className} mt-5 mb-16 py-4 px-8 text-lg font-bold text-sky-950`}
        style={getButtonStyles(false).style}
        onClick={handleConfirmAvatar}
      >
        Confirm Avatar
      </button>
    </div>
  );
};

export default CreateAvatar;
