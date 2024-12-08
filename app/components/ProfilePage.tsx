"use client";

import React from "react";
import ButtonBox from "../styles/buttonBox";
import InputBox from "../styles/inputBox";
import { useRouter } from "next/navigation";
import { deleteUserById } from "../dashboard/actions";

interface UserData {
  data : [
    user_data : {
      sr_code: String, 
      email: String, 
      first_name: String, 
      last_name: String, 
      institutions: Array<{ institution_id: string, institution: string, campus: string }>,
      departments: Array<{ department: String }>, 
      avatars: Array<{ avatar_url: string }>
    },
    user_id: string,
  ] | undefined
}


const ProfilePage: React.FC<UserData> = ({ data }) => {
  const router = useRouter()
  const user_data = data[0]
  const user_id = data[1]

  const editAvatar = () => {
    router.push("/dashboard/createAvatar1")
  }

  const deleteUser = () => {
    console.log(user_id)

    if (user_id) {
      deleteUserById(user_id);
    }
  }
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
        >
          <img className="rounded-3xl" src={user_data?.avatars.avatar_url} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl lg:text-3xl font-extrabold">{user_data?.first_name} {user_data?.last_name}</p>
          <p className="lg:text-xl font-bold">{user_data?.sr_code}</p>
          <p className="text-xs lg:text-lg">{user_data?.institutions.institution} - {user_data?.institutions.campus}</p>
          <p className="text-xs lg:text-lg">{user_data?.departments.department}</p>
        </div>
      </div>

      
      {/* Profile Settings */}
      <div className="flex flex-col gap-8 items-start">
        <div className="flex flex-row gap-4 w-full mt-10">
            <hr className="border border-gray-400 w-1/2"/>
            <ButtonBox onClick={editAvatar} style={{ width: "200px", padding: "10px", borderRadius: "45px", marginTop: '-20px', marginBottom: '20px' }}>
              Edit Avatar
            </ButtonBox>
            <hr className="border border-gray-400 w-1/2"/>  
        </div>

          
        <p className="text-lg font-bold -mt-10 sm:m-0">Profile Settings</p>
        <hr className="border border-gray-400 w-full"/>
        {/* Email Update Section */}
        <div className="grid grid-cols-[auto,1fr] items-center gap-y-2 sm:gap-y-4 gap-x-4 sm:gap-x-24 w-full">
          <p className="text-left font-medium">Current Email:</p>
          <p className="text-gray-700">{user_data?.email}</p>

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
        <div className="grid grid-cols-[auto,1fr] items-center gap-y-2 sm:gap-y-4 gap-x-6 w-full -mt-10 sm:m-0">
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
        <div onClick={deleteUser} className="flex w-full justify-center lg:justify-start">
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
