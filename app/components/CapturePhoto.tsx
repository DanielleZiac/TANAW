"use client"

import { useRef, useState, useEffect } from 'react';
import { uploadPhoto } from "../dashboard/actions"
import { baseButtonClass } from '../styles/buttonStyles';
import { useRouter, useParams } from "next/navigation";  
import InputBox from '../styles/inputBox';
import { IoIosArrowBack } from 'react-icons/io'; // Import back arrow icon
import { HiArrowLeft } from 'react-icons/hi'

interface DataProps {
  data: [data: string, sdg: string];
}

const UploadPhoto: React.FC<DataProps> = ({data}) => {

  const router = useRouter();
  
  const user_id = data[0];
  const sdg = data[1];

  const camera = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Open Camera on Mount
  useEffect(() => {
    openCam();
    return () => stopCamera();
  }, []);

  const openCam = async () => {
    if (typeof window !== "undefined") {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (camera.current) {
          camera.current.srcObject = mediaStream;
          setStream(mediaStream);
          camera.current.style.transform = "scaleX(-1)"; // Flip camera
        }
      } catch (error) {
        setError("Error accessing camera.");
        console.error("Error opening camera:", error);
      }
    }
  };
  
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const capturePhoto = () => {
    if (!stream || !camera.current || !canvas.current) {
      setError("Camera not initialized.");
      return;
    }
    
    const track = stream.getVideoTracks()[0];
    const context = canvas.current.getContext('2d');

    canvas.current.width = camera.current.videoWidth;
    canvas.current.height = camera.current.videoHeight;

    // Flip camera
    context?.translate(canvas.current.width, 0);
    context?.scale(-1, 1);
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
    stopCamera();
  }

  function retakePhoto() {
    setFile(null);
    setIsCaptured(false);
    setCaption("");
    openCam();
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
    if (!file) {
      console.error("File missing");
      alert("Please capture a photo before uploading.");
      return;
    }
  
    if (!caption.trim()) {
      console.error("Caption missing");
      alert("Please add a caption before uploading.");
      return;
    }
  
    if (!user_id) {
      console.error("User ID missing");
      alert("User ID is required to upload the photo.");
      return;
    }

    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", user_id);
    formData.append("sdgs", `sdg${sdg}`); 
    formData.append("caption", caption);

    try {
      await uploadPhoto(formData);
      router.push(`/dashboard/sdg/${parseInt(sdg)}`);
    } catch (error) {
      setError("Failed to upload photo. Please try again.");
      console.error("Error uploading photo:", error);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      

      <h1 className="text-3xl md:text-5xl font-extrabold text-center mt-10 text-sky-400">
        SDG {sdg}
      </h1>
      <p className="text-gray-700 text-lg md:text-3xl md:mt-8 mb-4 md:mb-8">Photo Challenge</p>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {!isCaptured && (
        <div
          className="rounded-full w-60 h-60 md:w-[500px] md:h-[500px] lg:w-96 lg:h-96 flex items-center justify-center mb-6 mx-auto"
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 4px 12px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
        >
          <video className="w-full h-full object-cover" playsInline ref={camera} autoPlay />
        </div>
      )}

      <canvas ref={canvas} style={{ display: "none" }} />

      {isCaptured ? (
        <>
          <div
            className="rounded-full w-60 h-60 flex items-center justify-center mb-6 mx-auto"
            style={{
              backgroundColor: "white",
              boxShadow: "inset 0px 4px 12px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
            }}
          >
            <img
              src={canvas.current?.toDataURL("image/png")}
              alt="Captured"
              className="w-full h-full object-cover"
            />
          </div>

          <button
            className={`${baseButtonClass} text-dBlue py-1 text-lg font-bold w-72`}
            style={{
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
            }}
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
            className="border mt-4 mb-4 p-2 rounded text-black"
            
          />

          <button
            className={`${baseButtonClass} text-dBlue py-1 text-lg font-bold w-72`}
            style={{
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
            }}
            onClick={handleUploadPhoto}
            disabled={!caption.trim() || !file}
          >
            Upload Photo
          </button>
        </>
      ) : (
        <button
          className={`${baseButtonClass} text-dBlue py-1 text-lg font-bold w-[50vw] md:w-[35vw] lg:w-64`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={capturePhoto}
        >
          Capture
        </button>
      )}

      {/* Back Button for Large Screens */}
      <button
        className={`${baseButtonClass} text-dBlue py-1 text-lg font-bold w-[50vw] md:w-[35vw] lg:w-64 mt-4 block`}
        style={{
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => router.back()}
        >
          Back
      </button>

      {/* Back Arrow for Mobile */}
      <div className="lg:hidden absolute top-4 left-4">
        <button
          className="text-dBlue text-2xl"
          onClick={() => router.back()} 
        >
          <HiArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default UploadPhoto;
