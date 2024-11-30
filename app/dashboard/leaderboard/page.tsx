import Leaderboard from '../../components/Leaderboard';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, getLeaderboardsSchools, checkUserAvatar } from "../actions";

interface Institution {
  campus: string,
  count: number,
  department: string,
  institution: string,
  institution_id: string,
  institution_logo: string
}

async function LeaderboardPage() {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  // const hasAvatar = await checkUserAvatar(user_id)
  // if (!hasAvatar) {
  //   redirect('/dashboard/createAvatar1')
  //   return 
  // }

  const schools: Array<Institution> | undefined = await getLeaderboardsSchools("654d02f9-b188-4533-b0ef-59d043fdf683");

  console.log(schools);

  return (
    <MainLayout>
        <Leaderboard data={schools}/>
    </MainLayout>
  );
};

export default LeaderboardPage;