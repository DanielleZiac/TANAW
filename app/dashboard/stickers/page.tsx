// "use client";

import MainLayout from "../../components/layouts/MainLayout"; // Adjust the path based on your file structure
import Stickers from "../../components/Stickers"; // Import the content component
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

const StickersPage = async () => {
  const data = await authenticateUser()
  const hasAvatar = await checkUserAvatar()
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }


  return (
    <MainLayout>
      <Stickers /> 
    </MainLayout>
  );
};

export default StickersPage;