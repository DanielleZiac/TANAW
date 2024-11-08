// app/pages/home.tsx
import MainLayout from '../components/layouts/MainLayout'; // Adjust the path as necessary
import Home from '../components/Home'; // Adjust the path as necessary

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}