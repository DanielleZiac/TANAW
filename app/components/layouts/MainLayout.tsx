"use client";

import React from "react";
import TopNav from "../TopNav";
import Sidebar from "../Sidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-lightGray relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-24 relative"> {/* Lower z-index than the sidebar */}
        <TopNav />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
