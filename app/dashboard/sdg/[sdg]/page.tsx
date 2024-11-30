// app/sdg/[id]/page.tsx
import SdgContent from '../../../components/SdgContent';
import MainLayout from '../../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, getPhotoSdg, getLikedPostsSdgs, checkUserAvatar } from "../../actions";

interface Photo {
  avatar_url: string;
  caption: string;
  created_date: string;
  likes: number;
  sdg_number: string;
  url: string;
  user_id: string;
  user_sdg_id: string;
}

interface Liked {
  user_sdg_id: string;
  user_sdgs: { sdg_number: string }[];
}


export default async function SdgPage({
  params} : {
    params: Promise<{ sdg: string }>
  }) {

  const user_id: string = await authenticateUser()
  const hasAvatar = await checkUserAvatar(user_id)
  if (!hasAvatar) {
    redirect('/dashboard/createAvatar1')
    return 
  }

  const sdg: string = (await params).sdg
  const photos: Array<Photo> | undefined = await getPhotoSdg(Number(sdg));
  const liked: Array<Liked> | undefined = await getLikedPostsSdgs(user_id, Number(sdg));

  // console.log("photos", liked);

  // console.log(user_id, sdg, ph);
  return (
    <MainLayout>
      <div>
        <h1>SDG {sdg}</h1>
        {/* Render the SdgContent component, passing the SDG ID */}
        <SdgContent data={[user_id, Number(sdg), photos, liked]} />
      </div>
    </MainLayout>
  );
}