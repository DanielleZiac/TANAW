"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-screen bg-gradient-to-br from-cBlue to-cGray">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gray-900 opacity-60"></div>

      {/* Content container */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Heading with fade-in and drop animation */}
        <motion.h1
          className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Welcome to Tanaw!
        </motion.h1>

        {/* Subtitle with delay */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Connect, share, and explore with your community.
        </motion.p>

        {/* Button with hover scale effect */}
        <Link href="/auth/login">
          <motion.button
            className="bg-white px-10 py-4 rounded-full text-blue-500 font-bold text-lg md:text-xl hover:bg-blue-100 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      {/* Decorative gradient or placeholder */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-96 z-10 bg-gradient-to-t from-cyan-700 to-transparent opacity-100"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      ></motion.div>
    </div>
  );
};

export default LandingPage;
