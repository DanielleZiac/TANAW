import React from 'react';
import Inbox from '../../components/Inbox';
import MainLayout from '../../components/layouts/MainLayout';

const InboxPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <Inbox />
      </div>
    </MainLayout>
  );
};

export default InboxPage;