import MainLayout from '../../components/layouts/MainLayout'; 
import Events from '../../components/Events'; 
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";


export default async function HomePage() {
  
  return (
    <MainLayout>
      <Events />
    </MainLayout>
  );
}