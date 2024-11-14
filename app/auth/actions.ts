'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'


export async function getInstitutions() {
	const supabase = await createClient();

	const { data: data_institution } = await supabase.from("institutions").select("institution");

	console.log(data_institution);

	return data_institution;
}


export async function login(data) {
	const supabase = await createClient();

	console.log(data);

	const srCode = data.srCode as string;
	const school = data.school as string;
	const password = data.password as string;

	const { data: data_email } = await supabase.from("institutions").select("email_extension").eq("institution", school).single();

	const email = srCode + data_email.email_extension

	console.log(email)

	const { error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password
	})

	if (error) {
		console.log(error)
		return "incorrect username or password"
	}

	revalidatePath('/', 'layout')
	redirect('/dashboard/profile')
}

export async function signup(data) {
	console.log(data);


	const srCode = data.srCode as string;
	const firstName = data.firstName as string;
	const lastName = data.lastName as string;
	const school = data.school as string;
	const password = data.password as string;
	const confirmPassword = data.confirmPassword as string;

	if (password !== confirmPassword) {
		return "password not match"
	}

	const supabase = await createClient();

	console.log(school);
	const { data: data_email } = await supabase.from("institutions").select("email_extension").eq("institution", school).single();

	const email = srCode + data_email.email_extension

	console.log(email)

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
	    return "Could not authenticate user";
	}

	// // wait na mauthorize default page is check email muna
	revalidatePath('/', 'layout')
	return "Check your email";
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