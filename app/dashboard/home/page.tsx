// app/pages/home.tsx
import MainLayout from '../../components/layouts/MainLayout';
import Home from '../../components/Home';
import { authenticateUser } from "../actions";


export default async function HomePage() {
	const data = await authenticateUser()
	console.log("data", data)

		return (
			<MainLayout>
				<Home />
			</MainLayout>
		);
	}