import { logout } from "../../auth/actions"
import { authenticateUser, uploadPhoto } from "../actions"

export default async function HomePage() {

  const data = await authenticateUser()
  // console.log(data)

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Photo</h1>
      <form>
        <div>
          {/*<input style={{color: "black"}} type="text" id="user_id" name="user_id"></input>*/}
          <input type="file" id="file" name="file"></input>
          <select id="user_id" name="user_id">
            <option value={data.user_id}>{data.user_id}</option>
          </select>
        </div>
        <div>
          {/*<input></input>*/}
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