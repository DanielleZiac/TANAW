"use client";

import MainLayout from "../../components/layouts/MainLayout"; // Adjust the path based on your file structure
import Stickers from "../../components/Stickers"; // Import the content component

const StickersPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center px-10 py-8">
        <Stickers /> {/* Render the Explore content */}
      </div>
    </MainLayout>
  );
};

export default StickersPage;