// File: app/learn-more/page.tsx (or wherever your Next.js page file is located)

import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import LearnMore from '../components/LearnMore';

const LearnMorePage = () => {
  return (
    <MainLayout>
      {/* Add a section wrapper if you need extra spacing or styling */}
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-start">
        <LearnMore />
      </div>
    </MainLayout>
  );
};

export default LearnMorePage;
