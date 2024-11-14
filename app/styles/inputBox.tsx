// src/components/InputBox.tsx

import React from 'react';

interface InputBoxProps {
  id: string;
  type: string;
  placeholder: string;
}

const InputBox: React.FC<InputBoxProps> = ({ id, name, type, placeholder }) => (
  <div className="mb-4 w-3/4">
    <input
      id={id}
      name={name}
      type={type}
      required
      className="appearance-none rounded-lg py-4 px-4 text-gray-700  w-full focus:outline-none text-lg bg-lightGray"
      placeholder={placeholder}
      style={{
        boxShadow: "inset 0px 8px 20px rgba(0, 0, 0, 0.4)",
        borderRadius: '12px',
      }}
    />
  </div>
);

export default InputBox;