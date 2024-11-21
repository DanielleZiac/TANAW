"use client";

import { useState } from 'react';
import React from 'react';
import Image from 'next/image'; // For optimized image handling
import { useRouter } from 'next/router'; // For navigation

const Gallery: React.FC = () => {
  const sdgImages = Array.from({ length: 17 }, (_, i) => ({
    src: `/images/SDG${i + 1}.png`, // Assume you have these images in public/images/
    alt: `SDG ${i + 1}`,
    link: `/sdg/${i + 1}`, // Link to SDG page
  }));

  // Placeholder images for the grid
  const uploadImages = Array.from({ length: 17 }, (_, i) => `/images/SDGlink${i + 1}.jpg`);
  const eventImages = Array.from({ length: 17 }, (_, i) => `/images/SDG${i + 1}.jpg`);

  // State to track active tab
  const [activeTab, setActiveTab] = useState<'uploads' | 'events'>('uploads'); 

  // Handle tab change
  const handleTabChange = (tab: 'uploads' | 'events') => {
    setActiveTab(tab);
  };

  return (
    <div className="absolute  left-0 overflow-x-auto bg-transparent ">
  {/* SDG Circle Section */}
  <div className="flex overflow-x-auto py-4 px-4 space-x-2 bg-transparent">
    {sdgImages.map((item, index) => (
      <div key={index} className="flex-shrink-0">
        <a href={item.link}>
          <Image
            src={item.src}
            alt={item.alt}
            width={130}
            height={130}
            className="rounded-full cursor-pointer"
          />
        </a>
      </div>
    ))}
  </div>

  <div className="flex justify-around bg-transparent py-2 sticky top-[90px] z-10">
        <button 
          onClick={() => handleTabChange('uploads')} 
          className={`text-md text-black font-bold ${activeTab === 'uploads' ? 'border-b-2 border-black' : ''}`}
        >
          UPLOADS
        </button>
        <button 
          onClick={() => handleTabChange('events')} 
          className={`text-md text-black font-bold ${activeTab === 'events' ? 'border-b-2 border-black' : ''}`}
        >
          EVENTS
        </button>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0.5 bg-transparent overflow-y-auto max-h-[calc(80vh-200px)]">
        {(activeTab === 'uploads' ? uploadImages : eventImages).map((img, index) => (
          <div key={index} className="relative w-full h-32"> {/* Fixed height */}
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"  // Object cover to maintain aspect ratio
            />
          </div>
  ))}
</div>
    </div>
  );
};

export default Gallery;
