"use client";

import React, { useState } from 'react';
import { FaBars, FaTrophy } from 'react-icons/fa';
import { usePathname } from 'next/navigation'; // usePathname is better suited for Next.js 13+

const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  // Apply different colors based on the current path
  const navColor = pathname === '/home' ? 'bg-bgStart' : 'bg-lightGray';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full py-6 px-4 flex items-center justify-between z-50 ${navColor}`}
      >
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center text-navGray hover:text-gray-200"
        >
          <FaBars size={50} />
        </button>

        {/* App Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">Tanaw</h1>

        {/* Leaderboard Icon */}
        <button className="flex flex-col items-center text-navGray hover:text-gray-200">
          <FaTrophy size={50} />
        </button>
      </nav>

      {/* Side Panel for Settings */}
      <div
        className={`fixed top-0 left-0 h-full bg-neutral-200 shadow-lg w-64 p-6 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        
        <ul className="space-y-4 text-neutral-500">
        <li className="hover:text-gray-100 mt-20 cursor-pointer text-2xl">Learn more about SDGs</li>
        <li className="hover:text-gray-100 cursor-pointer text-2xl">Feedback</li>
        <li className="hover:text-gray-100 cursor-pointer text-2xl">View & Report Photos</li>
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