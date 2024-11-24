// app/pages/home.tsx
import MainLayout from '../../components/layouts/MainLayout'; // Adjust the path as necessary
import AboutUs from '../../components/AboutUs'; // Adjust the path as necessary

export default function HomePage() {
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
}