"use client";

import React from "react";
import { baseButtonClass, getButtonStyles } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter } from "next/navigation";

// Avatar Display Component (similar to the textbox, using pressed style)
const AvatarDisplayArea: React.FC = () => (
  <div
    className="rounded-3xl h-[300px] flex items-center justify-start mb-12 px-6"
    style={{
      backgroundColor: "white",
      boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)", // Pressed effect
    }}
  >
    <div className="text-gray-400 text-2xl">Avatar will be displayed here</div>
  </div>
);

const CreateAvatar2: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen py-16">
      <div className="flex flex-row justify-center gap-20 pt-20">
        {/* First Avatar Display Area */}
        <div className="text-center mb-8 w-[300px]">
          <AvatarDisplayArea />
        </div>
        {/* Second Avatar Display Area */}
        <div className="text-center mb-8 w-[300px]">
          <AvatarDisplayArea />
        </div>

      </div>
      
      <div>
        {/* Capture Button */}
        <button
          className={`${getButtonStyles(false).className} h-1/2 mt-14 px-20 text-xl text-sky-950`} // Apply the button styles
          style={getButtonStyles(false).style} // Apply the pressed effect style
          onClick={() => router.push('/createavatar/createavatar3')}
        >
          Capture
        </button>
      </div>

    </div>
  );
};

export default CreateAvatar2;
