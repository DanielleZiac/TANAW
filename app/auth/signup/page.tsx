import {signup} from "../actions"
import SignUp from "../../components/SignUp";

export default async function SignupPage({ searchParams }: {searchParams: {message: string}}) {
  const params = await searchParams;

  return (
    <div>
      <SignUp 
        error={params.message}
      />
    </div>
  );
}
