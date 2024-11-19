"use client";

import React from "react";
import { getButtonStyles } from "../styles/buttonStyles"; // Import your shared button styles
import { useRouter } from "next/navigation";
import AvatarBox from "../styles/avatarBox"; // Import the reusable AvatarBox

const CreateAvatar2: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-8">
      {/* First Avatar Display Area */}
      <div className="text-center w-full">
        <AvatarBox title="Your Avatar Preview" />
      </div>

      {/* Second Avatar Display Area */}
      <div className="text-center w-full -mt-10">
        <AvatarBox title="Your Avatar Preview" />
      </div>

      {/* Capture Button */}
      <button
        className={`${getButtonStyles(false).className} mb-14 py-1 px-12 text-lg font-bold text-sky-950`} // Apply the button styles
        style={getButtonStyles(false).style} // Apply the pressed effect style
        onClick={() => router.push("/createavatar/createavatar3")}
      >
        Capture
      </button>
    </div>
  );
};

export default CreateAvatar2;
