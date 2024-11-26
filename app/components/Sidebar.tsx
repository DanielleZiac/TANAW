"use client";

import React, { useEffect, useState } from "react";
import { FaHome, FaImage, FaInbox, FaUser, FaGlobeAsia, FaBars, FaCog, FaInfoCircle, FaQuestionCircle, FaRegComments, FaFileAlt } from "react-icons/fa";
import ProfilePopup from './Profile';

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  

  useEffect(() => {
    // Set currentPath on the client side after mount
    setCurrentPath(window.location.pathname);
  }, []);

  // Function to determine if a link is active
  const isActive = (path: string) => currentPath === path;

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => {
      const newState = !prev;
      // If dropdown is opened, we manually set the currentPath to "/more"
      if (newState) {
        setCurrentPath("/more");
      } else {
        setCurrentPath(""); // Reset to original path when dropdown is closed
      }
      return newState;
    });
  };

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const closePopup = () => setIsPopupVisible(false);

  return (
    <>
      <aside className="fixed top-0 left-0 h-full z-50 w-64 bg-gray-900 lg:flex flex-col items-center gap-4 py-8 px-4 hidden">
        {/* Placeholder Logo */}
        <div className="mb-4">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            LOGO
          </div>
        </div>

        {/* Navigation Links */}
        <a
          href="/dashboard/home"
          className={`flex items-center w-full py-3 px-4 text-white hover:text-blue-500 ${
            isActive("/dashboard/home") ? "font-bold" : "font-base"
          }`}
        >
          <FaHome
            size={24}
            className={`mr-4 ${isActive("/home") ? "scale-125" : "scale-100"}`}
          />
          <span className="text-base leading-none">Home</span>
        </a>
        <a
          href="/dashboard/gallery"
          className={`flex items-center w-full py-3 px-4 text-white hover:text-blue-500 ${
            isActive("/gallery") ? "font-bold" : "font-base"
          }`}
        >
          <FaImage
            size={24}
            className={`mr-4 ${isActive("/gallery") ? "scale-125" : "scale-100"}`}
          />
          <span className="text-base leading-none">Gallery</span>
        </a>
        <a
          href="/dashboard/explore"
          className={`flex items-center w-full py-3 px-4 text-white hover:text-blue-500 ${
            isActive("/dashboard/explore") ? "font-bold" : "font-base"
          }`}
        >
          <FaGlobeAsia
            size={24}
            className={`mr-4 ${isActive("/explore") ? "scale-125" : "scale-100"}`}
          />
          <span className="text-base leading-none">Explore</span>
        </a>
        <a
          href="/dashboard/inbox"
          className={`flex items-center w-full py-3 px-4 text-white hover:text-blue-500 ${
            isActive("/dashboard/inbox") ? "font-bold" : "font-base"
          }`}
        >
          <FaInbox
            size={24}
            className={`mr-4 ${isActive("/inbox") ? "scale-125" : "scale-100"}`}
          />
          <span className="text-base leading-none">Inbox</span>
        </a>
        <a
            href="/dashboard/profile"
            className={`flex items-center w-full py-3 px-4 text-white hover:text-blue-500 ${
              isActive("/profile") ? "font-bold" : "font-base"
            }`}
            onClick={handleProfileClick}
          >
            <FaUser
              size={24}
              className={`mr-4 ${
                isActive("/dashboard/profile") ? "scale-125" : "scale-100"
              }`}
            />
            <span className="text-base leading-none">Profile</span>
        </a>

        {/* Hamburger Menu */}
        <div
          className={`flex items-center w-full py-3 px-4 text-white hover:text-blue-500 ${
            isActive("/more") ? "font-bold" : "font-base"
          }`}
          onClick={handleDropdownToggle}
        >
          <FaBars size={24} className="mr-4" />
          <span className="text-base leading-none">More</span>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="w-full bg-gray-800 py-2 -mt-4 rounded">
            <a
              href="/settings"
              className="flex items-center text-white py-2 px-4 hover:bg-gray-700"
            >
              <FaCog size={20} className="mr-4" />
              Settings
            </a>
            <a
              href="/dashboard/aboutUs"
              className="flex items-center text-white py-2 px-4 hover:bg-gray-700"
            >
              <FaInfoCircle size={20} className="mr-4" />
              About Us
            </a>
            <a
              href="/help-center"
              className="flex items-center text-white py-2 px-4 hover:bg-gray-700"
            >
              <FaQuestionCircle size={20} className="mr-4" />
              Help Center
            </a>
            <a
              href="/feedback"
              className="flex items-center text-white py-2 px-4 hover:bg-gray-700"
            >
              <FaRegComments size={20} className="mr-4" />
              Feedback
            </a>
            <a
              href="/terms"
              className="flex items-center text-white py-2 px-4 hover:bg-gray-700"
            >
              <FaFileAlt size={20} className="mr-4" />
              Terms and Conditions
            </a>
          </div>
        )}
      </aside>

      
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[500px]">
            <ProfilePopup closePopup={closePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;