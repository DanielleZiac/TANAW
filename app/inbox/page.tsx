import React from 'react';
import Inbox from '../components/Inbox'; // Adjust the path if needed
import MainLayout from '../components/layouts/MainLayout'; // Adjust to your project structure

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
