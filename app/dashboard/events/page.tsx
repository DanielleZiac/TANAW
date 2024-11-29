import MainLayout from '../../components/layouts/MainLayout'; 
import Events from '../../components/Events'; 

import { authenticateUser } from "../actions";


export default async function HomePage() {
  
  const data = await authenticateUser()
  
  return (
    <MainLayout>
      <Events />
    </MainLayout>
  );
}