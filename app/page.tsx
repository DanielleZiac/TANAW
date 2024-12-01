import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-center text-6xl md:text-5xl font-bold text-gray-800 mb-16">WELCOME TO TANAW</h1>

      <div className="flex flex-col space-y-4">
        <Link href="/auth/login" className="mx-auto px-12 py-8 bg-white text-gray-700 font-bold text-xl md:text-2xl rounded-full shadow-lg drop-shadow-xl hover:bg-gray-200 focus:outline-none md:px-16 md:py-10">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;