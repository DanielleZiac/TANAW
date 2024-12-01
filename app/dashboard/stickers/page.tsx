// "use client";

import MainLayout from "../../components/layouts/MainLayout"; // Adjust the path based on your file structure
import Stickers from "../../components/Stickers"; // Import the content component
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar, getUserSdgs, getAvatarComponents } from "../actions";

const StickersPage = async () => {
  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const user_sdgs = await getUserSdgs(user_id)
  const user_avatar = await getAvatarComponents(user_id)

  // const hasAvatar = await checkUserAvatar(user_id)
  // if (!hasAvatar) {
  //   redirect('/dashboard/createAvatar1')
  //   return 
  // }

  return (
    <MainLayout>
      <Stickers data={[user_sdgs, user_avatar]}/> 
    </MainLayout>
  );
};

export default StickersPage;