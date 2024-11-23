"use client";

import React from 'react';
import { FaHome, FaImage, FaInbox, FaUser, FaGlobeAsia } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-cGray p-1 py-3 md:p-6 z-50">
      <div className="container mx-auto flex justify-around items-center z-50">
        {/* Home Link */}
        <a href="/home" className="flex flex-col items-center text-gray-300 hover:text-blue-500">
          <FaHome className="text-cBlue" size={30} />
          <span className="text-sm md:text-lg text-cBlue font-bold mt-1">Home</span>
        </a>

        {/* Gallery Link */}
        <a href="/gallery" className="flex flex-col items-center text-gray-300 hover:text-blue-500">
          <FaImage className="text-cBlue" size={30} />
          <span className="text-sm md:text-lg text-cBlue font-bold mt-1">Gallery</span>
        </a>

        {/* Explore Link */}
        <a href="/explore" className="flex flex-col items-center text-gray-300 hover:text-blue-500">
          <FaGlobeAsia className="text-cBlue" size={30} />
          <span className="text-sm md:text-lg text-cBlue font-bold mt-1">Explore</span>
        </a>

        {/* Inbox Link */}
        <a href="/inbox" className="flex flex-col items-center text-gray-300 hover:text-blue-500">
          <FaInbox className="text-cBlue" size={30} />
          <span className="text-sm md:text-lg text-cBlue font-bold mt-1">Inbox</span>
        </a>

        {/* Profile Link */}
        <a href="/profile" className="flex flex-col items-center text-gray-300 hover:text-blue-500">
          <FaUser className="text-cBlue" size={30} />
          <span className="text-sm md:text-lg text-cBlue font-bold mt-1">Profile</span>
        </a>
      </div>
      
    </footer>
  );
};

export default Footer;