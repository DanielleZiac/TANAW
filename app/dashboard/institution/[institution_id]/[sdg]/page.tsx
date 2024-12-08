// app/sdg/[id]/page.tsx
import SdgContent from '../../../../components/SdgContent';
import MainLayout from '../../../../components/layouts/MainLayout';
import { redirect } from 'next/navigation'

import { authenticateUser, getLikedPostsSdgs, checkUserAvatar, filterSdgs } from "../../../actions";

interface Photos {
  avatar_url: string;
  caption: string;
  created_date: string;
  sdg_number: string;
  url: string;
  user_id: string;
  user_sdg_id: string;
  institution_id: string;
  photo_challenge?: string;
  institution: string;
  campus: string;
  institution_logo: string;
}

interface Liked {
  user_sdg_id: string;
  user_sdgs: { sdg_number: string }[];
}


export default async function SdgPage({
  params} : {
    params: Promise<{ institution_id: string, sdg: string }>
  }) {

  const user_id: string = await authenticateUser()
  await checkUserAvatar(user_id)

  console.log(await params)

  const sdg: string = (await params).sdg
  const institution_id = (await params).institution_id
  const photos: Array<Photos> | undefined = await filterSdgs(Number(sdg), "All", institution_id);
  // console.log(photos)
  const liked: Array<Liked> | undefined = await getLikedPostsSdgs(user_id, Number(sdg));

  return (
    <MainLayout>
      <div>
        <h1>SDG {sdg}</h1>
        {/* Render the SdgContent component, passing the SDG ID */}
        <SdgContent data={[user_id, Number(sdg), photos, liked, institution_id]} />
      </div>
    </MainLayout>
  );
}