import React from 'react';
import Explore from '../components/Explore'; // Correct the import path if needed
import MainLayout from '../components/layouts/MainLayout';

const ExploreComponent: React.FC = () => {
  return (
    <MainLayout>
      <Explore />
    </MainLayout>
  );
};

export default ExploreComponent;