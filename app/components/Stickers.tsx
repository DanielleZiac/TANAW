"use client";

import React from "react";
import mergeImages from "merge-images";
import { getButtonStyles } from "../styles/buttonStyles"; // Ensure the path to buttonStyles is correct

interface UserSdgs {
  user_id: String,
  sdg_number: String
}

interface UserAvatar {
  avatar_id: String, 
  bg: String, 
  eye: String, 
  sex: String, 
  shirt_style: String, 
  smile: String, 
  avatar_url: String,
  eyewear?: String
}


interface DataProps {
  user_sdgs: UserSdgs,
  user_avatar: UserAvatar
}

const sdgs = {
  "sdg1": "No Poverty",
  "sdg2": "Zero Hunger",
  "sdg3": "Good Health and Well-Being",
  "sdg4": "Quality Education",
  "sdg5": "Gender Equality",
  "sdg6": "Clean Water and Sanitation",
  "sdg7": "Affordable and Clean Energy",
  "sdg8": "Decent Work and Economic Growth",
  "sdg9": "Industry, Innovation and Infrastructure",
  "sdg10": "Reduced Inequality",
  "sdg11": "Sustainable Cities and Communities",
  "sdg12": "Responsible Consumption and Production",
  "sdg13": "Climate Action",
  "sdg14": "Life Below Water",
  "sdg15": "Life on Land",
  "sdg16": "Peace, Justice and Strong Institutions",
  "sdg17": "Partnerships for the Goals",
}



const Avatar: React.FC<UserAvatar> = ({data}) => {
  const user_avatar = data[0]
  const sdg = data[1]
  const index = data[2]
  const isLocked = data[3]

  return (
    <div
      key={index}
      id={`${sdg}`}
      className={`${getButtonStyles(false).className} flex items-center p2 ${isLocked ? "bg-gray-200" : "bg-blue-300"} shadow-md`}
      style={getButtonStyles(false).style}
    >
      <img id={`${sdg}-bg`} src={`/images/avatar/sdg/background_${sdg.toUpperCase()}.png`} className="absolute w-10 h-10 rounded-full"/>
      <img id={`${sdg}-sex`} src={`/images/avatar/sex/${user_avatar.sex}.png`} className="absolute w-10 h-10 rounded-full"/>
      <img id={`${sdg}-shirt_style`} src={`/images/avatar/shirt_style/${user_avatar.shirt_style}.png`} className="absolute w-10 h-10 rounded-full" />
      {user_avatar.eyewear && (
        <img id={`${sdg}-eyewear`} id="eyewear" src={`/images/avatar/eye/${user_avatar.eyewear}.png`} className="absolute w-10 h-10 rounded-full" />
      )}
      <img id={`${sdg}-eye`} src={`/images/avatar/eye/${user_avatar.eye}.png`} className="absolute w-10 h-10 rounded-full" />
      <img id={`${sdg}-smile`} src={`/images/avatar/mouth/${user_avatar.smile}.png`} className="absolute w-10 h-10 rounded-full" />
      
      {/* adjust sa right  */}
      {isLocked ? 
        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">🔒</span>
        </div> :
        null
      }
      <span className="ml-4 text-sm font-medium text-gray-800"> 
        SDG {Object.keys(sdgs).indexOf(sdg) + 1}: {sdgs[sdg]}
      }
      </span>
    </div>
  )
}


async function claim(user_sdgs) {
  console.log("download all photos")

  console.log(user_sdgs)
  const avatar = {}

  user_sdgs.forEach(async (sdg) => {
    const elements = [
      `${sdg}-bg`,
      `${sdg}-sex`,
      `${sdg}-shirt_style`,
      `${sdg}-eyewear`,
      `${sdg}-eye`,
      `${sdg}-smile`
    ].map((id) => document.getElementById(id) as HTMLImageElement);

    const base64 = await mergeImages(elements.map((el) => el?.src).filter(Boolean));

    const sdgElem = document.getElementById(sdg)
    const link = document.createElement("a")
    const t = document.createTextNode("download");
    link.setAttribute("href", base64)
    link.setAttribute("download", "Image.png")
    link.click()
  })

  console.log(avatar)
}


const Profile: React.FC<UserSdgs> = ({ data }) => {
  // console.log(data)
  const data_sdgs = data[0]
  const data_avatar = data[1][0]

  const user_sdgs = []

  for (const key of Object.keys(data_sdgs)) {
    user_sdgs.push(data_sdgs[key]["sdg_number"])
  }

  let locked_sdgs = Object.keys(sdgs).filter(x => !user_sdgs.includes(x));

  return (
    <div className="lg:ml-64 min-h-screen bg-transparent w-screen lg:w-[80vw] flex justify-center mt-12 mb-14 px-4 py-6">
      {/* Main Content */}
      <div className="mt-8 space-y-8 flex flex-col w-[80vw] items-center">
        {/* Edit Avatar Section */}
        <section className="w-full lg:w-[20vw] lg:items-center lg:justify-center">
          <h2 className="text-sm font-semibold text-gray-600 text-center border-t border-b border-gray-300 py-2">
            EDIT AVATAR 
          </h2>
          <div
            className={`${getButtonStyles(false).className} mt-4 flex bg-white p-2 shadow-md`}
            style={getButtonStyles(false).style}
          >
            <img
              src={data_avatar.avatar_url}
              alt="Avatar"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </section>

        {/* My Stickers Section */}
        <div className="flex flex-col w-full lg:flex-row gap-8 lg:justify-center">
          <section>
            <h2 className="text-sm font-semibold lg:w-[35vw] text-gray-600 text-center border-t border-b border-gray-300 py-2">
              MY STICKERS
            </h2>
            {user_sdgs.map((sdg, index) => {
              return(
                <Avatar key={`unlocked-${index}`} data={[data_avatar, sdg, index, false]}/>
              )
            })}
          </section>

          {/* Locked Section */}
          <section>
            <h2 className="text-sm lg:w-[35vw] font-semibold text-gray-600 text-center border-t border-b border-gray-300 py-2">
              LOCKED
            </h2>
            <div className="space-y-2 mt-2">
              {locked_sdgs.map((sdg, index) => {
                return (
                  <Avatar key={`locked-${index}`} data={[data_avatar, sdg, index, true]}/>
                )
              })}
            </div>
          </section>
        </div>

        {/* Claim Button */}
        <div className="flex justify-center mt-6 w-[80vw]">
          <button
            className={`${getButtonStyles(true).className} w-full max-w-sm py-3 text-lg font-bold`}
            style={getButtonStyles(true).style}
            onClick={() => claim(user_sdgs)}
          >
            CLAIM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;