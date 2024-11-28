// src/components/CreateAvatar.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getButtonStyles } from "../styles/buttonStyles"; // Importing getButtonStyles

interface DataProps {
  data: string;
}

const CreateAvatar1: React.FC<DataProps> = ({data}) => {
  console.log(data);
  const router = useRouter();
  const [gender, setGender] = useState("boy");
  const [shirtStyle, setShirtStyle] = useState("shirt");
  const [eyewear, setEyewear] = useState<string | null>(null);
  const [college, setCollege] = useState("cics");

  console.log(gender, shirtStyle, eyewear, college);

  const handleConfirmAvatar = () => {
    const query = `gender=${gender}&shirtStyle=${shirtStyle}` + (eyewear ? `&eyewear=${eyewear}` : "") + `&college=${college}`;
    // console.log(query)
    router.push(`/dashboard/createAvatar2?${query}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-24 py-16">
      <h1 className="text-5xl font-extrabold text-center text-sky-950 mb-14">
        Customize Your Avatar
      </h1>

      {/* Avatar Display Area */}
      <div className="text-center mb-8 w-full">
        <p className="text-gray-800 text-5xl font-bold mb-10">Your Avatar Preview</p>
        <div
          className="rounded-3xl w-full h-[800px] flex items-center justify-center mb-12 px-6 relative overflow-hidden"
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="text-gray-400 text-2xl">{gender} {shirtStyle} {eyewear} {college}</div>

          {/*add glasses*/}
          <img 
            src={`/images/avatar/bg/bg_${college}.png`}
            alt="Gender"
            className= "absolute inset-0 w-full h-full object-cover"
          />
          <img 
            src={`/images/avatar/sex/${gender}.png`}
            alt="Shirt Style"
            className= "absolute inset-0 w-full h-full object-contain"
          />
          <img 
            src={`/images/avatar/shirt_style/${shirtStyle}.png`}
            alt="Eyewear"
            className= "absolute inset-0 w-full h-full object-contain"
          />

          {eyewear 
            ? 
              <img 
                src={`/images/avatar/eye/${eyewear}.png`}
                alt="Gender"
                className= "absolute inset-0 w-full h-full object-contain"
              />
            : 
              null
          }

        </div>
      </div>

      <div className="space-y-14 w-full">
        {/* Gender Options */}
        <div>
          <p className="text-gray-800 text-4xl mb-6 font-extrabold">Gender</p>
          <div className="flex space-x-8">
            <button
              className={`${getButtonStyles(gender === "boy").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(gender === "boy").style}
              onClick={() => setGender("boy")}
            >
              Boy
            </button>
            <button
              className={`${getButtonStyles(gender === "girl").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(gender === "girl").style}
              onClick={() => setGender("girl")}
            >
              Girl
            </button>
          </div>
        </div>

        {/* Shirt Style Options */}
        <div>
          <p className="text-gray-800 text-4xl mb-6 font-extrabold">Shirt Style</p>
          <div className="flex space-x-8">
            <button
              className={`${getButtonStyles(shirtStyle === "shirt").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(shirtStyle === "shirt").style}
              onClick={() => setShirtStyle("shirt")}
            >
              Shirt
            </button>
            <button
              className={`${getButtonStyles(shirtStyle === "polo").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(shirtStyle === "polo").style}
              onClick={() => setShirtStyle("polo")}
            >
              Polo
            </button>
          </div>
        </div>

        {/* Eyewear Options */}
        <div>
          <p className="text-gray-800 text-4xl mb-6 font-extrabold">Eyewear</p>
          <div className="flex space-x-8">
            <button
              className={`${getButtonStyles(eyewear === "none").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(eyewear === "none").style}
              onClick={() => setEyewear(null)}
            >
              None
            </button>
            <button
              className={`${getButtonStyles(eyewear === "glasses").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(eyewear === "glasses").style}
              onClick={() => setEyewear("glasses")}
            >
              With Glasses
            </button>
          </div>
        </div>

        {/* College Options */}
        <div>
          <p className="text-gray-800 text-4xl mb-6 font-extrabold">College</p>
          <div className="grid grid-cols-2 gap-10">
            <button
              className={`${getButtonStyles(college === "cics").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(college === "cics").style}
              onClick={() => setCollege("cics")}
            >
              CICS
            </button>
            <button
              className={`${getButtonStyles(college === "coe").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(college === "coe").style}
              onClick={() => setCollege("coe")}
            >
              COE
            </button>
            <button
              className={`${getButtonStyles(college === "cafad").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(college === "cafad").style}
              onClick={() => setCollege("cafad")}
            >
              CAFAD
            </button>
            <button
              className={`${getButtonStyles(college === "cit").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(college === "cit").style}
              onClick={() => setCollege("cit")}
            >
              CIT
            </button>

            <button
              className={`${getButtonStyles(college === "cit").className} py-6 px-10 text-3xl`}
              style={getButtonStyles(college === "cit").style}
              onClick={() => router.push("/dashboard/homeTemp")}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Avatar Button */}
      <button
        className={`${getButtonStyles(false).className} mt-14 py-8 px-12 text-3xl text-sky-950`}
        style={getButtonStyles(false).style}
        onClick={handleConfirmAvatar}
      >
        Confirm Avatar
      </button>
    </div>
  );
};

export default CreateAvatar1;