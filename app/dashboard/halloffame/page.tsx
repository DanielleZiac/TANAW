import React from 'react';
import HallOfFame from '../../components/HallOfFame'; // Adjust the path if needed
import MainLayout from '../../components/layouts/MainLayout'; // Adjust to your project structure

const HallOfFamePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <HallOfFame />
      </div>
    </MainLayout>
  );
};

export default HallOfFamePage;