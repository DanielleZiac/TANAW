"use client";

import React from 'react';
import TopNav from '../TopNav';
import Sidebar from "../Sidebar";
import Footer from '../Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-lightGray relative">
      {/* Sidebar */}
      <Sidebar />
      <div className="min-h-screen flex flex-col bg-lightGray">
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;