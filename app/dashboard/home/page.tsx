// app/pages/home.tsx
import MainLayout from '../../components/layouts/MainLayout';
import Home from '../../components/Home';
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";


export default async function HomePage() {
	const user_id = await authenticateUser()
	const hasAvatar = await checkUserAvatar(user_id)
	if (!hasAvatar) {
		redirect('/dashboard/createAvatar1')
		return 
	}

	console.log("data", user_id)

		return (
			<MainLayout>
				<Home />
			</MainLayout>
		);
	}