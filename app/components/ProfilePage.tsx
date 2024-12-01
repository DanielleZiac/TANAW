"use client";

import React from "react";
import ButtonBox from "../styles/buttonBox";
import InputBox from "../styles/inputBox";

const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:ml-64 p-4 lg:p-0 lg:pl-32 mt-20 bg-lightGray w-screen lg:w-full h-screen mb-96 lg:mb-40">
      {/* Profile Header */}
      <div className="flex flex-row gap-8 items-center">
        <div
          className="rounded-3xl w-[150px] h-[150px] flex-shrink-0 flex items-center justify-center"
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
          }}
        ></div>
        <div className="flex flex-col gap-2">
          <p className="text-xl lg:text-3xl font-extrabold">Juan Dela Cruz</p>
          <p className="lg:text-xl font-bold">22-01010</p>
          <p className="lg:text-lg">Batangas State University</p>
          <p className="lg:text-lg">CICS</p>
        </div>
      </div>

      
      {/* Profile Settings */}

      

      <div className="flex flex-col gap-8 items-start">
        <div className="flex flex-row gap-4 w-full mt-10">
            <hr className="border border-gray-400 w-1/2"/>
            <ButtonBox style={{ width: "200px", padding: "10px", borderRadius: "45px", marginTop: '-20px', marginBottom: '20px' }}>
              Edit Avatar
            </ButtonBox>
            <hr className="border border-gray-400 w-1/2"/>  
        </div>

          
        <p className="text-lg font-bold">Profile Settings</p>
        <hr className="border border-gray-400 w-full"/>
        {/* Email Update Section */}
        <div className="grid grid-cols-[auto,1fr] items-center gap-y-4 gap-x-24 w-full">
          <p className="text-left font-medium">Current Email:</p>
          <p className="text-gray-700">juandelacruz@gmail.com</p>

          <p className="text-left font-medium">New Email:</p>
          <InputBox
            placeholder="Enter New Email"
            style={{
              width: "100%",
              height: "40px",
            }}
          />
        </div>
        <div className="flex flex-row gap-4 w-full">
          <hr className="border border-gray-400 w-1/2"/>
          <ButtonBox style={{ width: "200px", padding: "10px", borderRadius: "45px", marginTop: '-20px', marginBottom: '20px' }}>
            Update Email
          </ButtonBox>
          <hr className="border border-gray-400 w-1/2"/>  
        </div>
        

        {/* Password Update Section */}
        <div className="grid grid-cols-[auto,1fr] items-center gap-y-4 gap-x-6 w-full">
          <p className="text-left font-medium -mt-4">Current Password:</p>
          <InputBox 
            placeholder="Enter Current Password"
            style={{
              width: "100%",
              height: "40px",
            }}
          />

          <p className="text-left font-medium -mt-4">New Password:</p>
          <InputBox
            placeholder="Enter New Password"
            style={{
              width: "100%",
              height: "40px",
            }}
          />

          <p className="text-left font-medium -mt-4">Confirm New Password:</p>
          <InputBox
            placeholder="Re-enter New Password"
            style={{
              width: "100%",
              height: "40px",
            }}
          />
        </div>
        <div className="flex flex-row gap-4 w-full">
          <hr className="border border-gray-400 w-1/3 lg:w-1/2"/>
          <ButtonBox style={{ width: "200px", padding: "10px", borderRadius: "45px", marginTop: '-20px' }}>
            Reset Password
          </ButtonBox>
          <hr className="border border-gray-400 w-1/3 lg:w-1/2"/>  
        </div>

        {/* Delete Account Section */}
        <div className="flex w-full justify-center lg:justify-start">
          <ButtonBox
            style={{
              width: "150px",
              padding: "10px",
              borderRadius: "45px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Delete Account
          </ButtonBox>
        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;
