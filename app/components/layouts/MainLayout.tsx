"use client";

import React from 'react';
import TopNav from '../TopNav';
import Footer from '../Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-lightGray z-50 ">
      <header className= "fixed z-50">
      <TopNav />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="fixed bottom-0  left-0 right-0 bg-footerGray p-4 z-50">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
