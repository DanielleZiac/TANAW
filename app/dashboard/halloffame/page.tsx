import HallOfFame from '../../components/HallOfFame'; // Adjust the path if needed
import MainLayout from '../../components/layouts/MainLayout'; // Adjust to your project structure
import { redirect } from 'next/navigation'

import { authenticateUser, getHighestPostCount, checkUserAvatar } from "../actions";


interface Data {
  count: number;
  first_name: string;
  institution_id: string;
  institutions: {
    campus: string;
    institution: string;
  };
  last_name: string;
  user_id: string;
}

export default async function HallOfFamePage() {

  const user_id = await authenticateUser()
  const hasAvatar = await checkUserAvatar()
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }

  const data:Array<Data> | undefined = await getHighestPostCount();
  // const

  // console.log("asd", data)

  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <HallOfFame data={[user_id, data]}/>
      </div>
    </MainLayout>
  );
};