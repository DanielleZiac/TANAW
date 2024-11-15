"use client";

import React from "react";
import { baseButtonClass } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter } from "next/navigation";

const CreateAvatar3: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen px-24 py-16">
      <h1 className="text-5xl font-extrabold text-center text-sky-950 mb-14">
        Your Avatars
      </h1>

      {/* Avatar Display Area */}
      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Are You Satisfied?</p>
        <div
          className="rounded-3xl w-full h-[800px] flex items-center justify-center mb-12 px-6"
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="text-gray-400 text-2xl">Avatar will be displayed here</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-8 w-full mt-8">
        <button
          className={`${baseButtonClass} text-dBlue py-8 px-12 text-3xl w-full`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => router.push('/createavatar/createavatar2')}
        >
          Retake
        </button>

        <button
          className={`${baseButtonClass} text-dBlue py-8 px-12 text-3xl w-full`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => router.push('/home')}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CreateAvatar3;
