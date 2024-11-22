import React from 'react';
import Leaderboard from '../components/Leaderboard'; // Adjust the path if needed
import MainLayout from '../components/layouts/MainLayout'; // Adjust to your project structure

const LeaderboardPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <Leaderboard />
      </div>
    </MainLayout>
  );
};

export default LeaderboardPage;