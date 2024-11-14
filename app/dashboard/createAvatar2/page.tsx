// page.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar2 from '../../components/CreateAvatar2'; // Adjust the path as necessary

export default async function Page({
  searchParams} : {
    searchParams: string
  }) {

  const params = await searchParams;
  console.log(params);

  return (
    <MainLayout>
      <CreateAvatar2 params={params}/>
    </MainLayout>
  );
}