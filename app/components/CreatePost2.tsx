"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation"; // Import useParams
import { baseButtonClass } from "../styles/buttonStyles";
import InputBox from "../styles/inputBox"; // Import your InputBox component

const CreatePost2 = () => {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const router = useRouter();
  const { id } = useParams(); // Get the dynamic id from the URL

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Input submitted:", inputValue);
    // Add your form submission logic here
    
    // After submission, redirect to the desired page
    router.push(`/sdg/${id}`); // Navigate to /sdg/[id]
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-20">
      {/* Avatar Circle Box */}
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

      {/* Input Box */}
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <InputBox
          id="user-details"
          type="text"
          value={inputValue}
          setValue={setInputValue}
          placeholder="Enter your details"
        />

        <div className="flex flex-col space-y-2 w-full mt-8">
          {/* Retake Button */}
          <button
            type="button" // Prevents form submission
            className={`${baseButtonClass} text-dBlue py-1 text-lg font-bold w-full`}
            style={{
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)"
            }}
            onClick={() => router.push(`/sdg/${id}/createpost`)} // Navigate back to the createpost page using dynamic id
          >
            Retake
          </button>
        </div>

        <div className="mt-6">
          {/* Submit Button */}
          <button
            type="submit" // Ensures form submission behavior
            className={`${baseButtonClass} text-dBlue py-1 font-bold text-lg w-full`}
            style={{
              boxShadow:
                "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost2;
