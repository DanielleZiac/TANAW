"use client";

import React, { useEffect, useState } from "react";
import { RiEmojiStickerFill } from "react-icons/ri";
import { FaHome, FaImage, FaInbox, FaUser, FaGlobeAsia, FaBars, FaCog, FaInfoCircle, FaQuestionCircle, FaRegComments, FaFileAlt } from "react-icons/fa";
import ProfilePopup from './Profile';
import Feedback from "../components/Feedback";



 

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openFeedback = () => setIsFeedbackOpen(true); // Open Feedback modal
  const closeFeedback = () => setIsFeedbackOpen(false);
  

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
        <div className="mb-4 flex flex-row justify-center">
          <img
            src="/images/logo2.jpeg"
            alt="Logo"
            className="w-11 h-11 justify-center rounded-full"
          />
          <img
            src="/images/tanaw_white.png"
            alt="Logo text"
            className="w-18 h-10 mt-1 ml-2"
          />
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
          href="/dashboard/stickers"
          className={`flex items-center w-full py-3 px-4 text-white hover:text-blue-500 ${
            isActive("/dashboard/stickers") ? "font-bold" : "font-base"
          }`}
        >
          <RiEmojiStickerFill 
            size={24}
            className={`mr-4 ${isActive("/stickers") ? "scale-125" : "scale-100"}`}
          />
          <span className="text-base leading-none">Stickers</span>
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
              href="/help-center"
              className="flex items-center text-white py-2 px-4 hover:bg-gray-700"
            >
              <FaQuestionCircle size={20} className="mr-4" />
              Help Center
            </a>
            <a
              
              className="flex items-center text-white py-2 px-4 hover:bg-gray-700"
              onClick={openFeedback} // Trigger the Feedback modal
            >
              <FaRegComments size={20} className="mr-4" 
              />
              
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

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={toggleMenu}
        />
      )}

      {/* Feedback Modal */}
      <Feedback isOpen={isFeedbackOpen} onClose={closeFeedback} />

      
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