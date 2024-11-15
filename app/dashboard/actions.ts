"use server"

import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'


// move this function sa other file??
export async function authenticateUser() {
	// check if user is signed in
	const supabase = await createClient()

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) {
		redirect('/auth/login')
	}

	// console.log("AAAAAAAAAAAA", data)


	const { data: users_data, error: users_error} = await supabase.from('users').select("user_id").eq("user_id", data.user.id).single();

	// console.log("bbbbbbbbbbbbbb", users_data.user_id, data.user.id)

	if (!users_data.user_id) {
		// no avatar/user info pa, need to complete account creation and shts
		console.log(data, "data")

		const { data: user_data, error: user_error } = await supabase.from('users').insert({
			sr_code: data.user.user_metadata.srCode,
			email: data.user.email,
			first_name: data.user.user_metadata.firstName,
			last_name: data.user.user_metadata.lastName,
			school: data.user.user_metadata.school,
			// department: data.user.user_metadata.department
			department: "temp"
		})

		if (user_error) {
			console.log("user_error", user_error)
		} else {
			console.log("user_data", user_data)
		}

		return user_data
	} else {
		// has avatar/info user already
		console.log(users_data)
		return users_data
	}

	// return data

	// console.log(data)
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

	const fileDate = Date.now().toString()

	let uuid = crypto.randomUUID();
	// console.log(uuid);

	const fileName = uuid + "-" +fileDate


	const supabase = await createClient()

	const { error: uploadError } = await supabase.storage.from(`user_sdgs/${sdg}`).upload(fileName, file)

	if (uploadError) {
		console.log(uploadError)
	}

	const { data: data_public_url, error: error_public_url } = await supabase.storage.from(`user_sdgs/${sdg}`).getPublicUrl(fileName);

	// console.log(data_public_url.publicUrl)

	const { data: upload_user_sdg, error: error_user_sdg} = await supabase.from('user_sdgs').insert({
		user_id: user_id,
		sdg_number: sdg,
		type: "photo", // default
		caption: caption,
		url: data_public_url.publicUrl
	})

	if (error_user_sdg) {
		console.log("error_user_sdg", error_user_sdg)
	} else {
		console.log("upload_user_sdg", upload_user_sdg)
	}

	// return user_data
}


// filter
// add leaderboards posts per college sa sdgs and event
// top liked per event // filter eventid get max like
// school per sdg
// event per sdg
export async function displayPhoto(searchParams: FormData) {
	console.log("displaying photo")
	// console.log(searchParams)
	let sdgs
	let types
	let institutions = []
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

	return user_sdg_data
}



// display photo per user
export async function displayPhotoByUserID(user_id) {
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
}

export async function uploadAvatar(user_id: String, formData: FormData) {
	console.log("Heakdhaohd")
	console.log(user_id, formData)

	// opencvjs

	const supabase = await createClient()

	const path = user_id + "/" + String(Date.now())

	const { error: uploadError } = await supabase.storage.from('avatars').upload(path, formData)

	if (uploadError) {
		console.log(uploadError)
	}
}