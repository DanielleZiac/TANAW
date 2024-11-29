import React from 'react';
import Explore from '../../components/Explore';
import MainLayout from '../../components/layouts/MainLayout';

import { authenticateUser } from "../actions";


// const ExploreComponent: React.FC = () => {
export default async function ExploreComponent() {
  
  const data = await authenticateUser()
  
  return (
    <MainLayout>
      <Explore />
    </MainLayout>
  );
};

// export default ExploreComponent;