"use server"

import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'


export async function authenticateUser() {
	// check if user is signed in
	const supabase = await createClient()

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) {
	redirect('/auth/login')
	}

	// console.log(data.user.user_metadata.school)

	return data

	// console.log(data)
}


export async function uploadPhoto(formData: FormData) {
	console.log(formData.get("file"))
	console.log(formData.get("sdgs"))

	const file = formData.get("file")
	const sdg = formData.get("sdgs")


	const supabase = await createClient()

	const { error: uploadError } = await supabase.storage.from('user_sdgs').upload("trial", file)

	if (uploadError) {
		console.log(uploadError)
	}


}


export async function uploadAvatar() {
	console.log("Heakdhaohd")
}