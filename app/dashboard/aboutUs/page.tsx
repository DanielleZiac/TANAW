// app/pages/home.tsx
import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import AboutUs from '../../components/AboutUs'; // Adjust the path as necessary
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";

export default async function HomePage() {

  // if (!hasAvatar) {
  //   redirect('/dashboard/createAvatar1')
  //   return 
  // }

  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
}