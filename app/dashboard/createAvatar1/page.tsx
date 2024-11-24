// CreateAvatarPage.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar1 from '../../components/CreateAvatar1'; // Adjust the path as necessary

import { authenticateUser } from "../actions";

export default async function CreateAvatarPage() {

  const data = await authenticateUser()

  console.log("asd", data)

  return (
    <MainLayout>
      <CreateAvatar1 data={data}/>
    </MainLayout>
  );
}