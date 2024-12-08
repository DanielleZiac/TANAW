// pages/gallery.tsx or any other page you want to render the gallery
import Gallery from '../../../components/Gallery';
import MainLayout from '../../../components/layouts/MainLayout'; 
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar, filterSdgs } from "../../actions";


interface InstitutionPhoto {
  avatar_url: string;
  caption: string;
  created_date: string;
  sdg_number: string;
  url: string;
  user_id: string;
  user_sdg_id: string;
  institution_id: String;
}


export default async function InstitutionGalleryPage({
  params} : {
    params: Promise<{ institution_id: string }>
  }) {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const institution_id: string = (await params).institution_id

  console.log(user_id, institution_id)
  const photos: Array<InstitutionPhoto> | undefined = await filterSdgs(undefined, undefined, institution_id);

  // console.log(institutions)

  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Institution Gallery</h1>
        <Gallery data={[user_id, photos, institution_id]}/>
      </div>
    </MainLayout>
  );
};