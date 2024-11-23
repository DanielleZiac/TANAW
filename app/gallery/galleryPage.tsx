import React, { useRef, useState } from 'react';
import SDG1 from '/public/images/SDG1.jpg';
import SDG2 from '/public/images/SDG2.jpg';
import SDG3 from '/public/images/SDG3.jpg';
import SDG4 from '/public/images/SDG4.jpg';
import SDG5 from '/public/images/SDG5.jpg';
import SDG6 from '/public/images/SDG6.jpg';
import SDG7 from '/public/images/SDG7.jpg';
import SDG8 from '/public/images/SDG8.jpg';
import SDG9 from '/public/images/SDG9.jpg';
import SDG10 from '/public/images/SDG10.jpg';
import SDG11 from '/public/images/SDG11.jpg';
import SDG12 from '/public/images/SDG12.jpg';
import SDG13 from '/public/images/SDG13.jpg';
import SDG14 from '/public/images/SDG14.jpg';
import SDG15 from '/public/images/SDG15.jpg';
import SDG16 from '/public/images/SDG16.jpg';
import SDG17 from '/public/images/SDG17.jpg';


// SDG Goals Data
const sdgIcons = [
  { id: 1, title: 'No Poverty', image: SDG1 },
  { id: 2, title: 'Zero Hunger', image: SDG2 },
  { id: 3, title: 'Good Health and Well-Being', image: SDG3 },
  { id: 4, title: 'Quality Education', image: SDG4 },
  { id: 5, title: 'Gender Equality', image: SDG5 },
  { id: 6, title: 'Clean Water and Sanitation', image: SDG6 },
  { id: 7, title: 'Affordable and Clean Energy', image: SDG7 },
  { id: 8, title: 'Decent Work and Economic Growth', image: SDG8 },
  { id: 9, title: 'Industry, Innovation, and Infrastructure', image: SDG9 },
  { id: 10, title: 'Reduced Inequality', image: SDG10 },
  { id: 11, title: 'Sustainable Cities and Communities', image: SDG11 },
  { id: 12, title: 'Responsible Consumption and Production', image: SDG12 },
  { id: 13, title: 'Climate Action', image: SDG13 },
  { id: 14, title: 'Life Below Water', image: SDG14 },
  { id: 15, title: 'Life on Land', image: SDG15 },
  { id: 16, title: 'Peace, Justice, and Strong Institutions', image: SDG16 },
  { id: 17, title: 'Partnerships for the Goals', image: SDG17 },
];

import ButtonBox from '../styles/buttonBox';


const GalleryPage: React.FC = () => {
  return (
    <div className="flex flex-row">

        <div className="flex flex-col mt-24 px-10 mr-6">
            <div className="flex flex-row w-full overflow-x-auto space-x-2 scrollbar-hide -mr-[1200px] pl-10 -ml-10">
                {sdgIcons.map(goal => (
                    <div
                    key={goal.id}
                    className="relative p-16 rounded-full"
                    style={{
                        backgroundImage: `url(${goal.image.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    >
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center mt-8">
                
                <div className="flex flex-row gap-32">
                    <p><b>Uploads</b></p>
                    <p><b>Events</b></p>
                </div>
                <hr className="border-black mb-4 w-5/6 mt-2" />
                <hr className="border-black w-1/12 -mt-4 border-2 mr-48" />

                <div className="flex flex-row flex-wrap w-5/6 h-full justify-center">
                    {sdgIcons.map(goal => (
                        <div
                        key={goal.id}
                        className="relative p-10 rounded-full"
                        style={{
                            backgroundImage: `url(${goal.image.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        >
                        </div>
                    ))}
                    {sdgIcons.map(goal => (
                        <div
                        key={goal.id}
                        className="relative p-10 rounded-full"
                        style={{
                            backgroundImage: `url(${goal.image.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        >
                        </div>
                    ))}
                
                </div>
               
            </div>
        </div>

    </div>
  );
};

export default GalleryPage;
