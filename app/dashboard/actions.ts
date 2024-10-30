import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'


export async function authenticateUser() {
	// check if user is signed in
	const supabase = await createClient()

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) {
	redirect('/auth/login')
	}

	return data

	// console.log(data)
}