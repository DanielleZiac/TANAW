import React from 'react';
import Institution from '../../components/Institution';
import MainLayout from '../../components/layouts/MainLayout';

import { authenticateUser } from "../actions";

// const InstitutionPage: React.FC = () => {
export default async function InstitutionPage() {
  const data = await authenticateUser()
  
  return (
    <MainLayout>
      <Institution />
    </MainLayout>
  );
};

// export default InstitutionPage;