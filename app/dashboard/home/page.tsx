// app/pages/home.tsx
import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import Home from '../../components/Home'; // Adjust the path as necessary
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