import HallOfFame from '../../components/HallOfFame'; // Adjust the path if needed
import MainLayout from '../../components/layouts/MainLayout'; // Adjust to your project structure
import { redirect } from 'next/navigation'

import { authenticateUser, getTopLiked, checkUserAvatar } from "../actions";


interface Data {
  caption: String,
  created_date: String,
  sdg_number: String,
  total_count: number,
  url: String,
  user_id: String,
  user_sdg_id: String
}

export default async function HallOfFamePage() {

  const user_id = await authenticateUser()
  const hasAvatar = await checkUserAvatar(user_id)
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }

  const data: Array<Data> | undefined = await getTopLiked();

  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <HallOfFame data={[user_id, data]}/>
      </div>
    </MainLayout>
  );
};