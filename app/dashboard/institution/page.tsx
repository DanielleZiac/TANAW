import React from 'react';
import Institution from '../../components/Institution';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

// const InstitutionPage: React.FC = () => {
export default async function InstitutionPage() {
  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  // const hasAvatar = await checkUserAvatar(user_id)
  // if (!hasAvatar) {
  //   redirect('/dashboard/createAvatar1')
  //   return 
  // }
  
  return (
    <MainLayout>
      <Institution />
    </MainLayout>
  );
};

// export default InstitutionPage;