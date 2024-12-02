import ProfilePage from '../../components/ProfilePage'; // Adjust the path if needed
import MainLayout from '../../components/layouts/MainLayout'; // Adjust to your project structure
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar, getUserById } from "../actions";

interface UserData {
  sr_code: String, 
  email: String, 
  first_name: String, 
  last_name: String, 
  institutions: Array<{ institution: String, campus: String }>,
  departments: Array<{ department: String }>, 
  avatars: Array<{ avatar_url: String }>
}

export default async function Profile() {
  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)
  const user_data: UserData | undefined = await getUserById(user_id)

  return (
    <MainLayout>
        <ProfilePage data={user_data}/>
    </MainLayout>
  );
};