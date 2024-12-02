import HallOfFame from '../../components/HallOfFame'; // Adjust the path if needed
import MainLayout from '../../components/layouts/MainLayout'; // Adjust to your project structure
import { redirect } from 'next/navigation'

import { authenticateUser, getTopLiked, checkUserAvatar } from "../actions";


interface Data {
  caption: string;
  created_date: string;
  sdg_number: string;
  total_count: number;
  isLiked: boolean,
  url: string;
  user_id: string;
  user_sdg_id: string;
}

export default async function HallOfFamePage() {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const data: Array<Data> | undefined = await getTopLiked();

  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <HallOfFame data={[user_id, data]}/>
      </div>
    </MainLayout>
  );
};