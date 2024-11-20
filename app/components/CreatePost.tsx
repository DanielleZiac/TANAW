"use client";

import { useState } from 'react';
import { baseButtonClass } from '../styles/buttonStyles';
import { useRouter, useParams } from "next/navigation";  // Import useParams for dynamic routes

interface CreatePostProps {
  sdgTitle: string;
}

const CreatePost = ({ sdgTitle }: CreatePostProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const { id } = useParams();  // Use useParams to get the id from the URL

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send the data to an API or store it
    console.log('Post submitted:', { title, description });
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-8">
      {/* Avatar Display Area */}
      <div className="text-center w-full">
        <div
          className="rounded-full w-56 h-56 flex items-center justify-center mb-6 px-4 mx-auto"
          style={{
            backgroundColor: "white",
            boxShadow: "inset 0px 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="text-gray-400 text-base">Avatar will be displayed here</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-2 w-full mt-8">
        <button
          className={`${baseButtonClass} text-dBlue py-1 text-lg font-bold w-full`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
          }}
          onClick={() => router.push(`/sdg/${id}/createpost/createpost2`)} // Correct interpolation for dynamic routing
        >
          Capture
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
