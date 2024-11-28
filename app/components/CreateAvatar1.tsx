"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getButtonStyles } from "../styles/buttonStyles"; // Importing getButtonStyles
import AvatarBox from "../styles/avatarBox"; // Assuming AvatarBox is a reusable component for the avatar display

const CreateAvatar1: React.FC = () => {
  const router = useRouter();
  const [gender, setGender] = useState("boy");
  const [shirtStyle, setShirtStyle] = useState("round-neck");
  const [eyewear, setEyewear] = useState("none");
  const [college, setCollege] = useState("cics");

  const handleConfirmAvatar = () => {
    const query = `gender=${gender}&shirtStyle=${shirtStyle}${
      eyewear !== "none" ? `&eyewear=${eyewear}` : ""
    }&college=${college}`;
    router.push(`/dashboard/createAvatar2?${query}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-8">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-sky-950 mb-10">
        Customize Your Avatar
      </h1>

      {/* Avatar Display Area */}
      
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden bg-white shadow-md">
          {/* Background */}
          <img
            src={`/images/avatar/bg/bg_${college}.png`}
            alt={`${college} background`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gender */}
          <img
            src={`/images/avatar/sex/${gender}.png`}
            alt={gender}
            className="absolute inset-0 w-full h-full object-contain"
          />
          {/* Shirt Style */}
          <img
            src={`/images/avatar/shirt_style/${shirtStyle}.png`}
            alt={shirtStyle}
            className="absolute inset-0 w-full h-full object-contain"
          />
          {/* Eyewear */}
          {eyewear !== "none" && (
            <img
              src={`/images/avatar/eye/${eyewear}.png`}
              alt={eyewear}
              className="absolute inset-0 w-full h-full object-contain"
            />
          )}
        </div>
      

      {/* Options */}
      <div className="space-y-8 w-full mt-8">
        {/* Gender Options */}
        <div>
          <p className="text-gray-800 text-lg font-bold mb-4">Gender</p>
          <div className="flex space-x-4">
            <button
              className={`${getButtonStyles(gender === "boy").className} py-2 px-6 text-lg`}
              style={getButtonStyles(gender === "boy").style}
              onClick={() => setGender("boy")}
            >
              Boy
            </button>
            <button
              className={`${getButtonStyles(gender === "girl").className} py-2 px-6 text-lg`}
              style={getButtonStyles(gender === "girl").style}
              onClick={() => setGender("girl")}
            >
              Girl
            </button>
          </div>
        </div>

        {/* Shirt Style Options */}
        <div>
          <p className="text-gray-800 text-lg font-bold mb-4">Shirt Style</p>
          <div className="flex space-x-4">
            <button
              className={`${getButtonStyles(shirtStyle === "polo").className} py-2 px-6 text-lg`}
              style={getButtonStyles(shirtStyle === "polo").style}
              onClick={() => setShirtStyle("polo")}
            >
              Polo
            </button>
            <button
              className={`${getButtonStyles(shirtStyle === "shirt").className} py-2 px-6 text-lg`}
              style={getButtonStyles(shirtStyle === "shirt").style}
              onClick={() => setShirtStyle("shirt")}
            >
              Shirt
            </button>
          </div>
        </div>

        {/* Eyewear Options */}
        <div>
          <p className="text-gray-800 text-lg font-bold mb-4">Eyewear</p>
          <div className="flex space-x-4">
            <button
              className={`${getButtonStyles(eyewear === "none").className} py-2 px-6 text-lg`}
              style={getButtonStyles(eyewear === "none").style}
              onClick={() => setEyewear("none")}
            >
              None
            </button>
            <button
              className={`${getButtonStyles(eyewear === "glasses").className} py-2 px-6 text-lg`}
              style={getButtonStyles(eyewear === "glasses").style}
              onClick={() => setEyewear("glasses")}
            >
              With Glasses
            </button>
          </div>
        </div>

        {/* College Options */}
        <div>
          <p className="text-gray-800 text-lg font-bold mb-4">College</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              className={`${getButtonStyles(college === "cics").className} py-2 px-6 text-lg`}
              style={getButtonStyles(college === "cics").style}
              onClick={() => setCollege("cics")}
            >
              CICS
            </button>
            <button
              className={`${getButtonStyles(college === "coe").className} py-2 px-6 text-lg`}
              style={getButtonStyles(college === "coe").style}
              onClick={() => setCollege("coe")}
            >
              COE
            </button>
            <button
              className={`${getButtonStyles(college === "cafad").className} py-2 px-6 text-lg`}
              style={getButtonStyles(college === "cafad").style}
              onClick={() => setCollege("cafad")}
            >
              CAFAD
            </button>
            <button
              className={`${getButtonStyles(college === "cet").className} py-2 px-6 text-lg`}
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
        className={`${getButtonStyles(false).className} mt-10 py-4 px-8 text-lg font-bold text-sky-950`}
        style={getButtonStyles(false).style}
        onClick={handleConfirmAvatar}
      >
        Confirm Avatar
      </button>
    </div>
  );
};

export default CreateAvatar1;
