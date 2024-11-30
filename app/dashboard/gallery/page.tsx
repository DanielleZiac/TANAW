// pages/gallery.tsx or any other page you want to render the gallery
import Gallery from '../../components/Gallery';
import MainLayout from '../../components/layouts/MainLayout'; 
import { redirect } from 'next/navigation'

import { authenticateUser, getPhotoByUserId, checkUserAvatar } from "../actions";


interface Photo {
  caption: string, 
  created_at: string, 
  likes: number, 
  url: string, 
  user_sdg_id: string
}


export default async function GalleryPage() {

  const user_id = await authenticateUser()
  await checkUserAvatar(user_id)

  const photos: Array<Photo> | undefined = await getPhotoByUserId(user_id);


  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">My Gallery</h1>
        <Gallery data={[user_id, photos]}/>
      </div>
    </MainLayout>
  );
};