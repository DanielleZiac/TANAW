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

	// console.log(data)
	return data.user.id
}




// USERS
export async function getUserById(user_id: String) {

	const supabase = await createClient()
	
	const { data: users_data, error: users_error} = await supabase
		.from('users')
		.select(`sr_code, first_name, email, last_name, institutions(institution, campus), departments(department), avatars(avatar_url)`)
		.eq("user_id", user_id).single();

	if (users_error) {
		console.log("users_error", users_error)
		return
	}

	if (users_data) {
		console.log(users_data)
		return users_data
	}
}

export async function deleteUserById(user_id: String) {
	// console.log(user_id)
	const supabase = await createClient()

	const { data: data_sdgs, error: error_sdgs } = await supabase
		.from("user_sdgs")
		.select(`sdg_number, filename`)
		.eq("user_id", user_id)

	const {data: data_avatar, error: error_avatar } = await supabase
		.from("users")
		.select(`avatars(avatar_url)`)
		.eq("user_id", user_id)
		.single()



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
	const fileName = data_avatar.avatars.avatar_url.split("/")[-1]
	const { data: data_avatars_storage, error: error_avatars_storage } = await supabase
		.storage
		.from('avatars')
		.remove([`${user_id}/${fileName}`])
	if (error_avatars_storage) {
		console.log(`error delete data_avatars_storage: ${error_avatars_storage}`)
		return
	}


	var filenames = []
	data_sdgs.forEach((sdg) => {
		filenames.push(`${sdg["sdg_number"]}/${sdg["filename"]}`)
	})


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

	redirect("/auth/login")


	// delete auth dont know howww -- do manual nalang?
	// const { data: data_auth, error: error_auth } = await supabase.auth.admin.deleteUser(user_id)

	// if (error_auth) {
	// 	console.log(`error delete user by id auth: ${error_auth}`)
	// 	return
	// }
}

export async function getUserSdgs(user_id: String) {
	const supabase = await createClient();

	const { data: data_user_sdgs, error: error_user_sdgs } = await supabase
		.from("get_user_sdgs")
		.select()
		.eq("user_id", user_id)

	if (error_user_sdgs) {
		console.log("error_user_sdgs: ", error_user_sdgs)
		return
	}

	console.log(data_user_sdgs)

	return data_user_sdgs
}



// INSTITUTION
// export async function getInstitutionPhoto(institution_id: string) {
// 	const supabase = await createClient()

// 	const { data, error } = await supabase
// 		.from(`get_school_photo`)
// 		.select()
// 		.order('created_date', { ascending: false })
// 		.eq(`institution_id`, institution_id)

// 	if (error) {
// 		console.log("Error getInstitutionPhoto", error)
// 		return
// 	}
// 	// console.log(data)
// 	return data
// }

export async function getInstitutions() {
	const supabase = await createClient()

	const { data: data_institutions, error: error_institutions } = await supabase
		.from("institutions")
		.select(`institution_id, institution, campus, institution_logo`)

	if (error_institutions) {
		console.log("error error_institutions: ", error_institutions)
		return
	}

	return data_institutions
}



// SDGS
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

export async function uploadPhoto(formData: FormData) {
	// console.log(formData.get("file"))
	// console.log(formData.get("sdgs"))
	// console.log(formData.get("user_id"))

	const file = formData.get("file")
	const sdg = formData.get("sdgs")
	const user_id = formData.get("user_id")
	const caption = formData.get("caption")
	const photoChallenge = formData.get("photoChallenge")
	console.log(photoChallenge)

	if (!file || !sdg || !user_id || !caption || !photoChallenge) {
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
		filename: fileName,
		photo_challenge: photoChallenge
	})

	if (error_user_sdg) {
		console.log("error_user_sdg", error_user_sdg)
	} else {
		console.log("upload_user_sdg", upload_user_sdg)
	}

	// return user_data
}

