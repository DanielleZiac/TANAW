import React from 'react';

// Import all images using Webpack (StaticImageData)
import SDGlink1 from './sdglink/SDGlink1.jpg';
import SDGlink2 from './sdglink/SDGlink2.jpg';
import SDGlink3 from './sdglink/SDGlink3.jpg';
import SDGlink4 from './sdglink/SDGlink4.jpg';
import SDGlink5 from './sdglink/SDGlink5.jpg';
import SDGlink6 from './sdglink/SDGlink6.jpg';
import SDGlink7 from './sdglink/SDGlink7.jpg';
import SDGlink8 from './sdglink/SDGlink8.jpg';
import SDGlink9 from './sdglink/SDGlink9.jpg';
import SDGlink10 from './sdglink/SDGlink10.jpg';
import SDGlink11 from './sdglink/SDGlink11.jpg';
import SDGlink12 from './sdglink/SDGlink12.jpg';
import SDGlink13 from './sdglink/SDGlink13.jpg';
import SDGlink14 from './sdglink/SDGlink14.jpg';
import SDGlink15 from './sdglink/SDGlink15.jpg';
import SDGlink16 from './sdglink/SDGlink16.jpg';
import SDGlink17 from './sdglink/SDGlink17.jpg';
import Logo from './sdglink/logoexplore.png';

// SDG Goals Data
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

const ExploreComponent: React.FC = () => {
  return (
    <div className="bg-[#dbdfe2] flex flex-col md:flex-row h-screen space-x-8 overflow-hidden p-12 ml-32">
      {/* Left Column */}
      <div className="flex flex-col justify-start md:w-1/2 sm:w-full">
        {/* Logo Section */}
        <div>
          <img
            src={Logo.src} 
            alt="Logo"
            className="object-cover rounded-lg -m-16 ml-1"
          />
        </div>

        {/* United Nations Section */}
        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">UNITED NATIONS</h2>
          <hr className="border-black mb-4 w-3/5" />
          <div className="flex flex-wrap gap-4 px-8 -ml-8 -mr-32">
            {/* Placeholder images for UN section */}
            <img src={SDGlink1.src} alt="UN Image 1" className="bg-gray-300 h-32 rounded-lg object-cover" />
            <img src={SDGlink2.src} alt="UN Image 2" className="bg-gray-300 h-32 rounded-lg object-cover" />
            <img src={SDGlink3.src} alt="UN Image 3" className="bg-gray-300 h-32 rounded-lg object-cover" />
          </div>

        </section>
      </div>

      {/* Right Column */}
      <div className="flex flex-col pt-8 md:w-1/2 sm:w-full">
        {/* Header for the 17 Goals Section */}
        <section className="flex-none">
          <h1 className="text-3xl font-bold mb-2">THE 17 GOALS</h1>
          <hr className="border-black mb-4 w-2/3" />
        </section>

        {/* Scrollable SDG Goals */}
        <div className="flex-grow overflow-y-auto space-y-2 scrollbar-hide">
          {sdgGoals.map(goal => (
            <div
              key={goal.id}
              className="relative bg-gray-200 rounded-lg p-12 hover:bg-gray-300"
              style={{
                backgroundImage: `url(${goal.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Transparent black background */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-start pl-4">
                <h2 className="font-semibold text-3xl text-gray-200 p-2">
                  SDG {goal.id} | {goal.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreComponent;
