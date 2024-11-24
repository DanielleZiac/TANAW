import React, { useState } from 'react';

import BSU from '/public/images/bsulogo.png';
import ADMU from '/public/images/admulogo.png';
import DLSU from '/public/images/dlsulogo.png';
import SDGlink4 from '../explore/sdglink/SDGlink4.jpg';
import SDGlink5 from '../explore/sdglink/SDGlink5.jpg';
import SDGlink6 from '../explore/sdglink/SDGlink6.jpg';
import Logo from '../explore/sdglink/logoexplore.png';
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
    <div className="bg-[#dbdfe2] flex flex-col md:flex-row h-screen space-x-8 overflow-hidden p-12 ml-36 mt-4">
      {/* Left Column */}
      <div className="flex flex-col justify-start md:w-2/3 sm:w-full">

        <div className="w-[500px] h-[350px] flex items-center justify-center ml-24 mt-8"> 
        <img
            src={selectedInstitution.image.src} 
            alt="Logo"
            className="object-contain w-full h-full" 
        />
        </div>
        <br/>

        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">
            TOP 3 LIKED POSTS OF <br/>{selectedInstitution.title.toUpperCase()}
          </h2>
          <hr className="border-black mb-4 w-3/5" />
          <div
            className="grid grid-cols-3 gap-4 px-8 -ml-8"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}
          >
            {top3Posts[selectedInstitution.id]?.map((image, index) => (
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
                  <p className="text-gray-200 font-semibold text-xl">Post {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="flex flex-col pt-8 md:w-1/2 sm:w-full">
        <section className="flex-none">
          <h1 className="text-3xl font-bold mb-2 pl-4">Institutions</h1>
          <hr className="border-black mb-4 w-2/3 ml-4" />
        </section>

        <div className="flex-grow overflow-y-auto space-y-4 px-4 scrollbar-hide">
          {institutions.map((institution) => (
            <div key={institution.id} className="w-full">
              <TextBoxPanel>
                <button
                  onClick={() => handleInstitutionClick(institution)}
                  className="flex flex-row items-center gap-4 w-full text-left"
                >
                  <img
                    src={institution.image.src}
                    alt={`${institution.title} logo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg text-gray-800">{institution.title}</p>
                    <p className="text-sm text-gray-600">
                      This institution focuses on {institution.title.toLowerCase()}.
                    </p>
                  </div>
                </button>
              </TextBoxPanel>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
