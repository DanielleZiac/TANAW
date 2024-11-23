"use client";

import React from 'react';
import Link from 'next/link';
import FloatingDropdown from '../components/layouts/FloatingDropDown'; 

const Home: React.FC = () => {
  const sdgImages = Array.from({ length: 17 }, (_, i) => ({
    src: `/images/SDG/SDG${i + 1}.jpg`,
    link: `/sdg/${i + 1}`, // Link to the dynamic SDG page (e.g., /sdg/1, /sdg/2, etc.)
  }));

  return (
    <div className="overflow-hidden bg-cover bg-top bg-no-repeat bg-fixed bg-[url('/images/background/homebg3.png')] h-full min-h-[100vh]">
      {/* Floating Dropdown Component */}
      <FloatingDropdown />

      {/* Container for SDG Images */}
      <div className="relative w-full py-[50vh] overflow-y-auto">
        <div className="w-full flex flex-col items-center">
          {sdgImages.map((item, index) => {
            let alignmentClass = 'justify-start ';
            if (index % 6 === 1 || index % 6 === 4) {
              alignmentClass = 'justify-center ';
            } else if (index % 6 === 2 || index % 6 === 3) {
              alignmentClass = 'justify-end ';
            }
            const extraPadding = 'px-6 sm:px-10 md:px-20';
            const groupGapClass = index % 3 !== 2 ? 'mb-[-80px]' : '';

            return (
              <div
                key={index}
                className={`w-full flex ${alignmentClass} ${extraPadding} ${groupGapClass} p-4 sm:p-8`}
              >
                <Link href={item.link} className="block z-10">
                  {/* Wrapper with block ensures full image is clickable */}
                  <img
                    src={item.src}
                    alt={`SDG ${index + 1}`}
                    className="w-[100px] h-[100px] sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover cursor-pointer z-50"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;