"use client";

import React from "react";

const TopNav: React.FC = () => {
  return (
    <div className="relative bg-orange-200">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full px-4 py-4 flex items-center justify-end z-40 bg-[#e0e5e9] border-b-2 border-gray-400">
        {/* Navigation Links */}
        <ul className="flex space-x-32 text-black-700 text-base font-semibold pr-8">
          <li className="hover:text-gray-100 cursor-pointer">Events</li>
          <li className="hover:text-gray-100 cursor-pointer">About</li>
          <li className="hover:text-gray-100 cursor-pointer">Contact</li>
          <li className="hover:text-gray-100 cursor-pointer">Logout/Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
