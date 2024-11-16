"use client"

import { logout } from "../../auth/actions"
import { authenticateUser, getUserAvatar, updateAvatarSelected } from "../actions"
import { useEffect, useState } from "react";


const HomePage: React.FC = (params) => {

  const [avatars, setAvatars] = useState([])
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const auth = (async() => {
      const user_id = await authenticateUser()
      console.log(user_id)
      let user_avatars = await getUserAvatar(user_id);
      setAvatars(user_avatars);
      setUserId(user_id)
    })

    auth()
  }, []);

  console.log(avatars)

  const changeCurAvatar = (avatar_id) => {
    console.log("clicked")
    console.log(avatar_id)
    updateAvatarSelected(avatar_id, userId)
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Photo</h1>
      {avatars.map((avatar, index) => (
        <div key={index}>
          <img src={avatar.avatar_url}></img>
          <button onClick={() => changeCurAvatar(avatar.avatar_id)} style={{backgroundColor: "red", color: "white"}}>{avatar.avatar_label}</button>
        </div>
      ))}
      {/*<form>
        <div>
          <input type="file" id="file" name="file"></input>
          <select id="user_id" name="user_id">
            <option value={data.user_id}>{data.user_id}</option>
          </select>
        </div>
        <div>
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
      </form>*/}
    </div>
  )
}


export default HomePage;