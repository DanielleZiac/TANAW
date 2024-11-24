// app/sdg/[id]/page.tsx
'use client';  // Ensure this is marked as a client component

import { useEffect, useState } from 'react';
import SdgContent from '../../../components/SdgContent';
import MainLayout from '../../../components/layouts/MainLayout';

// Define the Params type with the 'id' property
interface Params {
  id: string;
}

const SdgPage = ({ params }: { params: Promise<Params> }) => {
  const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);

  useEffect(() => {
    // Unwrap params using React.use
    const fetchParams = async () => {
      const resolvedParams = await params;
      setUnwrappedParams(resolvedParams);
    };

    fetchParams();
  }, [params]);

  if (!unwrappedParams) return <div>Loading...</div>;

  const { sdg } = unwrappedParams;
  console.log(sdg);
  return (
    <MainLayout>
      <div>
        <h1>SDG {sdg}</h1>
        {/* Render the SdgContent component, passing the SDG ID */}
        <SdgContent id={sdg} />
      </div>
    </MainLayout>
  );
};

export default SdgPage;