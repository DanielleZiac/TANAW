import React from 'react';
import HallofFame from '../components/HallofFame'; // Adjust the path if needed
import MainLayout from '../components/layouts/MainLayout'; // Adjust to your project structure

const HallofFamePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <HallofFame />
      </div>
    </MainLayout>
  );
};

export default HallofFamePage;