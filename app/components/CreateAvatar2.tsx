"use client";

import mergeImages from "merge-images";
import { useRouter, redirect } from "next/navigation";
import React, { useEffect, useRef, useState  } from "react";
import { baseButtonClass, getButtonStyles } from '../styles/buttonStyles'; // Import your shared button styles

import { runFacemesh } from "./faceLandmarkDetection"

interface ParamsProps {
  params: [
    params: {
      college: string, 
      eyewear: string, 
      gender: string, 
      shirtStyle: string
    }, 
    data: string
    ];
}

// interface ChildrenProps {
//   children: any
// }


// // Avatar Display Component (similar to the textbox, using pressed style)
// const AvatarDisplayArea: React.FC<ChildrenProps> = ({ children }) => (



// Avatar Display Component
const AvatarDisplayArea: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[400px] lg:h-[400px] flex items-center justify-center mb-12 px-6 rounded-3xl bg-white shadow-inner"
  >
    {children}
  </div>
);


const CreateAvatar2: React.FC<ParamsProps> = ({ params }) => {
  const router = useRouter();
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [leftEye, setLeftEye] = useState("eyes_opened");
  const [rightEye, setRightEye] = useState("rightEyeOpened");
  const [eyePos, setEyePos] = useState("normal");
  const [smile, setSmile] = useState("mouth_closed");
  const [status, setStatus] = useState(false);
  const camera = useRef<HTMLVideoElement>(null);
  // const eye = useRef(null);

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
      // if (typeof window !== "undefined") {
      //   await navigator.mediaDevices.getUserMedia({
      //     video: true
      //   }).then(cur_stream => {
      //     if(camera.current) {
      //       camera.current.srcObject = cur_stream;

      //       runFacemesh(camera.current, setStatus, setLeftEye, setSmile);
      //       setStream(cur_stream);
      //     }
      //   })
      // } else {
      //   // camera.src = URL.createObjectURL(stream);
      //   console.log("error");
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
    // });
  // })
    };
  }, []);



  // Handle avatar capture
  const capture = async () => {
    if (!status) {
// <<<<<<< HEAD
    
//       for (let i = 0; i < Object.keys(avatar).length; i++) {
//         const key = Object.keys(avatar)[i] as keyof typeof avatar;
//         qry += `${Object.keys(avatar)[i]}=${avatar[key]}&`
//       }

//       qry += `eye=${leftEye}`
//       console.log("stream stop", qry)
//       qry = qry.toString().replaceAll("&amp;", "&");

//       const collegeElem = document.getElementById("college");
//       const genderElem = document.getElementById("gender");
//       const shirtStyleElem = document.getElementById("shirtStyle");
//       const leftEyeElem = document.getElementById("leftEye");
//       const smileElem = document.getElementById("smile");
//       const eyewearElem = document.getElementById("eyewear") as HTMLImageElement | null;
//       let b64;

//       if (
//         collegeElem instanceof HTMLImageElement &&
//         genderElem instanceof HTMLImageElement &&
//         shirtStyleElem instanceof HTMLImageElement &&
//         leftEyeElem instanceof HTMLImageElement && 
//         smileElem instanceof HTMLImageElement
//       ) {
//         if (eyewearElem) {
//           b64 = await mergeImages([
//             collegeElem.src,
//             genderElem.src,
//             shirtStyleElem.src,
//             leftEyeElem.src,
//             smileElem.src,
//             eyewearElem.src
//           ]);
//         } else {
//           b64 = await mergeImages([
//             collegeElem.src,
//             genderElem.src,
//             shirtStyleElem.src,
//             leftEyeElem.src,
//             smileElem.src
//           ]);
//         }
//         console.log(b64);
//       } else {
//         console.error("One or more elements are missing or not images.");
//       }

//       sessionStorage.setItem(user_id, b64);
//       router.push(`/dashboard/createAvatar3`)
// =======
      console.log("Face not detected, cannot capture.");
      return;
    }

    // Stop camera stream
    if (stream) {
      stream.getVideoTracks()[0].stop();
    }

    // let qry = Object.entries(avatar)
    //   .map(([key, value]) => `${key}=${value}`)
    //   .join("&");
    // qry += `&eye=${leftEye}`;

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
            <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[400px] lg:h-[400px] -mx-8">
              <img id="college" src={`/images/avatar/bg/bg_${avatar.college}.png`} className="absolute w-full h-full rounded-3xl" />
              <img id="gender" src={`/images/avatar/sex/${avatar.gender}.png`} className="absolute w-full h-full" />
              <img id="shirtStyle" src={`/images/avatar/shirt_style/${avatar.shirtStyle}.png`} className="absolute w-full h-full" />
              {avatar.eyewear && (
                <img id="eyewear" src={`/images/avatar/eye/${avatar.eyewear}.png`} className="absolute w-full h-full" />
              )}
              <img id="leftEye" src={`/images/avatar/eye/${leftEye}.png`} className="absolute w-full h-full" />
              <img id="smile" src={`/images/avatar/mouth/${smile}.png`} className="absolute w-full h-full" />
            </div>
          </AvatarDisplayArea>
        </div>



      </div>

      {/* Second Avatar Display Area */}
{/*      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Your Avatar Preview</p>
        <AvatarDisplayArea>
          <p ref={eye} style={{color: "black"}}>no face detected</p>
          <img 
            id="college"
            src={`/images/avatar/bg/bg_${avatar.college}.png`}
            style={{position: "absolute"}}
          />
          <img 
            id="gender"
            src={`/images/avatar/sex/${avatar.gender}.png`}
            style={{position: "absolute"}}
          />
          <img 
            id="shirtStyle"
            src={`/images/avatar/shirt_style/${avatar.shirtStyle}.png`}
            style={{position: "absolute"}}
          />

          {avatar.eyewear 
            ? 
              <img 
                id="eyewear"
                src={`/images/avatar/eye/${avatar.eyewear}.png`}
                style={{position: "absolute"}}
              />
            :
              null 
          }

          <img 
            id="leftEye"
            src={`/images/avatar/eye/${leftEye}.png`}
            style={{position: "absolute"}}
          />

          <img 
            id="smile"
            src={`/images/avatar/mouth/${smile}.png`}
            style={{position: "absolute"}}
          />

        </AvatarDisplayArea>
      </div>*/}


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
