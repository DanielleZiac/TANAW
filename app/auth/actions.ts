'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'


export async function login(formData: FormData) {
	const supabase = await createClient();

	const srCode = formData.get("srCode") as string;
	const password = formData.get("password") as string;

	// temp
	const email = srCode + "@g.batstate-u.edu.ph"

	const { error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password
	})

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/dashboard/profile')
}

export async function signup(formData: FormData) {
	const srCode = formData.get("srCode") as string;
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const school = formData.get("school") as string;
	const password = formData.get("password") as string;
	const confirmPassword = formData.get("confirmPassword") as string;
	let email = ""

	if (password !== confirmPassword) {
		return redirect("/auth/signup?message=Passwords don't match")
	}

	const supabase = await createClient()

	// temp
	if (school == "bsu") {
		email = srCode + "@g.batstate-u.edu.ph"
	} else {
		email = srCode + "@gmail.com"
	}

	console.log("supabaseeeeeeee", supabase)

	const { error } = await supabase.auth.signUp({
		email: email,
		password: password,
		options: {
			data: {
				srCode: srCode,
				firstName: firstName,
				lastName: lastName,
				school: school
			}
		}
	})

	if (error) {
	    console.log(error)
	    return redirect("/auth/signup?message=Could not authenticate user")
	}

	// wait na mauthorize default page is check email muna
	revalidatePath('/', 'layout')
	redirect('/auth/signup?message=Check your email')
}

export async function logout() {
	console.log("logout")

	const supabase = await createClient()

	const { error } = await supabase.auth.signOut({ scope: 'local' });

	if (error) {
		console.log(error)
		redirect("/error")
	}

	revalidatePath("/", "layout");
	redirect("/")
}

export async function createAvatar() {
	// sa create avatar?
}

export async function resetPassword(formData: FormData) {
	// authenticated users lang -- may error pa pag di authenticated nag aaccess
	
	console.log("reset password")

	let email = formData.get("email") as string;

	const supabase = await createClient()
	const { data, error } = await supabase.auth.resetPasswordForEmail(email)

	if (error) {
		console.log(error)
		redirect("/error")
	}

	// may waiting area muna saying na check ur email?
	revalidatePath("/", "layout");
	redirect("/auth/resetPassword?message=Check your email")
}

export async function updatePassword(formData: FormData) {
	const email = formData.get("newPassword")
	const newPassword = formData.get("confirmNewPassword")
	const confirmNewPassword = formData.get("email")

	console.log(newPassword);
	console.log(confirmNewPassword);
	console.log(email);

	const supabase = await createClient();
	const { data, error} = await supabase.auth.updateUser({ password: newPassword })

	if (error) {
		console.log(error)
		// error if same pass sa old
		redirect("/error")
	}

	revalidatePath("/", "layout");
	redirect("/auth/updatePassword?message=Password updated")

	// logout();
	// give option ba na logout kasi nag auauto login sya after password reset or idk san next punta nito??
}