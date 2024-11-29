// page.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar3 from '../../components/CreateAvatar3'; // Adjust the path as necessary
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

export default async function Page(){

  const data = await authenticateUser()

  const hasAvatar = await checkUserAvatar()
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }


  console.log(data)

  return (
    <MainLayout>
      <CreateAvatar3 data={data}/>
    </MainLayout>
  );
}