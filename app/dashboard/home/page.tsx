import { logout } from "../../auth/actions"
import { authenticateUser, uploadPhoto } from "../actions"

export default async function HomePage() {

  const data = await authenticateUser()

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Photo</h1>
      <form>
        <div>
          <input type="file" id="file" name="file"></input>
        </div>
        <div>
          <select id="sdgs" name="sdgs">
            <option value="sdg1">sdg1</option>
            <option value="sdg2">sdg2</option>
            <option value="sdg3">sdg3</option>
            <option value="sdg4">sdg4</option>
            <option value="sdg5">sdg5</option>
            <option value="sdg6">sdg6</option>
          </select>
        </div>
        <button formAction={uploadPhoto}>Add Photo</button>
      </form>
    </div>
  )
}