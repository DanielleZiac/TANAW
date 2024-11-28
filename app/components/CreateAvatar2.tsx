"use client";

import mergeImages from "merge-images";
import { useRouter, redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { baseButtonClass, getButtonStyles } from "../styles/buttonStyles"; // Import your shared button styles
import { runFacemesh } from "./faceLandmarkDetection";

// Avatar Display Component
const AvatarDisplayArea: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="w-full h-[400px] flex items-center justify-center mb-12 px-6 rounded-3xl bg-white shadow-inner"
  >
    {children}
  </div>
);

interface ParamsProps {
  params: [
    {
      college: string;
      eyewear: string;
      gender: string;
      shirtStyle: string;
    },
    string
  ];
}

const CreateAvatar2: React.FC<ParamsProps> = ({ params }) => {
  const router = useRouter();
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [leftEye, setLeftEye] = useState("eyes_opened");
  const [smile, setSmile] = useState("mouth_closed");
  const [status, setStatus] = useState(false);
  const camera = useRef<HTMLVideoElement>(null);

  const avatar = params[0];
  const user_id = params[1];

  // Redirect if required params are missing
  useEffect(() => {
    if (!avatar.college || !avatar.gender || !avatar.shirtStyle) {
      redirect("/dashboard/createAvatar1");
    }
  }, [avatar]);

  // Initialize camera
  useEffect(() => {
    const setCamera = async () => {
      try {
        const curStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (camera.current) {
          camera.current.srcObject = curStream;
          runFacemesh(camera.current, setStatus, setLeftEye, setSmile);
          setStream(curStream);
        }
      } catch (error) {
        console.error("Camera initialization error:", error);
      }
    };
    setCamera();

    return () => {
      if (stream) {
        stream.getVideoTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Handle avatar capture
  const capture = async () => {
    if (!status) {
      console.log("Face not detected, cannot capture.");
      return;
    }

    // Stop camera stream
    if (stream) {
      stream.getVideoTracks()[0].stop();
    }

    let qry = Object.entries(avatar)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    qry += `&eye=${leftEye}`;

    const elements = [
      "college",
      "gender",
      "shirtStyle",
      "leftEye",
      "smile",
      "eyewear",
    ].map((id) => document.getElementById(id) as HTMLImageElement);

    const base64 = await mergeImages(elements.map((el) => el?.src).filter(Boolean));
    sessionStorage.setItem(user_id, base64);

    router.push("/dashboard/createAvatar3");
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-8 py-16 space-y-12">
      <h1 className="text-5xl font-extrabold text-center text-sky-950">Your Avatar</h1>

      {/* Camera View */}
      <div className="w-full">
        <p className="text-lg font-bold text-gray-800 mb-4 text-center">Camera View</p>
        <AvatarDisplayArea>
          <video playsInline ref={camera} autoPlay className="rounded-xl" />
        </AvatarDisplayArea>
      </div>

      {/* Avatar Preview */}
      <div className="w-full">
        <p className="text-lg font-bold text-gray-800 mb-4 text-center">Avatar Preview</p>
        <AvatarDisplayArea>
          <img id="college" src={`/images/avatar/bg/bg_${avatar.college}.png`} className="absolute" />
          <img id="gender" src={`/images/avatar/sex/${avatar.gender}.png`} className="absolute" />
          <img id="shirtStyle" src={`/images/avatar/shirt_style/${avatar.shirtStyle}.png`} className="absolute" />
          {avatar.eyewear && (
            <img id="eyewear" src={`/images/avatar/eye/${avatar.eyewear}.png`} className="absolute" />
          )}
          <img id="leftEye" src={`/images/avatar/eye/${leftEye}.png`} className="absolute" />
          <img id="smile" src={`/images/avatar/mouth/${smile}.png`} className="absolute" />
        </AvatarDisplayArea>
      </div>

      {/* Capture Button */}
      <button
        className={`${getButtonStyles(false).className} py-3 px-8 text-lg font-bold text-white bg-sky-500 hover:bg-sky-600`}
        style={getButtonStyles(false).style}
        onClick={capture}
      >
        Capture
      </button>
    </div>
  );
};

export default CreateAvatar2;
