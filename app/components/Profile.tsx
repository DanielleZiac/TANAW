"use client";

import React from 'react';
import ButtonBox from '../styles/buttonBox'; // Adjust the import path based on your project structure

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-5 bg-transparent min-h-screen p-6">
      {/* Cover Photo */}
      <div className="relative h-40 w-screen  overflow-hidden">
        <img
          src="/images/SDGlink1.jpg" // Replace with the actual cover photo URL
          alt="Cover Photo"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Profile Picture */}
      <div className="relative -mt-10">
        <div className="relative">
          <img
            src="/images/SDG1.jpg" // Replace with the actual profile picture URL
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-bgStart"
          />
        </div>
      </div>

      {/* Name and Bio */}
      <div className="mt-4 text-center">
        <h1 className="text-xl text-black font-bold">Paul Oliver Cruz</h1>
        <p className="text-gray-500">..</p>
      </div>

      {/* Friends, Actions, and Info */}
      <div className="mt-6 w-full flex flex-col items-center gap-4">
        {/* Friends */}
        <p className="text-sm text-gray-600">
          <span className="font-semibold">474 friends</span>
        </p>

        {/* Action Buttons */}
        <div className="flex">
          <ButtonBox onClick={() => console.log('Edit Profile clicked ')}>
            EDIT PROFILE
          </ButtonBox>
        </div>

        {/* Additional Information */}
        <div className="mt-4 w-full px-4">
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <span className="font-semibold">Studies at</span> Batangas State University - Alangilan Campus
            </li>
            <li>
              <span className="font-semibold">Went to</span> DepEd Tayo Bauan Technical Integrated HS - Batangas Province
            </li>
            <li>
              <span className="font-semibold">Lives in</span> Bauan, Batangas
            </li>
            <li>
              <span className="font-semibold">From</span> Bauan, Batangas
            </li>
            <li>
              <button className="text-blue-600">See more about yourself</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
