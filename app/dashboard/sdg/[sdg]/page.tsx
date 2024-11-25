// app/sdg/[id]/page.tsx
import SdgContent from '../../../components/SdgContent';
import MainLayout from '../../../components/layouts/MainLayout';

import { authenticateUser, getPhotoSdg, getLikedPostsSdgs } from "../../actions";

interface Photo {
  caption: string, 
  created_date: date, 
  likes: number, 
  url: string, 
  user_sdg_id: string
}


export default async function SdgPage({
  params} : {
    params: Promise<{ sdg: string }>
  }) {

  const user_id: string = await authenticateUser()
  const sdg: number = (await params).sdg
  const photos: Array<Photo> | undefined = await getPhotoSdg(sdg);
  const liked = await getLikedPostsSdgs(user_id, sdg);

  // console.log("photos", photos);

  // console.log(user_id, sdg, ph);
  return (
    <MainLayout>
      <div>
        <h1>SDG {sdg}</h1>
        {/* Render the SdgContent component, passing the SDG ID */}
        <SdgContent data={[user_id, sdg, photos, liked]} />
      </div>
    </MainLayout>
  );
}