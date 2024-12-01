// src/components/TextBoxPanel.tsx
import React from "react";

interface TextBoxPanelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string; // Add className for additional styling
}

const TextBoxPanel: React.FC<TextBoxPanelProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <div
      className={`bg-[#e4e9ef] text-gray-700 rounded-lg p-6 w-full shadow-lg flex flex-col space-y-4 ${className}`}
      style={{
        boxShadow:
          "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1), " +
          "0px -6px 10px rgba(255, 255, 255, 0.2)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default TextBoxPanel;
