// "use client";

import MainLayout from "../../components/layouts/MainLayout"; // Adjust the path based on your file structure
import Stickers from "../../components/Stickers"; // Import the content component
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

const StickersPage = async () => {
  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  // const hasAvatar = await checkUserAvatar(user_id)
  // if (!hasAvatar) {
  //   redirect('/dashboard/createAvatar1')
  //   return 
  // }


  return (
    <MainLayout>
      <Stickers /> 
    </MainLayout>
  );
};

export default StickersPage;