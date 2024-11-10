import CreateAvatar from "../../components/CreateAvatar";
import { authenticateUser } from "../actions";

export default async function CreateAvatarPage() {

  const data = await authenticateUser()

  console.log(data)
  return (
    <div>
      <CreateAvatar data={data}/>
    </div>
  );
}
