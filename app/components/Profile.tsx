// ProfilePopup.tsx
import React from "react";
import TextBoxPanel from "../styles/textBox"; // Adjust the path as necessary
import BSU from "/public/images/bsulogo.png"; // Adjust the path as necessary
import ButtonBox from "../styles/buttonBox"; // Adjust the path as necessary

interface ProfilePopupProps {
  closePopup: () => void; // A function to handle closing the popup
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ closePopup }) => {
  return (
    <TextBoxPanel>
      <div className="flex flex-col">
        <div className="flex flex-row gap-8">
          <div
            className="rounded-3xl w-[150px] h-[150px] flex items-center justify-center"
            style={{
              backgroundColor: "white",
              boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
            }}
          ></div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-gray-800">Jon Endrick Babao</p>
            <p className="font-semibold text-2xl text-gray-800">22-01675</p>
            
              <div className="flex flex-row items-center gap-8 mt-4">
                <div className="flex flex-col text-lg">
                  <p className="font-bold text-gray-600">Batangas State University</p>
                  <p className="font-bold text-gray-600">CICS</p>
                </div>
              </div>
          
          </div>
          <button
            onClick={closePopup}
            className="self-start rounded -mt-2"
          >
            X
          </button>
        </div>
      </div>
    </TextBoxPanel>
  );
};

export default ProfilePopup;
