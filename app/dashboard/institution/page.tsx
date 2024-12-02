import React from 'react';
import Institution from '../../components/Institution';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar, getInstitutions, getLikedPostsSdgs } from "../actions";


interface Institution {
  institution_id: String,
  institution: String,
  campus: String,
  institution_logo: String
}

// const InstitutionPage: React.FC = () => {
export default async function InstitutionPage() {
  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const institutions: Array<Institution> | undefined = await getInstitutions()
  console.log("asd", institutions)
  
  return (
    <MainLayout>
      <Institution data={institutions}/>
    </MainLayout>
  );
};

// export default InstitutionPage;