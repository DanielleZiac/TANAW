import React from 'react';
import Leaderboard from '../../components/Leaderboard';
import MainLayout from '../../components/layouts/MainLayout';

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