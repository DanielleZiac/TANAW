import Leaderboard from '../../components/Leaderboard';
import MainLayout from '../../components/layouts/MainLayout';

import { authenticateUser, getLeaderboardsSchools } from "../actions";

interface School {
  campus: string,
  count: number,
  institution: string,
  institution_id: string,
  institution_logo: string
}

async function LeaderboardPage() {

  const user_id = await authenticateUser()
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