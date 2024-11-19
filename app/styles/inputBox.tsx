// src/components/InputBox.tsx
import React from 'react';

interface InputBoxProps {
  id: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  widthClass?: string; // Optional class for width customization
}

const InputBox: React.FC<InputBoxProps> = ({
  id,
  type,
  value,
  setValue,
  placeholder,
  widthClass = "w-full sm:w-3/4 lg:w-1/2", // Responsive width classes
}) => (
  <div className={`mb-4 ${widthClass}`}>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      className="appearance-none rounded-lg py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-cBlue text-base sm:text-lg bg-lightGray"
      placeholder={placeholder}
      style={{
        boxShadow: "inset 0px 4px 12px rgba(0, 0, 0, 0.2)", // Lighter shadow effect
        borderRadius: '8px', // Slightly smaller border radius for compact look
      }}
    />
  </div>
);

export default InputBox;