export async function getPhotoByUserId(user_id: string) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from("user_sdgs")
		.select(`user_sdg_id, url, caption, created_at`)
		.order('created_at', { ascending: false })
		.eq('user_id', user_id)

	if (error) {
		console.log("Error getPhotoSdgByUserId", error)
		return
	}
	// console.log(data)
	return data;
}

export async function filterSdgs(sdg?: Number, filter?: String, institution_id?: String) {
	// today, yesterday, lastweek, last month

	const supabase = await createClient()

	var cur_date = new Date();
	cur_date.setDate(cur_date.getDate())
	cur_date = cur_date.toISOString().split('T')[0]
	// console.log(cur_date)

	const query = supabase.from("get_photo_and_avatar").select()

	if (sdg) {
		query.eq('sdg_number', `sdg${sdg}`)
	}

	console.log("sadasdsadasda", institution_id)

	if (institution_id) {
		console.log("hsss", institution_id)
		query.eq("institution_id", institution_id)
	}

	if (filter == "all" || filter == null) {
		console.log("no date filter")	

	} else if (filter == "today") {
		query.eq("created_date", cur_date)

	} else if (filter == "yesterday") {
		const yest = await getDate(-1)
		console.log("yest", yest)
		const yesterday = yest.toISOString().split('T')[0]
		console.log(yesterday)
		
		query.eq("created_date", yesterday)

	} else if (filter == "last week") {
		const lastweek = await getDate(-7)
		console.log("lastweek", lastweek)
		const lastweekDate = lastweek.toISOString().split('T')[0]
		console.log(lastweekDate)

		query.gte('created_date', lastweekDate).lte('created_date', cur_date);

	} else if (filter == "last month") {
		// Get the first day of the current month and the first day of the previous month
		const firstDayOfCurrentMonth = new Date();
		firstDayOfCurrentMonth.setDate(1); // Set to the 1st day of the current month

		const firstDayOfLastMonth = new Date(firstDayOfCurrentMonth);
		firstDayOfLastMonth.setMonth(firstDayOfCurrentMonth.getMonth() - 1);

		// Get the last day of the previous month
		const lastDayOfLastMonth = new Date(firstDayOfCurrentMonth);
		lastDayOfLastMonth.setDate(0); // Set to the last day of the previous month

		console.log(firstDayOfLastMonth.toISOString().split('T')[0], firstDayOfCurrentMonth.toISOString().split('T')[0])

		query.gte('created_date', firstDayOfLastMonth.toISOString().split('T')[0])
			.lt('created_date', firstDayOfCurrentMonth.toISOString().split('T')[0]);

	} else {
		console.log("invalid filter")
	}

	const { data, error } = await query;

	if (error) {
		console.log("error: ", error)
	}

	return data;
}




// AVATARS
export async function uploadAvatar(user_id: String, file: File, department_id: String, avatar: Object) {
	const supabase = await createClient()

	console.log(avatar)

	let uuid = crypto.randomUUID();

	const path = user_id + "/" + uuid

	// empty the bucket folder
	deleteAllFilesInFolder("avatars", user_id)

	const { error: uploadError } = await supabase.storage.from('avatars').upload(path, file)

	if (uploadError) {
		console.log(uploadError)
	}

	const { data: data_public_url } = await supabase.storage.from(`avatars`).getPublicUrl(path);

	const { data: data_update_users, error: error_update_users} = await supabase
		.from("users")
		.update({
			department_id: department_id,})
		.eq("user_id", user_id)

	if (error_update_users) {
		console.log("error error_update_avatar", error_update_users)
		return
	}

	const { data: data_update_avatar, error: error_update_avatar} = await supabase
		.from("avatars")
		.upsert({
			user_id: user_id,
			avatar_url: data_public_url.publicUrl,
			bg: avatar["bg"],
			eye: avatar["eye"],
			smile: avatar["smile"],
			glasses: avatar["glasses"],
			sex: avatar["gender"],
			shirt_style: avatar["shirtStyle"]
		}, {onConflict: "user_id"})

	if (error_update_avatar) {
		console.log("error error_update_avatar", error_update_avatar)
		return
	}
}

