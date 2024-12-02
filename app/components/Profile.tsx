"use client"

import React, {useEffect, useState} from "react";
import TextBoxPanel from "../styles/textBox"; 

import { authenticateUser, getUserById, deleteUserById } from "../dashboard/actions";

import ButtonBox from "../styles/buttonBox";


interface ProfilePopupProps {
  closePopup: () => void; 
}

interface UserData {
  sr_code: String, 
  email: String, 
  first_name: String, 
  last_name: String, 
  institutions: Array<{ institution_id: string, institution: string, campus: string }>,
  departments: Array<{ department: String }>, 
  avatars: Array<{ avatar_url: string }>
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ closePopup }) => {

  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [userId, setUserId] = useState<String | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const user_id: string = await authenticateUser();
      const user_data: UserData | undefined = await getUserById(user_id)
      setUserData(user_data)
      setUserId(user_id)
    }

    getUserData();
  }, [])

  // console.log(userData)

  const deleteUser = () => {
    // console.log(userId)

    if (userId) {
      deleteUserById(userId);
    }
  }

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
            >
              {userData?.avatars[0].avatar_url ? 
                <img src={userData.avatars[0].avatar_url} alt="User Avatar" />
               : 
                <p>Loading avatar...</p>
              }
            </div>
            {userData?.first_name 
              && userData?.last_name 
              && userData?.sr_code 
              && userData?.institutions[0].institution 
              && userData?.departments[0].department ? 
                <div className="flex flex-col gap-2 justify-center">
                <p className="font-bold lg:text-2xl text-gray-800">{userData.first_name} {userData.last_name}</p>
                <p className="font-semibold lg:text-2xl text-gray-800">{userData.sr_code}</p>
                
                  <div className="flex flex-row items-center gap-8 mt-4 hidden sm:block">
                    <div className="flex flex-col lg:text-lg">
                      <p className="font-bold text-gray-600">{userData.institutions[0].institution}</p>
                      <p className="font-bold text-gray-600">{userData.departments[0].department}</p>
                    </div>
                  </div>
              
              </div>
             : 
              <p>Loading user data...</p>
            }
            <button
              onClick={closePopup}
              className="self-start rounded -mt-2"
            >
              X
            </button>
          </div>
          
        <div className="flex flex-row items-center gap-8 mt-4 sm:hidden">
          <div className="flex flex-col lg:text-lg">
            <p className="font-bold text-gray-600">Batangas State University</p>
            <p className="font-bold text-gray-600">CICS</p>
          </div>
        </div>
          <div className="flex flex-row w-full mt-8 gap-8">
            <ButtonBox style={{width: '50%'}}>
              Profile Settings
            </ButtonBox>
            <ButtonBox onClick={deleteUser} style={{width: '50%'}}>
              Delete Account
            </ButtonBox>
          </div>
        </div>
      </TextBoxPanel>
    </div>
    
  );
};
export default ProfilePopup;