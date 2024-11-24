// page.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar3 from '../../components/CreateAvatar3'; // Adjust the path as necessary

import { authenticateUser } from "../actions";

export default async function Page(){

  const data = await authenticateUser()

  console.log(data)

  return (
    <MainLayout>
      <CreateAvatar3 data={data}/>
    </MainLayout>
  );
}