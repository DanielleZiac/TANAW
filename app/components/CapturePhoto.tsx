"use client"

import { useRef, useState } from 'react';
import { uploadPhoto } from "../dashboard/actions"
import { runFacemesh } from "./faceLandmarkDetection"

const UploadPhoto: React.FC = (data) => {
  const user_id = data.data.user_id;

  const camera = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const eye = useRef(null);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [isCaptured, setIsCaptured] = useState(false);
  const [caption, setCaption] = useState("");

  async function openCam() {
    if (typeof window !== 'undefined') { 
      await navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        if (camera.current) {
          camera.current.srcObject = stream;
          setStream(stream);
          camera.current.style.transform = 'scaleX(-1)'; // Flip camera
          console.log("Camera opened");
        }
      });
    }
  }

  async function capturePhoto() {
    console.log("Capturing photo...");

    if (!stream || !camera.current || !canvas.current) return;

    const track = stream.getVideoTracks()[0];
    const context = canvas.current.getContext('2d');

    canvas.current.width = camera.current.videoWidth;
    canvas.current.height = camera.current.videoHeight;

    // Flip camera
    context.translate(canvas.current.width, 0);
    context.scale(-1, 1);

    context?.drawImage(
      camera.current,
      0, 0,
      camera.current.videoWidth,
      camera.current.videoHeight
    );

    const dataURL = canvas.current.toDataURL("image/png");
    const capturedFile = dataURLtoFile(dataURL, "photo.png");
    setFile(capturedFile);
    setIsCaptured(true);

    // Stop the camera
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }

    console.log("Photo captured:", capturedFile);

    // const dataURL = canvas.current.toDataURL("image/png");
    // const file = dataURLtoFile(dataURL, "photo.png");
    // setFile(file);
    // console.log("Photo captured:", file);
  }

  function retakePhoto() {
    setFile(null);
    setIsCaptured(false);
    setCaption("");
    openCam(); // Restart the camera
  }

  function dataURLtoFile(dataurl: string, filename: string): File {
    const [header, base64Data] = dataurl.split(',');
    const mime = header.match(/:(.*?);/)?.[1] || '';
    const bstr = atob(base64Data);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  async function handleUploadPhoto() {
    if (!file || !user_id) {
      console.error("File or User ID missing");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", user_id);
    formData.append("sdgs", "sdg1"); // Adjust SDG value as needed
    formData.append("caption", caption);

    console.log("Uploading photo...");
    console.log("Caption to upload:", caption);

    try {
      await uploadPhoto(formData);
      console.log("Photo uploaded successfully!");
      console.log("Current caption:", caption);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">
        SDG 1: No Poverty
      </h1>
      <p className="text-gray-700 text-lg mb-4">Photo Challenge</p>

      {!isCaptured && (
        <>
          <button
            type="button"
            className="bg-white text-indigo-500 font-bold py-3 px-4 rounded-full focus:outline-none shadow-lg drop-shadow-xl hover:bg-gray-200"
            onClick={openCam}
          >
            Start Now
          </button>

          <div
            style={{ border: "1px solid black" }}
            className="flex flex-col justify-center items-center p-12"
          >
            <video className="w-72" playsInline ref={camera} autoPlay />
          </div>
        </>
      )}

      <canvas ref={canvas} style={{ display: isCaptured ? "block" : "none" }} />

      {isCaptured ? (
        <>
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={retakePhoto}
          >
            Retake
          </button>
          <input
            type="text"
            maxLength={12}
            placeholder="Add a caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border mt-4 p-2 rounded text-black"
          />
        </>
      ) : (
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={capturePhoto}
        >
          Capture
        </button>
      )}

      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleUploadPhoto}
        disabled={!isCaptured || caption.trim() === ""}
      >
        Upload Photo
      </button>
    </div>
  );
};

export default UploadPhoto;
