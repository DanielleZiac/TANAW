import React from 'react';

interface InputBoxProps {
  id: string;
  type: string; 
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  style?: React.CSSProperties;
  options?: string[]; 
  placeholderColor?: string; 
}

const InputBox: React.FC<InputBoxProps> = ({
  id,
  type,
  value,
  setValue,
  placeholder,
  style,
  options,
  placeholderColor = '#6F728F', 
}) => {
  const baseStyle = {
    boxShadow: 'inset 0px 8px 20px rgba(0, 0, 0, 0.4)',
    borderRadius: '12px',
  };

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
