// page.tsx

import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import CreateAvatar3 from '../../components/CreateAvatar3';
 // Adjust the path as necessary

export default async function Page({ 
  searchParams }: {
    searchParams: string
  }
){
  const params = await searchParams;

  return (
    <MainLayout>
      <CreateAvatar3 params={params}/>
    </MainLayout>
  );
}