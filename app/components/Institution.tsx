"use client";

import React, { useState } from 'react';

import BSU from '/public/images/institution/bsulogo.png';
import ADMU from '/public/images/institution/admulogo.png';
import DLSU from '/public/images/institution/dlsulogo.png';
import SDGlink4 from '/public/images/SDG/SDGlink4.jpg';
import SDGlink5 from '/public/images/SDG/SDGlink5.jpg';
import SDGlink6 from '/public/images/SDG/SDGlink6.jpg';
import Logo from '../explore/sdglink/SDG/explorebg.png';
import TextBoxPanel from '../styles/textBox';

// Institution data
const institutions = [
  { id: 1, title: 'Batangas State University', image: BSU },
  { id: 2, title: 'Ateneo De Manila University', image: ADMU },
  { id: 3, title: 'De La Salle University', image: DLSU },
  { id: 4, title: 'Quality Education', image: SDGlink4 },
  { id: 5, title: 'Gender Equality', image: SDGlink5 },
  { id: 6, title: 'Clean Water and Sanitation', image: SDGlink6 },
];

// Placeholder data for dynamic "Top 3 Liked Posts"
const top3Posts = {
  1: [SDGlink4, SDGlink5, SDGlink6],
  2: [SDGlink5, SDGlink6, SDGlink4],
  3: [SDGlink6, SDGlink4, SDGlink5],
};

const Page: React.FC = () => {
  const [selectedInstitution, setSelectedInstitution] = useState(institutions[0]);

  const handleInstitutionClick = (institution: typeof institutions[number]) => {
    setSelectedInstitution(institution);
  };

  return (
    <div className="bg-[#dbdfe2] flex flex-col md:flex-row h-screen p-4 space-y-4 md:space-x-8 md:p-12 mt-20 lg:ml-64">
      {/* Left Column */}
      <div className="flex flex-col justify-start md:w-2/3 sm:w-full items-center">
        <div className="w-full max-w-xs h-48 flex items-center justify-center mb-4">
          <img
            src={selectedInstitution.image.src}
            alt="Logo"
            className="object-contain w-full h-auto"
          />
        </div>

        <section className="mt-4 w-full">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center md:text-left">
            TOP 3 LIKED POSTS OF <br /> {selectedInstitution.title.toUpperCase()}
          </h2>
          <hr className="border-black mb-4 w-1/2 mx-auto md:mx-0" />
          <div
            className="grid grid-cols-3 lg:grid-rows-3 gap-2 sm:grid-cols-1 md:grid-cols-3 w-full max-w-xs mx-auto md:max-w-full"
          >
            {top3Posts[selectedInstitution.id as keyof typeof top3Posts]?.map((image, index) => (
              <div
                key={index}
                className="relative bg-gray-300 h-32 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-gray-200 font-semibold text-sm md:text-xl">Post {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column */}
      
        <h1 className="text-lg font-bold mb-2">Institutions</h1>
        
        <hr className="border-black mb-4 w-1/2" />
        <div className="flex flex-col flex-grow overflow-y-auto p-4">
        <div className="space-y-2">
          {institutions.map((institution) => (
            <TextBoxPanel key={institution.id}>
              <button
                onClick={() => handleInstitutionClick(institution)}
                className="flex items-center gap-4 w-full text-left"
              >
                <img
                  src={institution.image.src}
                  alt={`${institution.title} logo`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm lg:mr-[90vh]">{institution.title}</p>
                  <p className="text-xs text-gray-600 lg:mr-[50vh]">
                    This institution focuses on {institution.title.toLowerCase()}.
                  </p>
                </div>
              </button>
            </TextBoxPanel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
