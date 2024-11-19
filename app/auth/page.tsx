// app/auth/page.tsx

import React, { useEffect, useState } from 'react';
import Auth from '../components/Auth'; // Import the Auth component

const AuthPage: React.FC = () => {
  const [section, setSection] = useState<string>('login'); // Default to 'login'

  useEffect(() => {
    // Retrieve the query parameter for the section
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    if (sectionParam) {
      setSection(sectionParam); // Update the section based on the URL
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-center text-6xl md:text-9xl font-bold text-gray-800 mb-16">TANAW</h1>
      <div className="w-full max-w-lg">
        <Auth section={section} /> {/* Pass the section as a prop */}
      </div>
    </div>
  );
};

export default AuthPage;
