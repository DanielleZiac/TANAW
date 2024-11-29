"use server"

import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'
import { headers } from 'next/headers';
import { SupabaseClient } from '@supabase/supabase-js';


export async function authenticateUser() {
	// check if user is signed in
	const supabase = await createClient()

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) {
		// return { redirect: '/auth/login' };
		redirect('/auth/login')
	}

	console.log(data.user.id)
	const user_data = await getUserById(supabase, data);
	return user_data
}


export async function getUserById(supabase: SupabaseClient<any, "public", any>, data: { user: any; }) {
	
	const { data: users_data, error: users_error} = await supabase.from('users').select("user_id").eq("user_id", data.user.id).single();

	if (users_data) {
		return users_data.user_id
	}
}


export async function getUserAvatar(data: String) {
	console.log("dataaaaa", data)

	const supabase = await createClient()

	const { data: user_avatars, error: user_avatar_error} = await supabase.from('avatars').select(`avatar_id, avatar_url, avatar_label, is_selected`).eq("user_id", data);

	console.log("user_avatars", user_avatars)
	if(!user_avatars || user_avatars.length < 1) {
		redirect("/dashboard/createAvatar1")
		console.log("no avatar");
	} else {
		// console.log(user_avatars)
		console.log("has avatar");
		return user_avatars
	}
}


// sdgs muna pa to
export async function uploadPhoto(formData: FormData) {
	// console.log(formData.get("file"))
	// console.log(formData.get("sdgs"))
	// console.log(formData.get("user_id"))

	const file = formData.get("file")
	const sdg = formData.get("sdgs")
	const user_id = formData.get("user_id")
	const caption = formData.get("caption")

	if (!file || !sdg || !user_id) {
		throw new Error('Invalid form data');
	  }
	  
	const fileDate = Date.now().toString()

	let uuid = crypto.randomUUID();
	// console.log(uuid);

	const fileName = uuid + "-" +fileDate


	const supabase = await createClient()

	const { error: uploadError } = await supabase.storage.from(`user_sdgs/${sdg}`).upload(fileName, file)

	if (uploadError) {
		console.log(uploadError)
	}

	const { data: data_public_url } = await supabase.storage.from(`user_sdgs/${sdg}`).getPublicUrl(fileName);

	// console.log(data_public_url.publicUrl)

	const { data: upload_user_sdg, error: error_user_sdg} = await supabase.from('user_sdgs').insert({
		user_id: user_id,
		sdg_number: sdg,
		type: "photo", // default
		caption: caption,
		url: data_public_url.publicUrl,
		filename: fileName
	})

	if (error_user_sdg) {
		console.log("error_user_sdg", error_user_sdg)
	} else {
		console.log("upload_user_sdg", upload_user_sdg)
	}

	// return user_data
}


export async function getLeaderboardsSchools() {

	const supabase = await createClient()

	const { data, error } = await supabase.from('leaderboards_schools').select();

	if (error) {
		console.log("Error", error)
		return
	}

	return data
}


// top liked sa school? sdg?
export async function getTopLiked() {
	const supabase = await createClient()

	const { data, error } = await supabase.from('top_liked_sdg').select();

	if (error) {
		console.log("Error", error)
		return
	}

	console.log(data)
}


// latest post per day sdg_users
export async function getLatestPostPerDaySdgs() {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("latest_post_sdg")
		.select()
	
	if (error) {
		console.log("Error getLatestPostPerDaySdgs", error)
		return
	}

	console.log(data)
}


// liked posts
export async function getLikedPostsSdgs(user_id: string, sdg: number) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("liked_sdg_posts")
		.select(`user_sdg_id, user_sdgs(sdg_number)`)
		.eq("user_id", user_id)
		.eq("user_sdgs.sdg_number", `sdg${sdg}`)

	if (error) {
		console.log("Error getLikedPostsSdgs", error)
		return
	}

	// console.log(data)
	return data;
}


