// src/components/ButtonBox.tsx
import React from 'react';

interface ButtonBoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonBox: React.FC<ButtonBoxProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-cGray text-gray-700 rounded-lg py-4 px-6 w-full shadow-lg flex items-center justify-center space-x-4 hover:bg-gray-100 focus:outline-none"
      style={{
        boxShadow:
          "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), " + // Original shadows
          "0px -6px 10px rgba(255, 255, 255, 0.2)", // Outer white shadow on top
      }}
    >
      {children}
    </button>
  );
};

export default ButtonBox;