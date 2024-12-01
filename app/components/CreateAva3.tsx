"use client";

import React, { useState, useEffect } from "react";
import { baseButtonClass } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter } from "next/navigation";
import { uploadAvatar } from "../dashboard/actions"

const CreateAvatar3: React.FC = () => {
  const router = useRouter();
  const [b64, setB64] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [avatarSesh, setAvatarSesh] = useState<Object | null>(null);

  useEffect(() => {
    var dataImage = sessionStorage.getItem("user_avatar_image");
    var dataCollege = sessionStorage.getItem("department_id");
    var avatarSesh = JSON.parse(sessionStorage.getItem("avatar") || "[]");

    
    //if (!dataImage || !dataCollege || !avatarSesh || avatarSesh.length <= 0) {
    //  console.log("Missing session data, redirecting...");
    //  router.push("/dashboard/createAvatar1");
    //} else {
    //  setB64(dataImage);
    //  setCollege(dataCollege);
    //  setAvatarSesh(avatarSesh);
    //}
  }, [router]);

  const createFile = () => {
    const avatarElement = document.getElementById("avatar_lbl") as HTMLInputElement | null;

    if (avatarElement && b64 !== null) {
      const arr = b64.split(',');

      if (arr.length > 0) {
        const matchRes = arr[0].match(/:(.*?);/);

        if (matchRes && matchRes[1]) {
          const mime = matchRes[1];
          const bstr = atob(arr[1]);
          let n = bstr.length;
          const u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          const file = new File([u8arr], "avatar.png", { type: mime });
          uploadAvatar("user_id", file, college, avatarSesh);
          sessionStorage.removeItem("user_avatar_image");
          sessionStorage.removeItem("department_id");
          sessionStorage.removeItem("avatar");

          router.push("/dashboard/createAvatar1");
        } else {
          console.log("Invalid base64 format");
        }
      } else {
        console.log("Base64 string is empty");
      }
    } else {
      console.error("Element with id 'avatar_lbl' not found or base64 is null");
    }
  }

  const retake = () => {
    sessionStorage.removeItem("user_avatar_image");
    delete avatarSesh['eye'];
    delete avatarSesh['smile'];
    sessionStorage.setItem("avatar", JSON.stringify(avatarSesh));
    router.back();
  }

  return (
    <div className="flex flex-col items-center h-screen px-24 py-16 w-screen lg:w-[80vw] lg:ml-64">
      <h1 className="text-xl font-extrabold text-center text-sky-950 mb-4 mt-4 md:mt-8">
        Your Avatars
      </h1>

      {/* Avatar Display Area */}
      <div className="text-center mb-8 w-full flex flex-col items-center">
        <p className="text-gray-800 text-2xl lg:text-3xl font-bold mb-10">Are You Satisfied?</p>
        <div
          className="rounded-3xl w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex items-center justify-center px-6 "
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
          }}
        >

          <img id="avatar" className="rounded-3xl w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex items-center justify-center px-6" src={b64 || ""} alt="Avatar" />

    
          
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 md:gap-8 w-full items-center">
        <button
          className={`${baseButtonClass} text-dBlue py-1 font-bold text-lg w-[60vw] md:w-[50vw] lg:w-[30vw] h-[50px] flex justify-center items-center`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)",
          }}
          onClick={retake}
        >
          Retake
        </button>

        <button
          className={`${baseButtonClass} text-dBlue py-1 text-lg font-bold w-[60vw] md:w-[50vw] lg:w-[30vw] h-[50px] flex justify-center items-center`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)",
            
          }}
          onClick={createFile}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CreateAvatar3;
