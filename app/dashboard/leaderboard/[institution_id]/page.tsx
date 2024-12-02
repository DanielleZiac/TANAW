import Leaderboard from '../../../components/Leaderboard';
import MainLayout from '../../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, getLeaderboardsSchools, checkUserAvatar } from "../../actions";

interface Institution {
  campus: string,
  count: number,
  department: string,
  institution: string,
  institution_id: string,
  department_logo: string
}


async function LeaderboardPage({
  params} : {
    params: Promise<{ institution_id: string }>
  }) {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const institution_id = (await params).institution_id

  const schools: Array<Institution> | undefined = await getLeaderboardsSchools(institution_id);

  console.log(schools);

  return (
    <MainLayout>
        <Leaderboard data={schools}/>
    </MainLayout>
  );
};

export default LeaderboardPage;