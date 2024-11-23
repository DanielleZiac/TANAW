import React from 'react';
import Institution from '../../components/Institution';
import MainLayout from '../../components/layouts/MainLayout';

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