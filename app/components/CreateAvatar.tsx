"use client"

import { useEffect, useRef } from 'react';
import { uploadPhoto } from "../dashboard/actions"

const CreateAvatar: React.FC = () => {

  const camera = useRef<HTMLVideoElement>(null);
  const photo = useRef<HTMLImageElement>(null);

  function openCam() {
    // console.log("hoaihdhbp")
    if (typeof window !== 'undefined') { 
      //  Here, we retrieve the camera from the browser 
      //  and assign the video stream to the reference of our video tag.
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        if (camera.current) {
          camera.current.srcObject = stream;
        }
      });
    }
  }

  function capturePhoto() {
    console.log("pic")

    const track = mediaStream.getVideoTracks()[0];
    let imageCapture = new ImageCapture(track);
    photo.current.srcObject = imageCapture;
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">
        Create Your Avatar
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Personalize your profile by creating your avatar.
      </p>
      <button
        type="button"
        className="bg-white text-indigo-500 font-bold py-3 px-4 rounded-full focus:outline-none shadow-lg drop-shadow-xl hover:bg-gray-200"
        onClick={openCam}
      >
        Start Now
      </button>

      {/* wait trial muna */}
      <div style={{border: "1px solid black"}} className='flex flex-col justify-center items-center p-12'>
          <video className='w-72' playsInline ref={camera} autoPlay />
      </div>
      <button style={{color: "black"}} onClick={capturePhoto}>Capture</button>
      <div style={{border: "1px solid black"}} className='flex flex-col justify-center items-center p-12'>
        <img id="photo" alt="The screen capture will appear in this box." ref={photo} />
      </div>
      <button style={{color: "black"}} onClick={uploadPhoto}>Upload Photo</button>
    </div>
  );
};

export default CreateAvatar;
  