// src/components/Explore.tsx

import React from 'react';
import Page from './page'; // Correct the import path if needed

const ExploreComponent: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="container mx-auto p-4 max-w-screen-lg">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">Tanaw Logo</div>
          <nav className="space-x-4">
            <a href="#events" className="text-gray-700 hover:text-gray-900">Events</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            <button className="bg-gray-200 py-1 px-3 rounded-lg hover:bg-gray-300">Log Out</button>
          </nav>
        </header>

        {/* Page Content */}
        <main>
          <Page />
        </main>
      </div>
    </div>
  );
};

export default ExploreComponent;
