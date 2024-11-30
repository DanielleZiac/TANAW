// pages/gallery.tsx or any other page you want to render the gallery
import Gallery from '../../components/Gallery';
import MainLayout from '../../components/layouts/MainLayout'; 
import { redirect } from 'next/navigation'

import { authenticateUser, getPhotoByUserId, checkUserAvatar, getInstitutionPhoto } from "../actions";


interface Photo {
  caption: string, 
  created_at: string, 
  likes: number, 
  url: string, 
  user_sdg_id: string
}


interface InstitutionPhotos {
  institution_id: String;
  created_date: string;
  caption: string;
  sdg_number: String;
  url: string;
  user_id: string;
  user_sdg_id: string;
}

export default async function GalleryPage() {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const photos: Array<Photo> | undefined = await getPhotoByUserId(user_id);
  const institution_photos: Array<InstitutionPhotos> | undefined = await getInstitutionPhoto(user_id)
  console.log("asd", institution_photos)


  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">My Gallery</h1>
        <Gallery data={[user_id, photos, institution_photos]}/>
      </div>
    </MainLayout>
  );
};