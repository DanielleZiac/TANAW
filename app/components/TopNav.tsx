"use client";

import React, { useState } from "react";
import { FaBars, FaInfoCircle, FaQuestionCircle, FaRegComments, FaFileAlt, FaCalendarAlt,  FaPhone, FaSignOutAlt } from "react-icons/fa";
import { LuSticker } from "react-icons/lu";
import { usePathname } from "next/navigation"; // usePathname is better suited for Next.js 13+
import Link from "next/link";
import { logout } from "../auth/actions";
import Feedback from "../components/Feedback";

const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); // Manage Feedback modal state
  const pathname = usePathname();

  // Dynamic background color based on the current route
  const navColor = pathname === "/home" ? "bg-bgStart" : "bg-lightGray";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openFeedback = () => setIsFeedbackOpen(true); // Open Feedback modal
  const closeFeedback = () => setIsFeedbackOpen(false); // Close Feedback modal

  const invisibleRoutes = ["/auth/login"];


  
  return (
    <div className="relative">
      {/* Top Navigation Bar for Mobile */}
      <nav
        className={`fixed top-0 left-0 w-full py-5 px-4 flex items-center justify-between z-50 ${navColor} md:hidden`}
      >
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center text-navGray hover:text-gray-200"
        >
          <FaBars size={30} />
        </button>

        {/* App Name */}
        <img
            src="/images/tanaw_darkblue.png"
            alt="Logo"
            className="w-30 h-9 justify-center"
          />
        {/* Leaderboard Icon */}
        <Link href="/dashboard/stickers">
          <button
            aria-label="View Leaderboard"
            className={`text-navGray hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cBlue ${
              invisibleRoutes.includes(pathname) ? "invisible" : ""
            }`}
          >
            <LuSticker size={30} />
          </button>
        </Link>
      </nav>

      {/* Side Panel for Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-neutral-200 shadow-lg w-64 p-6 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 lg:hidden`}
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
          <li className="flex items-center hover:text-cBlue cursor-pointer text-md sm:text-lg">
            <FaCalendarAlt className="mr-3" />
            <Link href="/dashboard/events">Events</Link>
          </li>
          <li className="flex items-center hover:text-cBlue cursor-pointer text-md sm:text-lg">
            <FaInfoCircle className="mr-3" />
            <Link href="/dashboard/aboutUs">About</Link>
          </li>
          <li className="flex items-center hover:text-cBlue cursor-pointer text-md sm:text-lg">
            <FaPhone className="mr-3" />
            <Link href="/contact">Contact</Link>
          </li>
          <li className="flex items-center hover:text-cBlue cursor-pointer text-md sm:text-lg">
            <FaQuestionCircle className="mr-3" />
            <Link href="/helpCenter">Help Center</Link>
          </li>
          <li
            className="flex items-center hover:text-cBlue cursor-pointer text-md sm:text-lg"
            
            onClick={openFeedback} // Trigger the Feedback modal
          >
            <FaRegComments className="mr-3" />
            Feedback
          </li>
          <li className="flex items-center hover:text-cBlue cursor-pointer text-md sm:text-lg">
            <FaFileAlt className="mr-3" />
            <Link href="/termsAndConditions">Terms and Conditions</Link>
          </li>
          <li
            className="flex items-center hover:text-cBlue cursor-pointer text-md sm:text-lg"
            onClick={() => {
              logout();
            }}
          >
            <FaSignOutAlt className="mr-3" />
            Logout
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

      {/* Feedback Modal */}
      <Feedback isOpen={isFeedbackOpen} onClose={closeFeedback} />
     
      {/* Top Navigation Bar for Desktop */}
      <div className="relative bg-orange-200 hidden md:block">
        <nav className="fixed top-0 left-0 w-full px-4 py-2 flex items-center justify-between lg:justify-end z-40 bg-[#e0e5e9] border-b-2 border-gray-400">
          
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden md:flex flex-col items-center text-navGray hover:text-gray-200"
          >
          <FaBars size={30} />
          </button>
          
          {/* Navigation Links */}
          <ul className="flex items-center space-x-32 text-black-700 text-base font-semibold pr-8">
            <li className="text-black hover:text-blue-900 cursor-pointer">
              <Link href="/dashboard/events">Events</Link>
            </li>
            <li className="text-black hover:text-blue-900 cursor-pointer">
              <Link href="/dashboard/aboutUs">About</Link>
            </li>
            <li className="text-black hover:text-blue-900 cursor-pointer">
              <Link href="/dashboard/contact">Contact</Link>  
            </li>
            {/* Logout Button */}
            <li>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
