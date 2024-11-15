// src/components/ButtonBox.tsx
import React from 'react';

interface ButtonBoxProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties; // Add style prop
}

const ButtonBox: React.FC<ButtonBoxProps> = ({ children, onClick, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#e4e9ef] text-gray-700 rounded-lg py-4 px-6 w-full shadow-lg flex items-center justify-center space-x-4 hover:bg-gray-100 focus:outline-none"
      style={{
        boxShadow:
          "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), " +
          "0px -6px 10px rgba(255, 255, 255, 0.2)",
        ...style, // Merge inline styles passed as props
      }}
    >
      {children}
    </button>
  );
};

export default ButtonBox;
