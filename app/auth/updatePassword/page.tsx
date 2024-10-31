import { updatePassword } from "../actions"

export default async function UpdatePassword({ searchParams }: {searchParams: {message: string}}) {
	const params = await searchParams;

	return (
		<div>
			<form>
				<label forhtml="email">Email</label>
				<input name="email" id="email"></input>
				<label forhtml="newPassword">New Password</label>
				<input type="password" name="newPassword" id="newPassword"></input>
				<label forhtml="confirmNewPassword">Confirm New Password</label>
				<input type="password" name="confirmNewPassword" id="confirmNewPassword"></input>
				<div>
					<button formAction={updatePassword}>Update Password</button>
				</div>
				{params.message && (
					<p className="text-sm text-red-500">{params.message}</p>
		        )}
			</form>
	    </div>
	)
}