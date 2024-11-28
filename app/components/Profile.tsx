import React from "react";
import TextBoxPanel from "../styles/textBox";

interface ProfilePopupProps {
  closePopup: () => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ closePopup }) => {
  return (
    <TextBoxPanel>
      <div className="flex flex-col p-4 sm:p-6 relative mt-30">
        {/* Close Button Inside Panel */}
        <div className="flex justify-end -mt-5">
          <button
            onClick={closePopup}
            className="rounded-full bg-gray-200 xl:pt-1 text-gray-800 text-lg sm:text-xl font-bold hover:bg-gray-300"
          >
            X
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-2">
          {/* Profile Picture */}
          <div
            className="rounded-3xl w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center mx-auto sm:mx-0"
            style={{
              backgroundColor: "white",
              boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
            }}
          ></div>

          {/* User Info */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <p className="font-bold text-lg sm:text-2xl text-gray-800">
              Jon Endrick Babao
            </p>
            <p className="font-semibold text-lg sm:text-2xl text-gray-800">
              22-01675
            </p>
            <div className="flex flex-col text-sm sm:text-lg gap-1 mt-4">
              <p className="font-bold text-gray-600">Batangas State University</p>
              <p className="font-bold text-gray-600">CICS</p>
            </div>
          </div>
        </div>
      </div>
    </TextBoxPanel>
  );
};

export default ProfilePopup;