export async function checkUserAvatar(user_id: String) {
	const supabase = await createClient()

	const { data: user_avatars, error: user_avatars_error} = await supabase.from('users').select(`avatars(avatar_url)`).eq("user_id", user_id).single();
	// console.log(user_avatars)
	if (!user_avatars.avatars?.avatar_url || user_avatars.avatars?.avatar_url < 1) {
		console.log("create avatar first")
		redirect('/dashboard/createAvatar1')
		// return false
	} 
	// return true
}

export async function getAvatarComponents(user_id: String) {
	const supabase = await createClient()

	const { data: data_avatar, error: error_avatar } = await supabase
		.from("avatars")
		.select(`avatar_id, avatar_url, bg, eye, sex, shirt_style, smile, eyewear`)
		.eq("user_id", user_id)

	if (error_avatar) {
		console.log("error_avatar: ", error_avatar)
		return
	}

	return data_avatar
}




// LIKES
export async function removeLike(user_sdg_id: string, user_id: string) {
	const supabase = await createClient()

	const res = await supabase
		.from('liked_sdg_posts')
		.delete()
		.eq("user_sdg_id", user_sdg_id)
		.eq("user_id", user_id)
}

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




// HALL OF FAME
export async function getTopLiked(institution_id?: String) {
	const supabase = await createClient()
	let qry0 = ""
	let qry1 = ""
	let qry2 = ""

	if (institution_id) {
		qry0 = "institution_id"
		qry1 = "in"
		qry2 = '("' + institution_id + '")'
	}

	console.log(qry0, qry1, qry2)

	const { data, error } = await supabase.from('top_liked_sdg').select().filter(qry0, qry1, qry2);

	if (error) {
		console.log("Error", error)
		return
	}

	console.log(data)
	return data
}




// LEADERBOARD
export async function getLeaderboardsSchools(institution_id: String) {
	const supabase = await createClient()
	const { data, error } = await supabase.from('leaderboards_schools').select().eq("institution_id", institution_id);

	if (error) {
		console.log("Error", error)
		return
	}
	return data
}




// OTHERS
export async function deleteAllFilesInFolder(storage_, folder) {
	const supabase = await createClient()

    const { data: files, error: listError } = await supabase
        .storage
        .from(storage_)
        .list(`${folder}/`, { limit: 1000 }); // List files in 'folder/', adjust limit if needed

    if (listError) {
        console.error('Error listing files:', listError);
        return;
    }

    if (!files || files.length === 0) {
        console.log('No files found in folder');
        return;
    }

    // Extract file paths
    const filePaths = files.map(file => `${folder}/${file.name}`);

    console.log(filePaths)

    // Remove files from storage
    const { data, error } = await supabase
        .storage
        .from(storage_)
        .remove(filePaths);

    if (error) {
        console.error('Error deleting files:', error);
    } else {
        console.log(`Successfully deleted ${data.length} files.`);
    }
}

export async function getDepartmentByAcronym(acronym: String) {
	const supabase = await createClient();

	const { data: data_department } = await supabase.from("departments").select("department_id").eq("acronym", acronym).single();

	console.log(data_department);

	return data_department;
}

export async function getDate(daysAdjust: Number) {
	var date = new Date();
	date.setDate(date.getDate()+daysAdjust);
	return date
}




// can add???


// filter sdgsss



// for calendar sana
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




// unused functionss
// latest post per day sdg_users


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


export async function getUserAvatarUrl(user_id: String) {
	const supabase = await createClient()
	const { data: cur_user_avatar, error: cur_user_avatar_error} = await supabase.from('users').select(`avatars(avatar_url)`).eq("user_id", user_id).single();

	if (cur_user_avatar_error) {
		console.log("cur_user_avatar_error", cur_user_avatar_error)
		return cur_user_avatar_error
	}
	console.log(cur_user_avatar)
	return cur_user_avatar.avatars.avatar_url
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

