// src/components/CreateAvatar.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getButtonStyles } from "../styles/buttonStyles"; // Importing getButtonStyles

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
    <div className="flex flex-row justify-center px-24 py-16 gap-32">
      {/* left side */}
      <div>
        {/* Avatar Display Area */}
        <div className="text-left mb-8">
          <p className="text-blue-600 text-4xl font-bold mb-10">Customize Your Avatar</p>
          <div
            className="rounded-3xl w-[400px] h-[400px] flex items-center justify-center mb-12 px-6"
            style={{
              backgroundColor: "white",
              boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="text-gray-400 text-2xl">Avatar will be displayed here</div>
          </div>
        </div>
      </div>
      
      {/* right side */}
      <div>
        <div className="space-y-2">
          {/* Gender Options */}
          <div>
            <p className="text-gray-800 text-xl mb-2 font-extrabold">Gender</p>
            <div className="flex space-x-8">
              <button
                className={`${getButtonStyles(gender === "boy").className} text-blue-600 px-20 text-base`}
                style={getButtonStyles(gender === "boy").style}                  
                onClick={() => setGender("boy")}
              >
                Boy
              </button>
              <button
                className={`${getButtonStyles(gender === "girl").className} text-blue-600 px-20 text-base`}
                style={getButtonStyles(gender === "girl").style}
                onClick={() => setGender("girl")}
              >
                Girl
              </button>
            </div>
          </div>

          {/* Shirt Style Options */}
          <div>
            <p className="text-gray-800 text-lg mb-2 font-extrabold">Shirt Style</p>
            <div className="flex space-x-8">
              <button
                className={`${getButtonStyles(shirtStyle === "round-neck").className} text-blue-600 px-16 text-base`}
                style={getButtonStyles(shirtStyle === "round-neck").style}
                onClick={() => setShirtStyle("round-neck")}
              >
                Round&nbsp;Neck
              </button>
              <button
                className={`${getButtonStyles(shirtStyle === "collared").className} text-blue-600 px-20 text-base`}
                style={getButtonStyles(shirtStyle === "collared").style}
                onClick={() => setShirtStyle("collared")}
              >
                Collared
              </button>
            </div>
          </div>

          {/* Eyewear Options */}
          <div>
            <p className="text-gray-800 text-lg mb-2 font-extrabold">Eyewear</p>
            <div className="flex space-x-8">
              <button
                className={`${getButtonStyles(eyewear === "none").className} text-blue-600 px-10 text-base`}
                style={getButtonStyles(eyewear === "none").style}
                onClick={() => setEyewear("none")}
              >
                None
              </button>
              <button
                className={`${getButtonStyles(eyewear === "glasses").className} text-blue-600 px-10 text-base`}
                style={getButtonStyles(eyewear === "glasses").style}
                onClick={() => setEyewear("glasses")}
              >
                With Glasses
              </button>
            </div>
          </div>

          {/* College Options */}
          <div>
            <p className="text-gray-800 text-lg mb-2 font-extrabold">College</p>
            <div className="grid grid-cols-2 gap-4 gap-x-8">
              <button
                className={`${getButtonStyles(college === "cics").className} text-blue-600 px-10 text-base`}
                style={getButtonStyles(college === "cics").style}
                onClick={() => setCollege("cics")}
              >
                CICS
              </button>
              <button
                className={`${getButtonStyles(college === "coe").className} text-blue-600 px-10 text-base`}
                style={getButtonStyles(college === "coe").style}
                onClick={() => setCollege("coe")}
              >
                COE
              </button>
              <button
                className={`${getButtonStyles(college === "cafad").className} text-blue-600 px-10 text-base`}
                style={getButtonStyles(college === "cafad").style}
                onClick={() => setCollege("cafad")}
              >
                CAFAD
              </button>
              <button
                className={`${getButtonStyles(college === "cet").className} text-blue-600 px-10 text-base`}
                style={getButtonStyles(college === "cet").style}
                onClick={() => setCollege("cet")}
              >
                CET
              </button>
            </div>
            {/* Confirm Avatar Button */}
            <button
              className={`${getButtonStyles(false).className} mt-10 text-xl text-sky-950`}
              style={getButtonStyles(false).style}
              onClick={handleConfirmAvatar}
            >
              Confirm Avatar
            </button>
          </div>
 
      </div>
    </div>
  </div>
  );
};

export default CreateAvatar;
