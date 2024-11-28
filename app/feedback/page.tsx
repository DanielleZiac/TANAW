"use client";

import React, { useState } from "react";
import Feedback from "../components/Feedback"; // Adjust the path if needed
import MainLayout from "../components/layouts/MainLayout"; // Adjust to your project structure

const FeedbackPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Opens the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Closes the modal
  };

  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <button
          onClick={handleOpenModal}
          className="p-4 bg-blue-500 text-white rounded-lg mt-20"
        >
          Give Feedback
        </button>

        {/* Pass isOpen and onClose to Feedback component */}
        <Feedback isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </MainLayout>
  );
};

export default FeedbackPage;