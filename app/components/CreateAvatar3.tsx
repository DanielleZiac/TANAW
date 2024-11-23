"use client";

import React from "react";
import { baseButtonClass } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter } from "next/navigation";

const CreateAvatar3: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-24 py-16">

      {/* Avatar Display Area */}
        <p className="text-blue-700 text-3xl font-bold mb-10">Are You Satisfied With Your Avatar?</p>
        <div
          className="rounded-3xl w-[400px] h-[400px] flex items-center justify-center mb-12 px-6"
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="text-gray-400 text-2xl">Avatar will be displayed here</div>
        </div>

      <div className="flex flex-row gap-10">
        <button
          className={`${baseButtonClass} text-dBlue px-8 text-base w-[180px]`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => router.push('/createavatar/createavatar2')}
        >
          Retake
        </button>

        <button
          className={`${baseButtonClass} text-dBlue px-8 text-base w-[180px]`}
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
