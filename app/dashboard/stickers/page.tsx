// "use client";

import MainLayout from "../../components/layouts/MainLayout"; // Adjust the path based on your file structure
import Stickers from "../../components/Stickers"; // Import the content component

import { authenticateUser } from "../actions";

const StickersPage = async () => {
  const data = await authenticateUser()
  return (
    <MainLayout>
      <Stickers /> 
    </MainLayout>
  );
};

export default StickersPage;