import CreateAvatar from "../../components/CreateAvatar";
import { authenticateUser } from "../actions";

export default async function CreateAvatarPage() {

  const data = await authenticateUser()
  // dito nalang sana yung other infos like Fname etc etc
  return <CreateAvatar />;
}
