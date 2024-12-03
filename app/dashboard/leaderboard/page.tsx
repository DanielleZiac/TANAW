import Leaderboard from '../../components/Leaderboard';
import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, getLeaderboardsSchools, checkUserAvatar, getUserById } from "../actions";

interface Institution {
  campus: string,
  count: number,
  department: string,
  institution: string,
  institution_id: string,
  department_logo: string
}


async function LeaderboardPage() {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const institution_id = (await getUserById(user_id)).institutions.institution_id;

  console.log(institution_id)

  const schools: Array<Institution> | undefined = await getLeaderboardsSchools(institution_id);

  console.log(schools);

  return (
    <MainLayout>
        <Leaderboard data={schools}/>
    </MainLayout>
  );
};

export default LeaderboardPage;