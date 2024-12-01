import ProfilePage from '../../components/ProfilePage'; // Adjust the path if needed
import MainLayout from '../../components/layouts/MainLayout'; // Adjust to your project structure
import { redirect } from 'next/navigation'


export default async function Profile() {

  return (
    <MainLayout>
        <ProfilePage />
    </MainLayout>
  );
};