"use client";

import MainLayout from "../../components/layouts/MainLayout";
import Explore from "../../components/Explore";

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