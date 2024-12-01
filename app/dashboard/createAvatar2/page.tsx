// page.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar2 from '../../components/CreateAvatar2'; // Adjust the path as necessary

import { authenticateUser } from "../actions";

export default async function Page() {
  // console.log(params);

  const user_id = await authenticateUser()


  console.log("data", user_id)

  return (
    <MainLayout>
      <CreateAvatar2 user_id={user_id}/>
    </MainLayout>
  );
}