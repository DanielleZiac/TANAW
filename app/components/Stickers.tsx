"use client";

import React, {useState} from "react";
import mergeImages from "merge-images";
import { getButtonStyles } from "../styles/buttonStyles"; // Ensure the path to buttonStyles is correct
import { FaLock, FaTimes } from "react-icons/fa"
import { useRouter } from 'next/navigation';

interface UserSdgs {
  user_id: string;
  sdg_number: string;
}

interface UserAvatar {
  avatar_id: string;
  bg: string;
  eye: string;
  sex: string;
  shirt_style: string;
  smile: string;
  avatar_url: string;
  eyewear?: string;
}


interface AvatarProps {
  data: Array<UserAvatar | undefined | number | String | boolean>
}

interface DataProps {
  data : [
    user_sdgs: Array<UserSdgs> | undefined,
    user_avatar: UserAvatar | undefined
  ]
}

const sdgs = {
  sdg1: "No Poverty",
  sdg2: "Zero Hunger",
  sdg3: "Good Health and Well-Being",
  sdg4: "Quality Education",
  sdg5: "Gender Equality",
  sdg6: "Clean Water and Sanitation",
  sdg7: "Affordable and Clean Energy",
  sdg8: "Decent Work and Economic Growth",
  sdg9: "Industry, Innovation and Infrastructure",
  sdg10: "Reduced Inequality",
  sdg11: "Sustainable Cities and Communities",
  sdg12: "Responsible Consumption and Production",
  sdg13: "Climate Action",
  sdg14: "Life Below Water",
  sdg15: "Life on Land",
  sdg16: "Peace, Justice and Strong Institutions",
  sdg17: "Partnerships for the Goals",
};

const Avatar: React.FC<AvatarProps> = ( {data} ) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState("");

  const user_avatar: UserAvatar | undefined = data[0] as UserAvatar | undefined;
  const sdg: string = data[1] as string;
  const index: number = data[2] as number;
  const isLocked: boolean = data[3] as boolean;


  const handleAvatarClick = () => {
    setPopupImage(`/images/avatar/sdg/background_${sdg.toUpperCase()}.png`);
    setIsPopupOpen(true);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* Button */}
      {user_avatar ? 
        <button
          key={index}
          id={`${sdg}`}
          onClick={openPopup}
          className={`${getButtonStyles(false).className} relative flex items-center p-2 ${
            isLocked ? "bg-gray-200" : "bg-blue-300"
          } shadow-md rounded-lg`}
          style={getButtonStyles(false).style}
        >
          {/* Avatar layers */}
          <img
            id={`${sdg}-bg`}
            src={`/images/avatar/sdg/background_${sdg.toUpperCase()}.png`}
            className="absolute w-10 h-10 rounded-full"
          />
          <img
            id={`${sdg}-sex`}
            src={`/images/avatar/sex/${user_avatar.sex}.png`}
            className="absolute w-10 h-10 rounded-full"
          />
          <img
            id={`${sdg}-shirt_style`}
            src={`/images/avatar/shirt_style/${user_avatar.shirt_style}.png`}
            className="absolute w-10 h-10 rounded-full"
          />
          {user_avatar.eyewear && (
            <img
              id={`${sdg}-eyewear`}
              src={`/images/avatar/eye/${user_avatar.eyewear}.png`}
              className="absolute w-10 h-10 rounded-full"
            />
          )}
          <img
            id={`${sdg}-eye`}
            src={`/images/avatar/eye/${user_avatar.eye}.png`}
            className="absolute w-10 h-10 rounded-full"
          />
          <img
            id={`${sdg}-smile`}
            src={`/images/avatar/mouth/${user_avatar.smile}.png`}
            className="absolute w-10 h-10 rounded-full"
          />

          {/* Lock Overlay when locked */}
          {isLocked && (
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg z-20">
              <FaLock className="text-white text-lg" />
            </div>
          )}

          {/* SDG Info */}
          <span
            className={`ml-16 text-sm font-medium ${
              isLocked ? "text-gray-400" : "text-gray-800"
            }`}
          >
            SDG {Object.keys(sdgs).indexOf(sdg) + 1}: {sdgs[sdg as keyof typeof sdgs]}
          </span>
        </button>
      : <div>Loading Avatar...</div>}

  
      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg pl-4 py-2">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 z-30"
              onClick={closePopup}
            >
              <FaTimes />
            </button>
  
            {/* Layered Avatar Images */}
            {user_avatar 
              ? 
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                  <img
                    src={`/images/avatar/sdg/background_${sdg.toUpperCase()}.png`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src={`/images/avatar/sex/${user_avatar.sex}.png`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src={`/images/avatar/shirt_style/${user_avatar.shirt_style}.png`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  {user_avatar.eyewear && (
                    <img
                      id="eyewear"
                      src={`/images/avatar/eye/${user_avatar.eyewear}.png`}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  )}
                  <img
                    src={`/images/avatar/eye/${user_avatar.eye}.png`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src={`/images/avatar/mouth/${user_avatar.smile}.png`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              : 
                <div>Loading Avatar...</div>
            }

  
            {/* Lock Overlay in Popup when locked */}
            {isLocked && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg z-20">
                <FaLock className="text-white text-2xl" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

async function claim(user_sdgs: Array<string>) {
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
    link.setAttribute("download", `${sdg}.png`)
    link.click()
  })

  console.log(avatar)
}

const Profile: React.FC<DataProps> = ({ data }) => {

  const router = useRouter();

  const data_sdgs = data[0];
  const data_avatar = data[1];

  const user_sdgs: Array<string> = [];

  data_sdgs?.forEach((data_sdg) => {
    user_sdgs.push(data_sdg['sdg_number'])
  })


  let locked_sdgs = Object.keys(sdgs).filter((x) => !user_sdgs.includes(x));


  const editAvatar = () => {
    router.push("/dashboard/createAvatar1")
  }

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
            onClick={editAvatar}
            className={`${getButtonStyles(false).className} mt-4 flex bg-white p-2 shadow-md`}
            style={getButtonStyles(false).style}
          >
            <img
              src={data_avatar?.avatar_url ? data_avatar?.avatar_url : ""}
              alt="Avatar"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </section>

        {/* My Stickers Section */}
        <div className="flex flex-col w-full lg:flex-row gap-8 lg:justify-center">
          <section>
            <h2 className="text-sm font-semibold lg:w-[35vw] text-gray-600 text-center border-t border-b border-gray-300 py-2 mb-2">
              MY STICKERS
            </h2>
            {user_sdgs.map((sdg, index) => (
              <Avatar
                key={`unlocked-${index}`}
                data={[data_avatar, sdg, index, false]}
              />
            ))}
          </section>

          {/* Locked Section */}
          <section>
            <h2 className="text-sm lg:w-[35vw] font-semibold text-gray-600 text-center border-t border-b border-gray-300 py-2">
              LOCKED
            </h2>
            <div className="space-y-2 mt-2">
              {locked_sdgs.map((sdg, index) => (
                <Avatar
                  key={`locked-${index}`}
                  data={[data_avatar, sdg, index, true]}
                />
              ))}
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