export async function getNumberOfLikes(user_sdg_id: string) {
	console.log(user_sdg_id);
	const supabase = await createClient();

	const { data, error } = await supabase
		.from("liked_sdg_posts")
		.select(`user_sdg_id, user_id`)
		.eq("user_sdg_id", user_sdg_id)

	if (error) {
		console.log("Error getLikedPostsSdgs", error)
		return
	}

	console.log("datassss", data)
	return data.length;
}


export async function getHighestPostCount() {
	const supabase = await createClient();

	const { data, error } = await supabase
		.from("get_top_post_count")
		.select(`*, institutions(institution, campus)`)

	if (error) {
		console.log("Error getHighestPostCount", error)
		return
	}

	// console.log("datassss", data)
	return data;
}

// unlike -1
export async function removeLike(user_sdg_id: string, user_id: string) {
	const supabase = await createClient()

	const res = await supabase
		.from('liked_sdg_posts')
		.delete()
		.eq("user_sdg_id", user_sdg_id)
		.eq("user_id", user_id)
}


// add likes +1
export async function addLike(user_sdg_id: string, user_id: string) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("liked_sdg_posts")
		.insert({user_sdg_id, user_id})

	if (error) {
		console.log("Error addLike", error)
		return
	}
	console.log("data")
}


// get school photo per sdg
export async function getSchoolPhotoPerSdg(school: string, sdg:  number) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("user_sdgs")
		.select(`
			user_sdg_id, 
			users!user_sdgs_user_id_fkey!inner(school), 
			url, 
			caption, 
			likes, 
			created_at
		`)
		.order('created_at', { ascending: false })
		.eq("users.school", school)
		.eq("sdg_number", `sdg${sdg}`)

	if (error) {
		console.log("Error getSchoolPhotoPerSdg", error)
		return
	}
	console.log(data)
}


// get own photo per sdg
export async function getPhotoSdgByUserId(user_id: string, sdg: number) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("user_sdgs")
		.select(`url, caption, likes, created_at`)
		.order('created_at', { ascending: false })
		.eq('user_id', user_id)
		.eq('sdg_number', `sdg${sdg}`);

	if (error) {
		console.log("Error getPhotoSdgByUserId", error)
		return
	}
	console.log(data)
}


export async function getPhotoByUserId(user_id: string) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("user_sdgs")
		.select(`user_sdg_id, url, caption, likes, created_at`)
		.order('created_at', { ascending: false })
		.eq('user_id', user_id)

	if (error) {
		console.log("Error getPhotoSdgByUserId", error)
		return
	}
	console.log(data)
	return data;
}


export async function getPhotoSdg(sdg: number) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("get_photo_and_avatar")
		.select()
		.eq('sdg_number', `sdg${sdg}`)

	if (error) {
		console.log("Error getPhotoSdg", error)
		return
	}
	// console.log("dataaaa", data);
	return data;
}


