"use client";

import mergeImages from "merge-images";
import { useRouter, redirect } from "next/navigation";
import React, { useEffect, useRef, useState  } from "react";
import { baseButtonClass, getButtonStyles } from '../styles/buttonStyles'; // Import your shared button styles
import { getDepartmentByAcronym } from "../dashboard/actions"


import { runFacemesh } from "./faceLandmarkDetection"

interface ParamsProps {
  user_id: string
}


// Avatar Display Component
const AvatarDisplayArea: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[400px] lg:h-[400px] flex items-center justify-center mb-12 px-6 rounded-3xl bg-white shadow-inner"
  >
    {children}
  </div>
);


const CreateAvatar2: React.FC<ParamsProps> = ({ user_id }) => {
  const router = useRouter();
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [eye, setEye] = useState("eyes_opened");
  const [eyePos, setEyePos] = useState("normal");
  const [smile, setSmile] = useState("mouth_closed");
  const [status, setStatus] = useState(false);
  const camera = useRef<HTMLVideoElement>(null);
  // const eye = useRef(null);

  const avatarSesh = typeof sessionStorage !== "undefined"
    ? JSON.parse(sessionStorage.getItem("avatar") || "[]") // Provide a fallback for null
    : [];

  // Redirect if required params are missing
  useEffect(() => {
    if (avatarSesh == null) {
      redirect("/dashboard/createAvatar1");
    }
  }, []);

  // Initialize camera
  useEffect(() => {
    const setCamera = async () => {
      try {
        const curStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (camera.current) {
          camera.current.srcObject = curStream;
          runFacemesh(camera.current, setStatus, setEye, setSmile);
          setStream(curStream);
          camera.current.style.transform = "scaleX(-1)"; // Flip camera
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

    const elements = [
      "college",
      "gender",
      "shirtStyle",
      "eye",
      "smile",
      "eyewear",
    ].map((id) => document.getElementById(id) as HTMLImageElement);

    const base64 = await mergeImages(elements.map((el) => el?.src).filter(Boolean));
    const department_id = await getDepartmentByAcronym(avatarSesh.college);
    console.log(department_id?.department_id)
    sessionStorage.setItem(user_id, base64);
    sessionStorage.setItem("department_id", department_id?.department_id)
    
    avatarSesh["eye"] = eye
    avatarSesh["smile"] = smile
    sessionStorage.setItem("avatar", JSON.stringify(avatarSesh));

    router.push("/dashboard/createAvatar3");
  };

  return (
    <div className="flex flex-col w-screen lg:w-[80vw] min-h-screen justify-center lg:ml-64 lg:pl-20">
      <h1 className="text-5xl lg:text-4xl font-extrabold text-center text-sky-950 mt-20 lg:mb-2">Your Avatar</h1>
      <div className="flex flex-col lg:flex-row justify-center lg:gap-32">

       
        {/* Camera View */}
        <div className="flex flex-col items-center ">
          <p className="text-lg font-bold text-gray-800 mb-4 text-center mt-4 lg:mt-0">Camera View</p>
          <div>
            <video playsInline ref={camera} autoPlay className="self-center flex-shrink-0 rounded-3xl w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[400px] lg:h-[400px] object-cover" />
          </div>
        </div>
        

        {/* Avatar Preview */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-gray-800 mb-4 text-center mt-12 lg:mt-0">Avatar Preview</p>
          <AvatarDisplayArea>
            {avatarSesh.college ? 
              <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[400px] lg:h-[400px] -mx-8">
                <img id="college" src={`/images/avatar/bg/bg_${avatarSesh?.college}.png`} className="absolute w-full h-full rounded-3xl" />
                <img id="gender" src={`/images/avatar/sex/${avatarSesh.gender}.png`} className="absolute w-full h-full" />
                <img id="shirtStyle" src={`/images/avatar/shirt_style/${avatarSesh.shirtStyle}.png`} className="absolute w-full h-full" />
                {avatarSesh.eyewear && (
                  <img id="eyewear" src={`/images/avatar/eye/${avatarSesh.eyewear}.png`} className="absolute w-full h-full" />
                )}
                <img id="eye" src={`/images/avatar/eye/${eye}.png`} className="absolute w-full h-full" />
                <img id="smile" src={`/images/avatar/mouth/${smile}.png`} className="absolute w-full h-full" />
              </div>
            : null}
          </AvatarDisplayArea>
        </div>
      </div>


      {/* Capture Button */}
      <button
        className={`${getButtonStyles(false).className} self-center py-3 px-8 text-lg font-bold text-white bg-sky-500 hover:bg-sky-600 w-[75vw] lg:w-[30vw] mb-32 md:mb-48 lg:mb-12`}
        style={getButtonStyles(false).style}
        onClick={capture}
      >
        Capture
      </button>
      
    </div>
  );
};

export default CreateAvatar2;
