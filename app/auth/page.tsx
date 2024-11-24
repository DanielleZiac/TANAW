// app/pages/home.tsx
import MainLayout from '../components/layouts/MainLayout'; // Adjust the path as necessary
import AuthPage from '../components/Auth'; // Adjust the path as necessary
import TopNav from '../components/TopNav';

export default function HomePage() {
  return (
    <div>
      <TopNav />
      <AuthPage />
    </div>
  );
}