"use client";

import React from "react";
import { getButtonStyles } from "../styles/buttonStyles"; // Ensure the path to buttonStyles is correct

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent px-4 py-6 w-screen">
     

      {/* Main Content */}
      <div className="mt-6 space-y-8">
        {/* Edit Avatar Section */}
        <section>
          <h2 className="text-sm font-semibold text-gray-600 text-center border-t border-b border-gray-300 py-2">
            EDIT AVATAR 
          </h2>
          <div
            className={`${getButtonStyles(false).className} mt-4 flex bg-white  p-2 shadow-md`}
            style={getButtonStyles(false).style}
          >
            <img
              src="images/SDG1.jpg"
              alt="Avatar"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </section>

        {/* My Stickers Section */}
        <section>
          <h2 className="text-sm font-semibold text-gray-600 text-center border-t border-b border-gray-300 py-2">
            MY STICKERS
          </h2>
          <div className="space-y-2 mt-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`${getButtonStyles(false).className} flex items-center  bg-blue-300 p-2 shadow-md`}
                style={getButtonStyles(false).style}
              >
                <img
                  src="/path/to/sticker-image.png"
                  alt={`Sticker ${index + 1}`}
                  className="w-10 h-10 rounded-full"
                />
                <span className="ml-4 text-sm font-medium text-gray-800">
                  Sticker {index + 1}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Locked Section */}
        <section>
          <h2 className="text-sm font-semibold text-gray-600 text-center border-t border-b border-gray-300 py-2">
            LOCKED
          </h2>
          <div className="space-y-2 mt-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`${getButtonStyles(false).className} flex items-center p-2 bg-gray-200 shadow-md`}
                style={getButtonStyles(false).style}
              >
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🔒</span>
                </div>
                <span className="ml-4 text-sm font-medium text-gray-500">
                  Locked Sticker2 {index + 1}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Claim Button */}
        <div className="flex justify-center mt-6">
          <button
            className={`${getButtonStyles(true).className} w-full max-w-sm py-3 text-lg font-bold`}
            style={getButtonStyles(true).style}
          >
            CLAIM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
