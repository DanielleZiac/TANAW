"use client";

import React, { useState } from "react";
import { FaBars, FaTrophy } from "react-icons/fa";

const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative bg-orange-200 hidden">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full py-6 px-4 flex items-center justify-between z-50 bg-neutral-200">
        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="flex flex-col items-center text-neutral-500 hover:text-gray-100">
          <FaBars size={80} className="md:size-50" />
        </button>

        {/* App Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-500">Tanaw</h1>

        {/* Leaderboard Icon */}
        <button className="flex flex-col items-center text-neutral-500 hover:text-gray-100">
          <FaTrophy size={80} className="md:size-50" />
        </button>
      </nav>

      {/* Side Panel for Settings */}
      <div
        className={`fixed top-0 left-0 h-full bg-neutral-200 shadow-lg w-64 p-6 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <h2 className="text-2xl font-semibold mb-4 text-neutral-500">Settings</h2>
        <ul className="space-y-4 text-neutral-500">
          <li className="hover:text-gray-100 cursor-pointer text-2xl">Account</li>
          <li className="hover:text-gray-100 cursor-pointer text-2xl">Notifications</li>
          <li className="hover:text-gray-100 cursor-pointer text-2xl">Privacy</li>
          <li className="hover:text-gray-100 cursor-pointer text-2xl">Help</li>
        </ul>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-neutral-500 hover:text-gray-100 focus:outline-none text-2xl"
        >
          ✕
        </button>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default TopNav;
