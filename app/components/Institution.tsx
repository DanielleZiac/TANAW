"use client";

import React from "react";
import { getButtonStyles } from "../styles/buttonStyles"; // Ensure this path is correct

// Leaderboard institutions
const institutions = [
  {
    name: "Batangas State University (BSU)",
    description: "Known for excellence in agriculture and research.",
    image: "/images/SDGlink1.jpg", // Image for BSU
  },
  {
    name: "University of Batangas (UB)",
    description: "A leader in innovation and academic development.",
    image: "/images/SDGlink2.jpg", // Image for UB
  },
  {
    name: "Ateneo de Manila University",
    description: "Excels in education and leadership development.",
    image: "/images/SDGlink3.jpg", // Image for Ateneo
  },
  {
    name: "De La Salle University",
    description: "Renowned for business and science programs.",
    image: "/images/SDGlink4.jpg", // Image for DLSU
  },
  {
    name: "University of Santo Tomas",
    description: "Historic institution known for cultural heritage.",
    image: "/images/SDGlink5.jpg", // Image for UST
  },
];

const InstitutionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent py-10">
      {/* Header */}
      <header className="bg-transparent text-black py-6">
        <div className="container mx-auto px-4 text-center">
          
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto space-y-6">
        {/* About Section */}
        <section
  className={`${getButtonStyles(false).className} p-6 rounded-lg`}
  style={getButtonStyles(false).style}
>
  <h2 className="text-2xl text-center font-semibold mb-4">About</h2>
  <p className="text-gray-700 text-sm  text-center leading-relaxed">
    Our institutions are committed to providing quality education, fostering
    innovation, and empowering students to achieve their goals. Explore our
    campuses and the opportunities we offer to shape your future.
  </p>
</section>


        {/* Institutions Section */}
        <section>
          <h2 className="text-2xl text-black text-center font-semibold mb-4">OUR INSTITUTIONS</h2>
          <div className="flex-1 px-2 py-1 overflow-y-auto max-h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {institutions.map((institution, index) => (
                <div
                  key={index}
                  className={`${getButtonStyles(false).className} relative flex flex-col items-start p-6`}
                  style={{
                    ...getButtonStyles(false).style,
                    backgroundImage: `url(${institution.image})`, // Dynamic background image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-xl font-semibold text-white relative z-10">
                    {institution.name}
                  </h3>
                  <p className="text-sm text-white mt-2 relative z-10">
                    {institution.description}
                  </p>
                  <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InstitutionPage;