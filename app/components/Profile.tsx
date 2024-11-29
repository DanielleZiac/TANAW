import React from "react";
import TextBoxPanel from "../styles/textBox"; 
interface ProfilePopupProps {
  closePopup: () => void; 
}
const ProfilePopup: React.FC<ProfilePopupProps> = ({ closePopup }) => {
  return (
    <div className="px-10 md:px-0">
      <TextBoxPanel>
        <div className="flex flex-col">
          <div className="flex flex-row gap-8">
            <div
              className="rounded-3xl w-[150px] h-[150px] flex-shrink-0 flex items-center justify-center"
              style={{
                backgroundColor: "white",
                boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
              }}
            ></div>
            <div className="flex flex-col gap-2 justify-center">
              <p className="font-bold lg:text-2xl text-gray-800">Jon Endrick Babao</p>
              <p className="font-semibold lg:text-2xl text-gray-800">22-01675</p>
              
                <div className="flex flex-row items-center gap-8 mt-4 hidden sm:block">
                  <div className="flex flex-col lg:text-lg">
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
        <div className="flex flex-row items-center gap-8 mt-4 sm:hidden">
          <div className="flex flex-col lg:text-lg">
            <p className="font-bold text-gray-600">Batangas State University</p>
            <p className="font-bold text-gray-600">CICS</p>
          </div>
        </div>
            
      </TextBoxPanel>
    </div>
    
  );
};
export default ProfilePopup;