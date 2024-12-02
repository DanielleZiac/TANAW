// "use client";

import MainLayout from "../../components/layouts/MainLayout"; // Adjust the path based on your file structure
import Stickers from "../../components/Stickers"; // Import the content component
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar, getUserSdgs, getAvatarComponents } from "../actions";

interface UserSdgs {
  user_id: String;
  sdg_number: String;
}

interface UserAvatar {
  avatar_id: String;
  bg: String;
  eye: String;
  sex: String;
  shirt_style: String;
  smile: String;
  avatar_url: String;
  eyewear?: String;
}


const StickersPage = async () => {
  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const user_sdgs: Array<UserSdgs> | undefined = await getUserSdgs(user_id)
  const user_avatar: UserAvatar | undefined = await getAvatarComponents(user_id)

  return (
    <MainLayout>
      <Stickers data={[user_sdgs, user_avatar]}/> 
    </MainLayout>
  );
};

export default StickersPage;