import Leaderboard from '../../components/Leaderboard';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, getLeaderboardsSchools, checkUserAvatar } from "../actions";

interface School {
  campus: string,
  count: number,
  institution: string,
  institution_id: string,
  institution_logo: string
}

async function LeaderboardPage() {

  const user_id = await authenticateUser()
  const hasAvatar = await checkUserAvatar()
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }

  const schools: Array<{campus: string,
    count: number,
    institution: string,
    institution_id: string,
    institution_logo: string}> | undefined = await getLeaderboardsSchools();

  console.log(schools);

  return (
    <MainLayout>
        <Leaderboard data={schools}/>
    </MainLayout>
  );
};

export default LeaderboardPage;