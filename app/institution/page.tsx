import React from 'react';
import Institution from '../components/Institution'; // Adjust the path if needed
import MainLayout from '../components/layouts/MainLayout'; // Adjust to your project structure

const InstitutionPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <Institution />
      </div>
    </MainLayout>
  );
};

export default InstitutionPage;