"use client";

import { React, useState, useEffect} from "react";
import { baseButtonClass } from '../styles/buttonStyles'; // Import your shared button styles
import { useRouter, redirect } from "next/navigation";

import { uploadAvatar } from "../dashboard/actions"

const CreateAvatar3: React.FC = (params) => {
  const router = useRouter();
  const [b64, setB64] = useState(null);
  console.log(params)
  var user_id = params.data

  useEffect(() => {
    var dataImage = sessionStorage.getItem(user_id);
    if (dataImage == null) {
      console.log("null")
      redirect("/dashboard/createAvatar1")
    } else {
      setB64(dataImage)
    }
  }, []);

  const createFile = () => {
    const avatar_lbl = document.getElementById("avatar_lbl").value;

    var arr = b64.split(','), mime = arr[0].match(/:(.*?);/)[1],
     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
     while(n--){
     u8arr[n] = bstr.charCodeAt(n);
     }

    const file = new File([u8arr], "avatar.png", {type:mime})
    uploadAvatar(user_id, file, avatar_lbl)
    sessionStorage.removeItem(user_id);
    redirect("/dashboard/createAvatar1")
  }

  const retake = () => {
    sessionStorage.removeItem(user_id);
    router.back()
  }


  return (
    <div className="flex flex-col items-center min-h-screen px-24 py-16">
      <h1 className="text-5xl font-extrabold text-center text-sky-950 mb-14">
        Your Avatars
      </h1>

      {/* Avatar Display Area */}
      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Are You Satisfied?</p>
        <div
          className="rounded-3xl w-full h-[800px] flex items-center justify-center mb-12 px-6"
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
          }}
        >

          <img id="avatar" src={`${b64}`}></img>

          <div className="text-gray-400 text-2xl">Avatar will be displayed here</div>
          <input 
            id="avatar_lbl"
            style={{backgroundColor: "black"}}
            type="text"
            placeholder="My avatar"
          ></input>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-8 w-full mt-8">
        <button
          className={`${baseButtonClass} text-dBlue py-8 px-12 text-3xl w-full`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => retake()}
        >
          Retake
        </button>

        <button
          className={`${baseButtonClass} text-dBlue py-8 px-12 text-3xl w-full`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => createFile()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CreateAvatar3;