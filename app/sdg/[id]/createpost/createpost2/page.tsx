'use client';

import MainLayout from '../../../../components/layouts/MainLayout';
import CreatePost2 from '../../../../components/CreatePost2';// Import the content component

const CreatePost2Page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center px-10 py-8">
        <CreatePost2 /> {/* Render the content */}
      </div>
    </MainLayout>
  );
};

export default CreatePost2Page;
