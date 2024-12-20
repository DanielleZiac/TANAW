import React from 'react';
import Inbox from '../../components/Inbox';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

// const InboxPage: React.FC = () => {
export default async function InboxPage() {
  
  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  // const hasAvatar = await checkUserAvatar(user_id)
  // if (!hasAvatar) {
  //   redirect('/dashboard/createAvatar1')
  //   return 
  // }
  
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <Inbox />
      </div>
    </MainLayout>
  );
};

// export default InboxPage;