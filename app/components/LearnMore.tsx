"use client";

import React from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineLock } from 'react-icons/ai';

const sdgData = [
  { id: 1, title: "No Poverty", image: '/images/sdg1.png' },
  { id: 2, title: "Zero Hunger", image: '/images/sdg2.png' },
  { id: 3, title: "Good Health and Well-Being", image: '/images/sdg3.png' },
  // Add more SDG data up to 17
];

const LearnMore = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/explorebg.png')` }}>
      
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-4 bg-opacity-80 bg-white">
        <AiOutlineMenu size={28} className="text-dBlue" />
        <h1 className="text-3xl font-bold text-dBlue">TANAW</h1>
        <AiOutlineLock size={28} className="text-dBlue" />
      </div>

      {/* United Nations Section */}
      <div className="mt-8 px-6">
        <h2 className="text-2xl font-bold text-dBlue">UNITED NATIONS</h2>
        <div className="flex overflow-x-scroll space-x-4 mt-4">
          {sdgData.slice(0, 3).map((sdg) => (
            <div key={sdg.id} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden shadow-lg">
              <img src={sdg.image} alt={sdg.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* The 17 Goals Section */}
      <div className="mt-8 px-6">
        <h2 className="text-2xl font-bold text-dBlue">THE 17 GOALS</h2>
        <div className="overflow-y-scroll max-h-[50vh] mt-4 space-y-4">
          {sdgData.map((sdg) => (
            <div key={sdg.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center">
                <img src={sdg.image} alt={sdg.title} className="w-32 h-32 object-cover" />
                <p className="text-xl font-bold ml-4">{sdg.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
