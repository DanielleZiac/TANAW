// pages/gallery.tsx or any other page you want to render the gallery
import Gallery from '../components/Gallery'; // Adjust the path if necessary
import MainLayout from '../components/layouts/MainLayout'; // Assuming you have MainLayout

const GalleryPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">My Gallery</h1>
        <Gallery />
      </div>
    </MainLayout>
  );
};

export default GalleryPage;
