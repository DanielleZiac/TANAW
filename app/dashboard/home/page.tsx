import { logout } from "../../auth/actions"
import { authenticateUser } from "../actions"

export default async function HomePage() {

  const data = await authenticateUser()

  // check if user exist in db, if not redirect to createAvatar

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Photo</h1>
      <form>
        <input type="file"></input>
        <button>Add Photo</button>
      </form>
    </div>
  )
}