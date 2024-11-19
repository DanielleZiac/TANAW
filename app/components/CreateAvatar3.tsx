"use client";

import React from "react";
import { baseButtonClass } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter } from "next/navigation";
import AvatarBox from "../styles/avatarBox";


const CreateAvatar3: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-8">
      {/* Avatar Display Area */}
      <div className="text-center w-full">
        <AvatarBox title="Your Avatar Preview" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-2 w-full mt-8">
        <button
          className={`${baseButtonClass} text-dBlue py-1 font-bold text-lg w-full`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => router.push('/createavatar/createavatar2')}
        >
          Retake
        </button>

        <button
          className={`${baseButtonClass} text-dBlue py-1 text-lg  font-bold w-full`}
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
