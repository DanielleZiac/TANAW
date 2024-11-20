"use client";

import MainLayout from "../components/layouts/MainLayout"; // Adjust the path based on your file structure
import Explore from "../components/Explore"; // Import the content component

const ExplorePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center px-10 py-8">
        <Explore /> {/* Render the Explore content */}
      </div>
    </MainLayout>
  );
};

export default ExplorePage;
