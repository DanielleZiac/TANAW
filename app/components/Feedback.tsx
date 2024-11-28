import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import InputBox from "../styles/inputBox";  // Import your InputBox component

// Define the prop types for Feedback component
interface FeedbackProps {
  isOpen: boolean;
  onClose: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    console.log("Feedback Submitted:", { rating, feedback });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>

        <h2 className="text-2xl text-black font-semibold mb-4 text-center">We Value Your Feedback</h2>

        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((value) => (
            <svg
              key={value}
              xmlns="http://www.w3.org/2000/svg"
              fill={rating >= value ? "yellow" : "gray"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleRatingChange(value)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.75l-6.25 3.25L7.5 13.5l-5-4.875 6.875-.875L12 2.25l2.625 5.5 6.875.875-5 4.875 1.75 7.5z"
              />
            </svg>
          ))}
        </div>

        {/* Using InputBox component for the feedback text input */}
        <InputBox
          id="feedbackText"
          type="text"
          value={feedback}
          setValue={setFeedback}  // This will update the feedback state
          placeholder="Write your feedback here..."
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-cBlue text-cGray rounded-lg text-lg focus:outline-none hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Feedback;