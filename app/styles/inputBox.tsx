<<<<<<< HEAD
=======
// src/components/InputBox.tsx

>>>>>>> e5d8739ea7bf8947ce78704e857fb6ca815ccd85
import React from 'react';

interface InputBoxProps {
  id: string;
<<<<<<< HEAD
  type: string; 
=======
  type: string; // "text" or "select"
>>>>>>> e5d8739ea7bf8947ce78704e857fb6ca815ccd85
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  style?: React.CSSProperties;
<<<<<<< HEAD
  options?: string[]; 
  placeholderColor?: string; 
=======
  options?: string[]; // Optional, for dropdown options
  placeholderColor?: string; // Custom placeholder color
>>>>>>> e5d8739ea7bf8947ce78704e857fb6ca815ccd85
}

const InputBox: React.FC<InputBoxProps> = ({
  id,
  type,
  value,
  setValue,
  placeholder,
  style,
  options,
<<<<<<< HEAD
  placeholderColor = '#6F728F', 
=======
  placeholderColor = '#6F728F', // Default placeholder color
>>>>>>> e5d8739ea7bf8947ce78704e857fb6ca815ccd85
}) => {
  const baseStyle = {
    boxShadow: 'inset 0px 8px 20px rgba(0, 0, 0, 0.4)',
    borderRadius: '12px',
  };
<<<<<<< HEAD
=======

  return (
    <div className="mb-4" style={style}>
      {type === 'select' && options ? (
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="appearance-none rounded-lg py-4 px-4 w-full focus:outline-none text-lg bg-lightGray"
          style={{
            ...baseStyle,
            ...style,
            color: value ? '#000' : placeholderColor, // Adjust text color based on selection
          }}
        >
          <option value="" disabled style={{ color: placeholderColor }}>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="appearance-none rounded-lg py-4 px-4 w-full focus:outline-none text-lg bg-lightGray placeholder-gray-500"
          placeholder={placeholder}
          style={{
            ...baseStyle,
            ...style,
          }}
        />
      )}
    </div>
  );
};
>>>>>>> e5d8739ea7bf8947ce78704e857fb6ca815ccd85

  return (
    <div className="mb-4" style={style}>
      {type === 'select' && options ? (
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="appearance-none rounded-lg py-4 px-4 w-full focus:outline-none text-lg bg-lightGray"
          style={{
            ...baseStyle,
            ...style,
            color: value ? '#000' : placeholderColor, 
          }}
        >
          <option value="" disabled style={{ color: placeholderColor }}>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="appearance-none rounded-lg py-4 px-4 w-full focus:outline-none text-lg bg-lightGray placeholder-gray-500"
          placeholder={placeholder}
          style={{
            ...baseStyle,
            ...style,
          }}
        />
      )}
    </div>
  );
};

export default InputBox;
