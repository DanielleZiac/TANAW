import ProfilePage from '../../components/ProfilePage'; // Adjust the path if needed
import MainLayout from '../../components/layouts/MainLayout'; // Adjust to your project structure
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar, getUserById } from "../actions";


export default async function Profile() {


  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)
  const user_data = await getUserById(user_id)

  return (
    <MainLayout>
        <ProfilePage data={user_data}/>
    </MainLayout>
  );
};