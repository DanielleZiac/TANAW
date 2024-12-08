"use client";

import React from 'react';
import Link from 'next/link';
import FloatingDropdown from '../components/layouts/FloatingDropDown'; 
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const sdgImages = Array.from({ length: 17 }, (_, i) => ({
    src: `/images/SDG/SDG${i + 1}.jpg`,
    link: `/dashboard/sdg/${i + 1}`, // Link to the dynamic SDG page (e.g., /sdg/1, /sdg/2, etc.)
  }));

  return (
    //<div className="overflow-hidden bg-cover bg-top bg-no-repeat bg-fixed bg-[url('/images/background/homebg3.png')] h-full min-h-[100vh]">
    <div className="min-h-screen flex flex-col bg-[#67A8BF]">
      {/* Floating Dropdown Component */}
      <FloatingDropdown />

      {/* Background Image Section */}
      <div className="w-full mt-12">
  {/* Mobile background (default) */}
  <img
    src="/images/background/homebgMobile.png"
    alt="Mobile Background"
    className="w-full h-auto object-contain lg:hidden" // Hide on desktop (lg)
  />  

  {/* Desktop background */}
  <img
    src="/images/background/desktophome.png"
    alt="Desktop Background"
    className="w-full h-auto object-contain lg:block pl-48 -mt-20 fixed hidden lg:-mt-32" // Only show on desktop (lg) and move left
  />
</div>


      {/* Footer */}
      <Footer />

      {/* Container for SDG Images */}
      
        <div className="w-full py-8 z-10 lg:mt-[20vh] -mt-24 lg:ml-52 items-center ">
          <div className="w-full flex flex-col items-center lg:ml-[330px] lg:-mt-10 mb-40 lg:mb-0">
            {sdgImages.map((item, index) => {
              let alignmentClass = 'justify-start xl:-mt-28';
              if (index % 6 === 1 || index % 6 === 4) {
                alignmentClass = 'justify-center xl:-mt-28';
              } else if (index % 6 === 2 || index % 6 === 3) {
                alignmentClass = 'justify-end xl:-mt-28';
              }
              const extraPadding = 'px-6 sm:px-10 md:px-20 xl:px-72';
              const groupGapClass = index % 3 !== 2 ? 'mb-[-80px]' : 'lg:mb-[70px]';

              return (
                <div
                  key={index}
                  className={`w-full flex ${alignmentClass} ${extraPadding} ${groupGapClass} p-4 sm:p-8 lg:-ml-32 lg:mr-32`}
                >
                  <Link href={item.link} className="block z-10">
                    {/* Wrapper with block ensures full image is clickable */}
                    <img
                      src={item.src}
                      alt={`SDG ${index + 1}`}
                      className="w-[100px] h-[100px]  md:w-60 md:h-60 lg:w-48 lg:h-48 lg:ml-72 lg:-mr-72  rounded-full object-cover cursor-pointer z-10"
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