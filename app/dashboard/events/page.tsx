import MainLayout from '../../components/layouts/MainLayout'; 
import Events from '../../components/Events'; 
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";


export default async function HomePage() {
  
  const user_id = await authenticateUser()

  const hasAvatar = await checkUserAvatar(user_id)
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }
  
  return (
    <MainLayout>
      <Events />
    </MainLayout>
  );
}