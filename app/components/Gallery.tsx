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
  const galleryImages = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
    // Add your gallery image paths here
  ];

  return (
    <div className="bg-gray-100">
      {/* SDG Circle Section */}
      <div className="flex overflow-x-auto py-4 px-5 space-x-4 bg-white shadow-md">
        {sdgImages.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <a href={item.link}>
              <Image
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
                className="rounded-full cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5">
        {galleryImages.map((img, index) => (
          <div key={index} className="relative">
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
