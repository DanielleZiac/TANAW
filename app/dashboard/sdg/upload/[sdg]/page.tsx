// upload/page.tsx
import UploadPhoto from "../../../../components/CapturePhoto"; // Import the newly renamed component
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../../../actions";

export default async function UploadPage({
  params} : {
    params: Promise<{ sdg: string }>
  }) {

  const data = await authenticateUser()
  await checkUserAvatar(data)

  // const hasAvatar = await checkUserAvatar(data)
  // if (!hasAvatar) {
  //   redirect('/dashboard/createAvatar1')
  //   return 
  // }

  const sdg = (await params).sdg

  console.log(data);
  return (
    <div>
      <UploadPhoto data={[data, sdg]}/> {/* Use the new UploadPhoto component */}
    </div>
  );
}