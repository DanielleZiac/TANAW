"use client";
import React from 'react';

// Import all images using Webpack (StaticImageData)
import SDGlink1 from '/public/images/SDG/SDGlink1.jpg';
import SDGlink2 from '/public/images/SDG/SDGlink2.jpg';
import SDGlink3 from '/public/images/SDG/SDGlink3.jpg';
import SDGlink4 from '/public/images/SDG/SDGlink4.jpg';
import SDGlink5 from '/public/images/SDG/SDGlink5.jpg';
import SDGlink6 from '/public/images/SDG/SDGlink6.jpg';
import SDGlink7 from '/public/images/SDG/SDGlink7.jpg';
import SDGlink8 from '/public/images/SDG/SDGlink8.jpg';
import SDGlink9 from '/public/images/SDG/SDGlink9.jpg';
import SDGlink10 from '/public/images/SDG/SDGlink10.jpg';
import SDGlink11 from '/public/images/SDG/SDGlink11.jpg';
import SDGlink12 from '/public/images/SDG/SDGlink12.jpg';
import SDGlink13 from '/public/images/SDG/SDGlink13.jpg';
import SDGlink14 from '/public/images/SDG/SDGlink14.jpg';
import SDGlink15 from '/public/images/SDG/SDGlink15.jpg';
import SDGlink16 from '/public/images/SDG/SDGlink16.jpg';
import SDGlink17 from '/public/images/SDG/SDGlink17.jpg';
import Logo from '/public/images/background/logoexplore.png';


const sdgGoals = [
  { id: 1, title: 'No Poverty', image: SDGlink1 },
  { id: 2, title: 'Zero Hunger', image: SDGlink2 },
  { id: 3, title: 'Good Health and Well-Being', image: SDGlink3 },
  { id: 4, title: 'Quality Education', image: SDGlink4 },
  { id: 5, title: 'Gender Equality', image: SDGlink5 },
  { id: 6, title: 'Clean Water and Sanitation', image: SDGlink6 },
  { id: 7, title: 'Affordable and Clean Energy', image: SDGlink7 },
  { id: 8, title: 'Decent Work and Economic Growth', image: SDGlink8 },
  { id: 9, title: 'Industry, Innovation, and Infrastructure', image: SDGlink9 },
  { id: 10, title: 'Reduced Inequality', image: SDGlink10 },
  { id: 11, title: 'Sustainable Cities and Communities', image: SDGlink11 },
  { id: 12, title: 'Responsible Consumption and Production', image: SDGlink12 },
  { id: 13, title: 'Climate Action', image: SDGlink13 },
  { id: 14, title: 'Life Below Water', image: SDGlink14 },
  { id: 15, title: 'Life on Land', image: SDGlink15 },
  { id: 16, title: 'Peace, Justice, and Strong Institutions', image: SDGlink16 },
  { id: 17, title: 'Partnerships for the Goals', image: SDGlink17 },
];

const UNImages = [
  { src: SDGlink1.src, alt: "UN Image 1" },
  { src: SDGlink2.src, alt: "UN Image 2" },
  { src: SDGlink3.src, alt: "UN Image 3" },
  { src: SDGlink1.src, alt: "UN Image 1" },
  { src: SDGlink2.src, alt: "UN Image 2" },
  { src: SDGlink3.src, alt: "UN Image 3" },
  { src: SDGlink1.src, alt: "UN Image 1" },
  { src: SDGlink2.src, alt: "UN Image 2" },
  { src: SDGlink3.src, alt: "UN Image 3" },
];


const ExploreComponent: React.FC = () => {

  const handleImageClick = (imageAlt: string) => {
    alert(`${imageAlt} clicked`); // Replace with your custom logic
  }

  return (
    <div className="bg-[#dbdfe2] bg-cover items-center lg:items-start flex flex-col lg:flex-row h-full lg:h-screen mt-10 md:mt-0 lg:overflow-hidden lg:p-12 lg:ml-64 lg:pt-20 px-8">
      {/* Left Column */}
      <div className="flex flex-col justify-start lg:w-1/2 sm:w-full">
        {/* Logo Section */}
        <div>
          <img
            src={Logo.src} 
            alt="Logo"
            className="object-cover md:ml-12 rounded-lg lg:-m-16 -ml-1 lg:ml-2"
          />
        </div>

        {/* United Nations Section */}
        <div className="-mt-8 sm:mx-10 lg:mt-2">
          <h2 className="text-2xl font-semibold mb-2 text-start md:text-center lg:text-start">UNITED NATIONS</h2>
          <hr className="border-black mb-4 w-3/5 md:mx-auto lg:mx-0" />
          <div className="flex w-full overflow-x-auto space-x-4 scrollbar-hide px-8 lg:-ml-8">
            {UNImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="bg-gray-300 h-24 w-48 rounded-lg object-cover flex-shrink-0"
                onClick={() => handleImageClick(image.alt)}
              />
            ))}
          </div>


        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col pt-8 lg:w-1/2 w-full mb-14">
        {/* Header for the 17 Goals Section */}
        <section className="flex-none lg:">
          <h1 className="text-3xl font-bold mb-2">THE 17 GOALS</h1>
          <hr className="border-black mb-4 w-2/3" />
        </section>

        {/* Scrollable SDG Goals */}
        <div className="flex-grow md:flex-wrap lg:flex-grow overflow-y-hidden md:overflow-y-auto space-y-2 scrollbar-hide lg:pl-0 md:ml-0 lg:ml-2 lg:h-[70vh] mb-10 lg:w-full md:items-center md:mb-16 lg:px-0 lg:-mb-10">
          {sdgGoals.map(goal => (
            <button
              key={goal.id}
              className="relative bg-gray-200 rounded-lg w-full text-left py-8 px-12 hover:bg-gray-300 lg:m-0"
              style={{
                backgroundImage: `url(${goal.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => alert(`SDG ${goal.id} clicked`)} // Replace with actual action
            >
              {/* Transparent black background */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-start pl-4">
                <p className="font-bold text-lg lg:text-xl text-gray-200 p-2">
                  SDG {goal.id} | {goal.title}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExploreComponent;
