// upload/page.tsx
import UploadPhoto from "../../components/CapturePhoto"; // Import the newly renamed component
import { authenticateUser } from "../actions";

export default async function UploadPage() {

  const data = await authenticateUser()

  console.log(data);
  return (
    <div>
      <UploadPhoto data={data}/> {/* Use the new UploadPhoto component */}
    </div>
  );
}
