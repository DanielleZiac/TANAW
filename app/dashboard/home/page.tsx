// app/pages/home.tsx
import MainLayout from '../../components/layouts/MainLayout';
import Home from '../../components/Home';
import { redirect } from 'next/navigation'

import { authenticateUser, checkUserAvatar } from "../actions";


export default async function HomePage() {
	const data = await authenticateUser()
	const hasAvatar = await checkUserAvatar()
	if (!hasAvatar) {
		redirect('/dashboard/createAvatar1')
		return 
	}

	console.log("data", data)

		return (
			<MainLayout>
				<Home />
			</MainLayout>
		);
	}