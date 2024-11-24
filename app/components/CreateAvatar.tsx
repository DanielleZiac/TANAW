"use client"

import { useEffect, useRef, useState } from 'react';
import { uploadAvatar } from "../dashboard/actions"
import { runFacemesh } from "./faceLandmarkDetection"

interface DataProps {
  data: [data: string];
}

const CreateAvatar: React.FC<DataProps> = ({data}) => {

  const user_id = data;

  const camera = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const eye = useRef(null);

  const [is_leftEyeClosed, setLeftEyeClose] = useState(null);
  const [is_rightEyeClosed, setRightEyeClose] = useState(null);

  // const [camOpen, setCamOpen] = useState("Open Cam");

  // async function toggleCam() {
  //   if (camOpen == "Open Cam") {

  //     setCamOpen("Close Cam");
  //   } else {
  //     setCamOpen("Open Cam");
  //   }
  // }

  const photo = useRef<HTMLImageElement>(null);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [file, setFile] = useState(null);

  async function openCam() {
    // console.log("hoaihdhbp")
    if (typeof window !== 'undefined') { 

      await navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        if (camera.current) {
          camera.current.srcObject = stream;
          setStream(stream);

          runFacemesh(camera.current, eye);

          console.log("opened cam")
        }
      });
    } else {
        camera.src = URL.createObjectURL(stream);
    }
  }

  async function capturePhoto() {
    console.log("pic");

    const track = await stream.getVideoTracks()[0];
    let imageCapture = new ImageCapture(track);
    const context = canvas.current.getContext('2d');

    canvas.current.width = camera.current.videoWidth;
    canvas.current.height = camera.current.videoHeight;
    context.drawImage(camera.current, 0, 0, camera.current.videoWidth, camera.current.videoHeight);
    const data = canvas.current.toDataURL("image/png");

    let file = dataURLtoFile(data, "hehe.png")
    setFile(file)
  }

  function dataURLtoFile(dataurl, filename) {
     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
     while(n--){
     u8arr[n] = bstr.charCodeAt(n);
     }
   return new File([u8arr], filename, {type:mime});
  }


  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">
        Create Your Avatar
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Personalize your profile by creating your avatar.
      </p>
      <p ref={eye} style={{color: "black"}}>eye</p>
{/*      <button
        style={{
          color: "black",
          border: "1px solid black",
          marginBottom: "20px"
        }}
        onClick={toggleCam}
      >{camOpen}</button>

      <div>
        <video 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            border: "1px solid red"
          }} 
          className='w-72' 
          playsInline 
          ref={camera} 
          autoPlay />
        <canvas 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            border: "1px solid black"
          }} 
          id="canvas" 
          ref={canvas} 
          onClick={() => showMesh()} ></canvas>
      </div>*/}

      <button
        type="button"
        className="bg-white text-indigo-500 font-bold py-3 px-4 rounded-full focus:outline-none shadow-lg drop-shadow-xl hover:bg-gray-200"
        onClick={openCam}
      >
        Start Now
      </button>

      <div style={{border: "1px solid black"}} className='flex flex-col justify-center items-center p-12'>
          <video className='w-72' playsInline ref={camera} autoPlay />
      </div>
      <button style={{color: "black"}} onClick={capturePhoto}>Capture</button>
      <canvas style={{border: "1px solid black"}} id="canvas" ref={canvas}> </canvas>
      <button style={{color: "black"}} onClick={() => uploadAvatar(user_id, file)}>Upload Photo</button>
    </div>
  );
};

export default CreateAvatar;
  