export async function displayPhoto(searchParams: FormData | null): Promise<Array<any>> {
	console.log("displaying photo")
	// console.log(searchParams)
	let sdgs
	let types
	let institutions: Array<any> = [];
	let departments
	let sdg_query0 = ""
	let sdg_query1 = ""
	let sdg_query2 = ""
	let type_query0 = ""
	let type_query1 = ""
	let type_query2 = ""
	let institution_query0 = ""
	let institution_query1 = ""
	let institution_query2 = ""
	let dept_query0 = ""
	let dept_query1 = ""
	let dept_query2 = ""

	if (searchParams) {
		sdgs = searchParams.get("sdgs") as String
		types = searchParams.get("types") as String
		institutions = searchParams.getAll("institutions")
		departments = searchParams.get("departments") as String
	}

	if (sdgs) {
		sdg_query0 = "sdg_number"
		sdg_query1 = "in"
		// sdg_query2 = '("sdg5","sdg2")'
		sdg_query2 = '("' + sdgs + '")'
	} 

	if (types) {
		type_query0 = "type"
		type_query1 = "in"
		type_query2 = '("' + types + '")'
	}

	if (institutions.length != 0) {
		institution_query0 = "users.school"
		institution_query1 = "in"
		institution_query2 = '("sdg5","sdg2")'
		institution_query2 = '('

		for (let i = 0; i < institutions.length; i++) {
			console.log(institutions[i])
			institution_query2 += '"' + institutions[i] + '"'
			if (i != institutions.length - 1) {
				institution_query2 += ","
			}
		}

		institution_query2 += ')'
	}

	if (departments) {
		dept_query0 = "users.department"
		dept_query1 = "in"
		dept_query2 = '("' + departments + '")'
	}

	const supabase = await createClient()

	console.log(sdg_query0, sdg_query1, sdg_query2)
	console.log(dept_query0, dept_query1, dept_query2)

	const { data: user_sdg_data, error: user_sdg_error } = await supabase
		.from('user_sdgs')
		.select(`
			*,
			users!inner(
				school, 
				department
			)
		`)
		.filter(sdg_query0, sdg_query1, sdg_query2)
		.filter(type_query0, type_query1, type_query2)
		.filter(institution_query0, institution_query1, institution_query2)
		.filter(dept_query0, dept_query1, dept_query2)

		// .eq("sdg_number", "sdg2")
		// .eq("type", types)
		// .eq("users.school", institutions)
		// .eq("users.department", departments)
		// .in("sdg_number", ["sdg2", "sdg5"])
		// .in("type", ["photo"])
		// .in("users.school", ["bsu"])
		// .in("users.department", ["qwerty", "temp"])
	console.log(user_sdg_data)
	if (user_sdg_data) {
		return user_sdg_data
	} else {
		return [];
	}
}



export async function uploadAvatar(user_id: String, file: File, avatar_lbl: String) {
	console.log("Heakdhaohd")
	console.log(user_id, file)

	const supabase = await createClient()

	const path = user_id + "/" + user_id

	const { error: uploadError } = await supabase.storage.from('avatars').upload(path, file)

	if (uploadError) {
		console.log(uploadError)
	}

	const { data: data_public_url } = await supabase.storage.from(`avatars/${user_id}`).getPublicUrl(user_id);

	interface AvatarData {
		user_id: String;
		avatar_url: string;
		avatar_label?: String; // Optional property
		is_selected?: boolean; // Optional property
	  }

	// do formdata
	const avatar_data: AvatarData = {
		user_id: user_id, 
		avatar_url: data_public_url.publicUrl
	}
	console.log(avatar_data)

	if (avatar_lbl.trim() != "") {
		avatar_data.avatar_label = avatar_lbl
	}


	const { data: user_avatars, error: user_avatar_error} = await supabase.from('avatars').select("avatar_id").eq("user_id", user_id);

	if (user_avatars) {
		if(user_avatars.length < 1) {
			avatar_data.is_selected = true
		}
	}

	const { data: upload_avatar_upload, error: error_avatar_upload} = await supabase.from('avatars').insert(avatar_data);

	if (error_avatar_upload) {
		console.log(error_avatar_upload)
	}
}


export async function getCurrentAvatarUrl(user_id: String) {
	const supabase = await createClient()
	const { data: cur_user_avatar, error: cur_user_avatar_error} = await supabase.from('avatars').select("avatar_url").eq("user_id", user_id).eq("is_selected", "TRUE").single();

	if (cur_user_avatar_error) {
		console.log("cur_user_avatar_error", cur_user_avatar_error)
		return cur_user_avatar_error
	}
	return cur_user_avatar.avatar_url
}


