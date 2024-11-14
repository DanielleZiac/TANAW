"use client";

import { React, useEffect, useRef, useState  } from "react";
import { baseButtonClass, getButtonStyles } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter } from "next/navigation";

import { runFacemesh } from "./faceLandmarkDetection"

// Avatar Display Component (similar to the textbox, using pressed style)
const AvatarDisplayArea: React.FC = ({ children }) => (
  <div
    className="rounded-3xl w-full h-[800px] flex items-center justify-center mb-12 px-6"
    style={{
      backgroundColor: "white",
      boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)", // Pressed effect
    }}
  >
    {children}
    {/*<div className="text-gray-400 text-2xl">Avatar will be displayed here</div>*/}
    }
  </div>
);

// add parameters
const CreateAvatar2: React.FC = (params) => {
  console.log(params);


  const router = useRouter();
  const camera = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState(null);
  const eye = useRef(null);

  useEffect(() => {
    const setCamera = async () => {
      if (typeof window !== "undefined") {
        await navigator.mediaDevices.getUserMedia({
          video: true
        }).then(stream => {
          if(camera.current) {
            camera.current.srcObject = stream;

            runFacemesh(camera.current, eye);
            setStream(stream);
          }
        })
      } else {
        camera.src = URL.createObjectURL(stream);
      }
    }
    setCamera();
  }, [])

  const capture = async() => {
    console.log("pic");
    let params = eye.current.innerHTML
    if (params == "no face detected") {
      // disable capture btn
      console.log("disable capture btn")
    } else {
      stream.getVideoTracks()[0].stop();
      params = params.toString().replaceAll("&amp;", "&");
      router.push(`/dashboard/createAvatar3${params}`);
    }
  }

  console.log(stream);

  return (
    <div className="flex flex-col items-center min-h-screen px-24 py-16">
      <h1 className="text-5xl font-extrabold text-center text-sky-950 mb-14">
        Your Avatars
      </h1>

      {/* First Avatar Display Area */}
      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Your Avatar Preview</p>
        <AvatarDisplayArea> 
          <video playsInline ref={camera} autoPlay /> 
        </AvatarDisplayArea>
        {/*<video className='w-72' playsInline ref={camera} autoPlay />*/}
      </div>

      {/* Second Avatar Display Area */}
      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Your Avatar Preview</p>
        <AvatarDisplayArea>
          <p ref={eye} style={{color: "black"}}>no face detected</p>
        </AvatarDisplayArea>
      </div>

      {/* Capture Button */}
      <button
        className={`${getButtonStyles(false).className} mt-14 py-8 px-12 text-3xl text-sky-950`} // Apply the button styles
        style={getButtonStyles(false).style} // Apply the pressed effect style
        onClick={capture}
      >
        Capture
      </button>
    </div>
  );
};

export default CreateAvatar2;