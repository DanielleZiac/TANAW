// page.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar2 from '../../components/CreateAvatar2'; // Adjust the path as necessary

import { authenticateUser } from "../actions";

export default async function Page({
  searchParams} : {
    searchParams: string
  }) {

  const params = await searchParams;
  // console.log(params);

  const data = await authenticateUser()

  console.log("data", data)

  return (
    <MainLayout>
      <CreateAvatar2 params={[params, data]}/>
    </MainLayout>
  );
}