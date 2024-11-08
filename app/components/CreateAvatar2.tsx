"use client";

import React from "react";
import { baseButtonClass, getButtonStyles } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter } from "next/navigation";

// Avatar Display Component (similar to the textbox, using pressed style)
const AvatarDisplayArea: React.FC = () => (
  <div
    className="rounded-3xl w-full h-[800px] flex items-center justify-center mb-12 px-6"
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
    <div className="flex flex-col items-center min-h-screen px-24 py-16">
      <h1 className="text-5xl font-extrabold text-center text-sky-950 mb-14">
        Your Avatars
      </h1>

      {/* First Avatar Display Area */}
      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Your Avatar Preview</p>
        <AvatarDisplayArea />
      </div>

      {/* Second Avatar Display Area */}
      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Your Avatar Preview</p>
        <AvatarDisplayArea />
      </div>

      {/* Capture Button */}
      <button
        className={`${getButtonStyles(false).className} mt-14 py-8 px-12 text-3xl text-sky-950`} // Apply the button styles
        style={getButtonStyles(false).style} // Apply the pressed effect style
        onClick={() => router.push('/createavatar/createavatar3')}
      >
        Capture
      </button>
    </div>
  );
};

export default CreateAvatar2;
