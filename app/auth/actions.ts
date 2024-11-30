'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'
import { SupabaseClient } from '@supabase/supabase-js';


export async function getInstitutions() {
	const supabase = await createClient();

	const { data: data_institution } = await supabase.from("institutions").select("institution");

	console.log(data_institution);

	return data_institution;
}


export async function login(data: { srCode: string; password: string; school: string; }) {
	const supabase = await createClient();

	console.log(data);

	const srCode = data.srCode as string;
	const school = data.school as string;
	const password = data.password as string;
	let email = "";

	const { data: data_email } = await supabase.from("institutions").select("email_extension").eq("institution", school).single();

	if (data_email !== null) {
		email = srCode + data_email.email_extension
	}

	console.log(email)

	const { data: user_data, error: user_data_error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password
	})

	if (user_data_error) {
		console.log(user_data_error)
		return "incorrect username or password"
	}

	console.log(user_data.user.user_metadata);

	const { data: users_data, error: users_error} = await supabase.from('users').select("user_id").eq("user_id", user_data.user.id).single();

	console.log(users_data)

	if (!users_data) {
		// no user info pa, need to complete account creation and shts
		console.log(user_data.user.user_metadata, "data")

		const { data: user_data_insert, error: user_error } = await supabase.from('users').upsert({
			sr_code: user_data.user.user_metadata.srCode,
			email: user_data.user.email,
			first_name: user_data.user.user_metadata.firstName,
			last_name: user_data.user.user_metadata.lastName,
			school: user_data.user.user_metadata.school,
			// department: data.user.user_metadata.department
			department: "temp"
		})

		if (user_error) {
			console.log("user_error", user_error)
		} else {
			console.log("user_data", user_data_insert)
		}
	}

	redirect("/dashboard/home")
}


export async function signup(data: { srCode: string, firstName: string, lastName: string, school: string, password: string }) {
	console.log(data);


	const srCode = data.srCode as string;
	const firstName = data.firstName as string;
	const lastName = data.lastName as string;
	const school = data.school as string;
	const password = data.password as string;

	const supabase = await createClient();

	console.log(srCode, firstName, lastName, school, password);
	const { data: data_email } = await supabase.from("institutions").select("email_extension").eq("institution", school).single();
	let email = "";
	if (data_email !== null) {
		email = srCode + data_email.email_extension;
	}

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
	    console.log(error.code)
	    return error.code;
	}

	// wait na mauthorize default page is check email muna
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
	const email = formData.get("newPassword") as string
	const newPassword = formData.get("confirmNewPassword") as string
	const confirmNewPassword = formData.get("email") as string

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