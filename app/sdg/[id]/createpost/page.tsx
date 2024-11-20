// app/pages/[id]/createpost/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { SDG_TITLES } from '../../../data/sdgTitles'; // Import SDG titles array
import MainLayout from '../../../components/layouts/MainLayout'; // MainLayout for consistent styling
import CreatePost from '../../../components/CreatePost'; // Import CreatePost component

interface Params {
  id: string;
}

const CreatePostPage = ({ params }: { params: Promise<Params> }) => {
  const [sdgTitle, setSdgTitle] = useState<string | null>(null);
  const [sdgId, setSdgId] = useState<number | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Await the params promise
      const id = parseInt(resolvedParams.id, 10); // Get the id as a number (not zero-based index)
      setSdgId(id);

      const sdgIndex = id - 1; // Convert to zero-based index for SDG titles
      if (sdgIndex >= 0 && sdgIndex < SDG_TITLES.length) {
        setSdgTitle(SDG_TITLES[sdgIndex]);
      } else {
        setSdgTitle(null); // Handle invalid IDs
      }
    };

    fetchParams();
  }, [params]);

  if (sdgTitle === null || sdgId === null) {
    return (
      <MainLayout>
        <div className="p-6">
          <h1 className="text-xl text-red-500">Invalid SDG ID</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="p-6 mt-16">
        <h1 className="text-2xl font-semibold text-center text-black">
          SDG {sdgId}: {sdgTitle}
        </h1>
        <CreatePost sdgTitle={sdgTitle} /> {/* Use CreatePost component here */}
      </div>
    </MainLayout>
  );
};

export default CreatePostPage;
