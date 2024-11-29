import React from 'react';
import Institution from '../../components/Institution';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

// const InstitutionPage: React.FC = () => {
export default async function InstitutionPage() {
  const data = await authenticateUser()
  const hasAvatar = await checkUserAvatar()
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }
  
  return (
    <MainLayout>
      <Institution />
    </MainLayout>
  );
};

// export default InstitutionPage;