// page.tsx

import MainLayout from '../../../../components/layouts/MainLayout'; // Adjust the path as necessary
import LeaderboardsSdgs from '../../../../components/LeaderboardsSdgs'; // Adjust the path as necessary

import { authenticateUser, getLeaderboardsSchools } from "../../../actions";


export default async function Page({
  params} : {
    params: Promise<{ sdg: string }>
  }) {

  const sdg = (await params).sdg

  const data = await authenticateUser()

  const schools = await getLeaderboardsSchools(sdg);

  return (
    <LeaderboardsSdgs data={[sdg, schools]}/>
  );
}