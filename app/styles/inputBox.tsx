// src/components/InputBox.tsx

import React from 'react';

interface InputBoxProps {
  id: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const InputBox: React.FC<InputBoxProps> = ({ id, type, value, setValue, placeholder }) => (
  <div className="mb-4 w-3/4">
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
