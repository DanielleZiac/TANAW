import React from 'react';
import Profile from '../components/Profile'; // Adjust the path if needed
import MainLayout from '../components/layouts/MainLayout'; // Adjust to your project structure

const ProfilePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <Profile />
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
