import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to TANAW</h1>
      
      <div className="flex space-x-4">
        <Link href="/signup" className="px-6 py-3 bg-white text-blue-500 font-bold rounded-full shadow-lg drop-shadow-xl hover:bg-gray-200 focus:outline-none">
          Create Account
        </Link>

        <Link href="/login" className="px-6 py-3 bg-white text-gray-700 font-bold rounded-full shadow-lg drop-shadow-xl hover:bg-gray-200 focus:outline-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
