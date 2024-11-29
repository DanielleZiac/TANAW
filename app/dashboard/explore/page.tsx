import React from 'react';
import Explore from '../../components/Explore';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";


// const ExploreComponent: React.FC = () => {
export default async function ExploreComponent() {
  
  const data = await authenticateUser()

  const hasAvatar = await checkUserAvatar()
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }
  
  return (
    <MainLayout>
      <Explore />
    </MainLayout>
  );
};

// export default ExploreComponent;