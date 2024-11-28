"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getButtonStyles } from "../styles/buttonStyles"; // Importing getButtonStyles
import AvatarBox from "../styles/avatarBox"; // Assuming AvatarBox is a reusable component for the avatar display

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

  const handleConfirmAvatar = () => {
    const query = `gender=${gender}&shirtStyle=${shirtStyle}` + (eyewear ? `&eyewear=${eyewear}` : "") + `&college=${college}`;
    // console.log(query)
    router.push(`/dashboard/createAvatar2?${query}`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center w-screen lg:w-[90vw] lg:items-start lg:justify-center p-10 min-h-screen lg:ml-32 lg:gap-32">
      {/* Header */}
      <div className="mt-16 flex flex-col justify-center items-center lg:pl-32">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-sky-950 mb-10">
          Customize Your Avatar
        </h1>
          {/* Avatar Display Area */}
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] rounded-3xl bg-white shadow-md">
            {/* Background */}
            <img
              src={`/images/avatar/bg/bg_${college}.png`}
              alt={`${college} background`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gender */}
            <img
              src={`/images/avatar/sex/${gender}.png`}
              alt={gender}
              className="absolute inset-0 w-full h-full object-contain"
            />
            {/* Shirt Style */}
            <img
              src={`/images/avatar/shirt_style/${shirtStyle}.png`}
              alt={shirtStyle}
              className="absolute inset-0 w-full h-full object-contain"
            />
            {/* Eyewear */}
            {eyewear !== "none" && (
              <img
                src={`/images/avatar/eye/${eyewear}.png`}
                alt={eyewear}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
        </div>
      </div>
      
      
      <div className="w-[60vw] lg:w-auto">
        {/* Options */}
        <div className="w-full mt-20 flex flex-col gap-8 lg:gap-4">
          {/* Gender Options */}
          <div>
            <p className="text-gray-800 text-lg font-bold mb-2">Gender</p>
            <div className="flex space-x-4">
              <button
                className={`${getButtonStyles(gender === "boy").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(gender === "boy").style}
                onClick={() => setGender("boy")}
              >
                Boy
              </button>
              <button
                className={`${getButtonStyles(gender === "girl").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(gender === "girl").style}
                onClick={() => setGender("girl")}
              >
                Girl
              </button>
            </div>
          </div>

          {/* Shirt Style Options */}
          <div>
            <p className="text-gray-800 text-lg font-bold mb-2">Shirt Style</p>
            <div className="flex space-x-4">
              <button
                className={`${getButtonStyles(shirtStyle === "polo").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(shirtStyle === "polo").style}
                onClick={() => setShirtStyle("polo")}
              >
                Polo
              </button>
              <button
                className={`${getButtonStyles(shirtStyle === "shirt").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(shirtStyle === "shirt").style}
                onClick={() => setShirtStyle("shirt")}
              >
                Shirt
              </button>
            </div>
          </div>

          {/* Eyewear Options */}
          <div>
            <p className="text-gray-800 text-lg font-bold mb-2">Eyewear</p>
            <div className="flex flex-grow-0 space-x-4">
              <button
                className={`${getButtonStyles(eyewear === "none").className} py-2 px-6 text-lg flex justify-center w-[28vw] sm:w-full items-center lg:h-12`}
                style={getButtonStyles(eyewear === "none").style}
                onClick={() => setEyewear("none")}
              >
                None
              </button>
              <button
                className={`${getButtonStyles(eyewear === "glasses").className} py-2 px-6 text-base flex justify-center w-[28vw] sm:w-full items-center lg:h-12`}
                style={getButtonStyles(eyewear === "glasses").style}
                onClick={() => setEyewear("glasses")}
              >
                Glasses
              </button>
            </div>
          </div>

          {/* College Options */}
          <div>
            <p className="text-gray-800 text-lg font-bold mb-2">College</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`${getButtonStyles(college === "cics").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(college === "cics").style}
                onClick={() => setCollege("cics")}
              >
                CICS
              </button>
              <button
                className={`${getButtonStyles(college === "coe").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(college === "coe").style}
                onClick={() => setCollege("coe")}
              >
                COE
              </button>
              <button
                className={`${getButtonStyles(college === "cafad").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(college === "cafad").style}
                onClick={() => setCollege("cafad")}
              >
                CAFAD
              </button>
              <button
                className={`${getButtonStyles(college === "cet").className} py-2 px-6 text-lg flex justify-center items-center lg:h-12`}
                style={getButtonStyles(college === "cet").style}
                onClick={() => setCollege("cet")}
              >
                CET
              </button>
            </div>
          </div>
        </div>

        {/* Confirm Avatar Button */}
        <button
          className={`${getButtonStyles(false).className} mt-10 py-4 px-8 text-lg font-bold text-sky-950 mb-32 lg:mb-16`}
          style={getButtonStyles(false).style}
          onClick={handleConfirmAvatar}
        >
          <div className="text-gray-400 text-2xl">{gender} {shirtStyle} {eyewear} {college}</div>

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
