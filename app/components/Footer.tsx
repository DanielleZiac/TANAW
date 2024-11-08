"use client";

import React from 'react';
import { FaHome, FaImage, FaInbox, FaUser, FaGlobeAsia } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-10">
  <div className="container mx-auto flex justify-between items-center">
    <a href="/home" className="text-center flex flex-col items-center text-gray-300 hover:text-blue-500">
      <FaHome size={80} className="text-cBlue md:text-50" />
      <span className="text-3xl md:text-xl text-cBlue font-extrabold leading-none mt-2">Home</span>
    </a>
    <a href="/gallery" className="text-center flex flex-col items-center text-gray-300 hover:text-blue-500">
      <FaImage size={80} className="text-cBlue md:text-50" />
      <span className="text-3xl md:text-xl text-cBlue font-extrabold leading-none mt-2">Gallery</span>
    </a>
    <a href="/explore" className="text-center flex flex-col items-center text-gray-300 hover:text-blue-500">
      <FaGlobeAsia size={80} className="text-cBlue md:text-50" />
      <span className="text-3xl md:text-xl text-cBlue font-extrabold leading-none mt-2">Explore</span>
    </a>
    <a href="/inbox" className="text-center flex flex-col items-center text-gray-300 hover:text-blue-500">
      <FaInbox size={80} className="text-cBlue md:text-50" />
      <span className="text-3xl md:text-xl text-cBlue font-extrabold leading-none mt-2">Inbox</span>
    </a>
    <a href="/profile" className="text-center flex flex-col items-center text-gray-300 hover:text-blue-500">
      <FaUser size={80} className="text-cBlue md:text-50" />
      <span className="text-3xl md:text-xl text-cBlue font-extrabold leading-none mt-2">Profile</span>
    </a>
  </div>
</footer>

  );
};

export default Footer;
