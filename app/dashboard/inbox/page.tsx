import React from 'react';
import Inbox from '../../components/Inbox';
import MainLayout from '../../components/layouts/MainLayout';

import { authenticateUser } from "../actions";

// const InboxPage: React.FC = () => {
export default async function InboxPage() {
  
  const data = await authenticateUser()
  
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <Inbox />
      </div>
    </MainLayout>
  );
};

// export default InboxPage;