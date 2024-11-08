"use client"; // Mark as client component to use client-side interactivity

import React from 'react';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-sky-500 mb-6">
        Welcome to TANAW
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        This is your home page. Explore the features and enjoy your experience.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <button className="bg-sky-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300">
          Explore Features
        </button>
        <button className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Home;
