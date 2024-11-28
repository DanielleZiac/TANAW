"use client";

import mergeImages from 'merge-images';
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

interface ChildrenProps {
  children: any
}


// Avatar Display Component (similar to the textbox, using pressed style)
const AvatarDisplayArea: React.FC<ChildrenProps> = ({ children }) => (
  <div
    className="rounded-3xl w-full h-[800px] flex items-center justify-center mb-12 px-6"
    style={{
      backgroundColor: "white",
      boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)", // Pressed effect
    }}
  >
    {children}
  </div>
);

// add parameters
const CreateAvatar2: React.FC<ParamsProps> = ({params}) => {
  console.log(params)
  var user_id = params[1]
  var avatar = params[0]

  console.log(avatar);

  if (!avatar.college || 
    !avatar.gender || 
    !avatar.shirtStyle) { 
    console.log("null")
    redirect("/dashboard/createAvatar1")
  }

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [leftEye, setLeftEye] = useState("eyes_opened");
  const [rightEye, setRightEye] = useState("rightEyeOpened");
  const [eyePos, setEyePos] = useState("normal");
  const [smile, setSmile] = useState("mouth_closed");
  const [status, setStatus] = useState(false);

  const eye = useRef(null);
  const router = useRouter();
  const camera = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setCamera = async () => {
      if (typeof window !== "undefined") {
        await navigator.mediaDevices.getUserMedia({
          video: true
        }).then(cur_stream => {
          if(camera.current) {
            camera.current.srcObject = cur_stream;

            runFacemesh(camera.current, setStatus, setLeftEye, setSmile);
            setStream(cur_stream);
          }
        })
      } else {
        // camera.src = URL.createObjectURL(stream);
        console.log("error");
      }
    }
    setCamera();
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', (event) => {
      if (stream != null) {
        stream.getVideoTracks()[0].stop()
      }
    });
  })

  const capture = async() => {
    // function dataURLtoFile(dataurl, filename) {
    //   var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //   bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //   while(n--){
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   return new File([u8arr], filename, {type:mime});
    // }

    console.log("pic");
    console.log(params)
    let qry = ""

    if (!status) {
      // disable capture btn
      console.log("disable capture btn")
    } else {
      console.log(stream)

      if (stream !== null) {
        stream.getVideoTracks()[0].stop();
      }
    
      for (let i = 0; i < Object.keys(avatar).length; i++) {
        const key = Object.keys(avatar)[i] as keyof typeof avatar;
        qry += `${Object.keys(avatar)[i]}=${avatar[key]}&`
      }

      qry += `eye=${leftEye}`
      console.log("stream stop", qry)
      qry = qry.toString().replaceAll("&amp;", "&");

      const collegeElem = document.getElementById("college");
      const genderElem = document.getElementById("gender");
      const shirtStyleElem = document.getElementById("shirtStyle");
      const leftEyeElem = document.getElementById("leftEye");
      const smileElem = document.getElementById("smile");
      const eyewearElem = document.getElementById("eyewear") as HTMLImageElement | null;
      let b64;

      if (
        collegeElem instanceof HTMLImageElement &&
        genderElem instanceof HTMLImageElement &&
        shirtStyleElem instanceof HTMLImageElement &&
        leftEyeElem instanceof HTMLImageElement && 
        smileElem instanceof HTMLImageElement
      ) {
        if (eyewearElem) {
          b64 = await mergeImages([
            collegeElem.src,
            genderElem.src,
            shirtStyleElem.src,
            leftEyeElem.src,
            smileElem.src,
            eyewearElem.src
          ]);
        } else {
          b64 = await mergeImages([
            collegeElem.src,
            genderElem.src,
            shirtStyleElem.src,
            leftEyeElem.src,
            smileElem.src
          ]);
        }
        console.log(b64);
      } else {
        console.error("One or more elements are missing or not images.");
      }

      sessionStorage.setItem(user_id, b64);
      router.push(`/dashboard/createAvatar3`)
    }
  }

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
      </div>

      {/* Second Avatar Display Area */}
      <div className="text-center mb-8 w-full">
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