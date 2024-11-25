import { resetPassword } from "../../auth/actions"

export default async function ResetPassword({ searchParams }: {searchParams: {message: string}}) {
  const params = await searchParams;

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="email"
        ></input>
        <button formAction={resetPassword}>Reset Password</button>
        {params.message && (
          <p className="text-sm text-red-500">{params.message}</p>
        )}
      </form>
    </div>
  )
}