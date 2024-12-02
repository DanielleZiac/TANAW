import MainLayout from '../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'
import LeaderboardHome from '../../components/LeaderboardHome';

import { authenticateUser, checkUserAvatar, getInstitutions } from "../actions";


interface Institutions {
    campus: string,
    institution: string,
    institution_id: string,
    institution_logo: string
}

async function LeaderboardHomePage() {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const institutions: Array<Institutions> | undefined = await getInstitutions()

  return (
    <MainLayout>
        <div>LEADERBOARD</div>
        <LeaderboardHome data={institutions}/>
        {/* <Leaderboard data={schools}/> */}
    </MainLayout>
  );
};

export default LeaderboardHomePage;