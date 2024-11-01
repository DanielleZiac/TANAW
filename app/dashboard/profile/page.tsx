import { logout } from "../../auth/actions"
import { authenticateUser } from "../actions"

export default async function ProfilePage() {

  const data = await authenticateUser()

  console.log(data)

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <button onClick={logout}>Logout</button>
      <div>
        <a href="/auth/resetPassword">Reset Password</a>
      </div>
      <div>
        <a href="/dashboard/home">Home</a>
      </div>
    </div>
  )
}