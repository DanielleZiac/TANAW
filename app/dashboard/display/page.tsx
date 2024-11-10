import { authenticateUser, displayPhoto } from "../actions"

export default async function ProfilePage({ 
  searchParams }: {
    searchParams: {
      sdg: string, 
      type: string,
      institution: string,
      department: string
    }
  }) {

  const data = await authenticateUser()
  const params = await searchParams;

  const user_sdg_data = await displayPhoto(null);

  // console.log("user_sdg_data", user_sdg_data)
  // console.log(user_sdg_data, user_sdg_data.length)
  // gamit components to display imgs

  return (
    <div>
      <p>Hello {data.user_id}</p>
      <form>
        <div>
          <span>sdgs: </span>
          <select style={{backgroundColor: "white", color: "black"}} id="sdgs" name="sdgs">
            <option value="">all</option>
            <option value="sdg1">sdg1</option>
            <option value="sdg2">sdg2</option>
            <option value="sdg3">sdg3</option>
            <option value="sdg4">sdg4</option>
            <option value="sdg5">sdg5</option>
            <option value="sdg6">sdg6</option>
            <option value="sdg7">sdg7</option>
            <option value="sdg8">sdg8</option>
            <option value="sdg9">sdg9</option>
            <option value="sdg10">sdg10</option>
            <option value="sdg11">sdg11</option>
            <option value="sdg12">sdg12</option>
            <option value="sdg13">sdg13</option>
            <option value="sdg14">sdg14</option>
            <option value="sdg15">sdg15</option>
            <option value="sdg16">sdg16</option>
            <option value="sdg17">sdg17</option>
          </select>
        </div>
        <div>
          <span>types: </span>
          <select style={{backgroundColor: "white", color: "black"}} id="types" name="types">
            <option value="">all</option>
            <option value="photo">photo</option>
            <option value="video">video</option>
          </select>
        </div>
        <div>
          <label htmlFor="bsu"> BSU </label>
          <input type="checkbox" id="bsu" name="institutions" value="bsu" />
          <label htmlFor="lpu"> lpu </label>
          <input type="checkbox" id="lpu" name="institutions" value="lpu" /> 
          <label htmlFor="pup"> pup </label>
          <input type="checkbox" id="pup" name="institutions" value="pup" /> 
        </div>
        <div>
          <span>department: </span>
          <select style={{backgroundColor: "white", color: "black"}} id="departments" name="departments">
            <option value="">all</option>
            <option value="temp">temp</option>
            <option value="qwerty">qwerty</option>
          </select>
        </div>
        <div>
          <button style={{backgroundColor: "white", color: "black"}} formAction={displayPhoto}>filter</button>
        </div>
        <div>
          {/*<img src="https://srxhcymqociarjinmkpp.supabase.co/storage/v1/object/public/user_sdgs/sdg2/91347f47-1cb1-4bec-9bc8-f6db48128fe6-1730959274104"></img>*/}
        </div>
      </form>
    </div>
  )
}