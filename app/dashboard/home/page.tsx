import { logout } from "../../auth/actions"
import { authenticateUser } from "../actions"

export default async function HomePage() {

  const data = await authenticateUser()

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Photo</h1>
      <button>Add Photo</button>
    </div>
  )
}