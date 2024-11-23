"use client";

import React from "react";

const TopNav: React.FC = () => {
  return (
    <div className="relative bg-orange-200">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full px-4 py-2 flex items-center justify-end z-40 bg-[#e0e5e9] border-b-2 border-gray-400">
        {/* Navigation Links */}
        <ul className="flex items-center space-x-32 text-black-700 text-base font-semibold pr-8">
          <li className="hover:text-blue-900 cursor-pointer">Events</li>
          <li className="hover:text-blue-900 cursor-pointer">About</li>
          <li className="hover:text-blue-900 cursor-pointer">Contact</li>
          {/* Logout Button */}
          <li>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => alert("Logged out!")}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
