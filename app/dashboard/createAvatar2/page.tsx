// page.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar2 from '../../components/CreateAvatar2'; // Adjust the path as necessary
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

export default async function Page({
  searchParams} : {
    searchParams: {college: string, gender: string, shirtStyle: string, eyewear: string}
  }) {

  const params = await searchParams;
  // console.log(params);

  const data = await authenticateUser()
  
  const hasAvatar = await checkUserAvatar()
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }

  console.log("data", data)
  console.log("params", params);

  return (
    <MainLayout>
      <CreateAvatar2 params={[params, data]}/>
    </MainLayout>
  );
}