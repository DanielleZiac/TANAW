// upload/page.tsx
import UploadPhoto from "../../../components/CapturePhoto"; // Import the newly renamed component
import { authenticateUser } from "../../actions";

export default async function UploadPage({
  params} : {
    params: Promise<{ sdg: string }>
  }) {

  const data = await authenticateUser()

  const sdg = (await params).sdg

  console.log(data);
  return (
    <div>
      <UploadPhoto data={[data, sdg]}/> {/* Use the new UploadPhoto component */}
    </div>
  );
}