export async function updateAvatarSelected(avatar_id: String, user_id: String) {
	const supabase = await createClient()
	
	const curUserAvatarUrl = await getCurrentAvatarUrl(user_id);

	console.log(curUserAvatarUrl)

	const { error: prevAvatarError } = await supabase
		.from('avatars')
		.update({ is_selected: false })
		.eq('avatar_url', curUserAvatarUrl)

	if (prevAvatarError) {
		console.log("prevAvatarError", prevAvatarError)
		return;
	}

	const { error: newAvatarError } = await supabase
		.from('avatars')
		.update({ is_selected: true })
		.eq('avatar_id', avatar_id)

	if (newAvatarError) {
		console.log("newAvatarError", newAvatarError)
		return;
	}
}


export async function deleteAvatarSelected(avatar_id: String) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from('countries')
		.delete()
		.eq('avatar_id', avatar_id)
		.select()
}


export async function updateAvatarLabel(avatar_id: String, new_lbl: String) {
	const supabase = await createClient()

	const { error: avatarLblError } = await supabase
		.from('avatars')
		.update({ avatar_label: new_lbl })
		.eq('avatar_id', avatar_id)

	if (avatarLblError) {
		console.log("avatarLblError", avatarLblError)
	}
}


export async function deleteUserById(user_id: String) {
	// console.log(user_id)
	const supabase = await createClient()

	const { data: data_sdgs, error: error_sdgs } = await supabase
		.from("user_sdgs")
		.select(`sdg_number, filename`)
		.eq("user_id", user_id)

	var filenames = []
	data_sdgs.forEach((sdg) => {
		// console.log(sdg)
		filenames.push(`${sdg["sdg_number"]}/${sdg["filename"]}`)
	})


	// delete db
	const { data: data_db, error: error_db } = await supabase
		.from('users')
		.delete()
		.eq('user_id', user_id)
	if (error_db) {
		console.log("error delete user by id:", error_db)
		return
	}


	// delete storage
	const { data: data_avatars_storage, error: error_avatars_storage } = await supabase
		.storage
		.from('avatars')
		.remove([`${user_id}/${user_id}`])
	if (error_avatars_storage) {
		console.log(`error delete data_avatars_storage: ${error_avatars_storage}`)
		return
	}


	if (filenames.length > 0) {
		const { data: data_user_sdgs, error: error_user_sdgs } = await supabase
			.storage
			.from('user_sdgs')
			.remove(filenames)

		if (error_user_sdgs) {
			console.log(`error delete error_user_sdgs: ${error_user_sdgs}`)
			return
		}
	}


	const { error } = await supabase.auth.signOut({ scope: 'local' });
	if (error) {
		console.log("error: ", error)
		return
	}

	return { redirect: '/auth/login' };			// redirect not working??


	// delete auth dont know howww -- do manual nalang?
	// const { data: data_auth, error: error_auth } = await supabase.auth.admin.deleteUser(user_id)

	// if (error_auth) {
	// 	console.log(`error delete user by id auth: ${error_auth}`)
	// 	return
	// }
}


export async function deleteSdgPost(user_sdg_id: String) {
	const supabase = await createClient()

	const { data: data_sdgs, error: error_sdgs } = await supabase
		.from("user_sdgs")
		.select(`sdg_number, filename`)
		.eq("user_sdg_id", user_sdg_id).single()
	if(error_sdgs) {
		console.log("error error_sdgs:", error_sdgs)
		return
	}


	// delete db
	const { data: data_db, error: error_db } = await supabase
		.from('user_sdgs')
		.delete()
		.eq('user_sdg_id', user_sdg_id)
	if (error_db) {
		console.log("error deleteSdgPost:", error_db)
		return
	}


	// delete storage
	const { data: data_user_sdg_storage, error: error_user_sdg_storage } = await supabase
		.storage
		.from('user_sdgs')
		.remove([`${data_sdgs["sdg_number"]}/${data_sdgs["filename"]}`])
	if (error_user_sdg_storage) {
		console.log(`error delete data_avatars_storage: ${error_user_sdg_storage}`)
		return
	}
}


