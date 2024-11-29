// app/pages/home.tsx
import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import AboutUs from '../../components/AboutUs'; // Adjust the path as necessary

import { authenticateUser } from "../actions";

export default async function HomePage() {

  const data = await authenticateUser()

  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
}