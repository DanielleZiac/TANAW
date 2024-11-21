"use client";

import React, { useState } from 'react';
import { FaBars, FaTrophy } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Dynamic background color based on the current route
  const navColor = pathname === '/home' ? 'bg-bgStart' : 'bg-lightGray';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between ${navColor} shadow-md`}
      >
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-navGray hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cBlue md:hidden"
        >
          <FaBars size={30} />
        </button>

        {/* App Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Tanaw
        </h1>

        {/* Leaderboard Icon */}
        <Link href="/leaderboard">
          <button
            aria-label="View Leaderboard"
            className="text-navGray hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cBlue"
          >
            <FaTrophy size={30} />
          </button>
        </Link>
      </nav>

      {/* Side Panel for Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-44 p-6 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          aria-label="Close Menu"
          className="absolute top-4 right-4 text-neutral-500 hover:text-gray-100 focus:outline-none text-2xl"
        >
          ✕
        </button>

        {/* Menu Links */}
        <ul className="mt-20 space-y-6 text-neutral-800">
          <li className="hover:text-cBlue cursor-pointer text-lg">
            <Link href="component/LearnMore">About Us</Link>
          </li>
          <li className="hover:text-cBlue cursor-pointer text-lg">
            <Link href="component/LearnMore">Help Center</Link>
          </li>
          <li className="hover:text-cBlue cursor-pointer text-lg">
            <Link href="/feedback">Feedback</Link>
          </li>
          <li className="hover:text-cBlue cursor-pointer text-lg">
            <Link href="/view-report-photos">Terms and Conditions</Link>
          </li>
        </ul>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={toggleMenu}
        />
      )}

      
      
    </>
  );
};

export default TopNav;
