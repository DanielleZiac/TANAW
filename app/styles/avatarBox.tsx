import React from "react";

interface AvatarBoxProps {
  children?: React.ReactNode;
  title?: string;
}

const AvatarBox: React.FC<AvatarBoxProps> = ({ children, title }) => {
  return (
    <div className="text-center w-full">
      {title && <p className="text-gray-800 text-2xl font-bold mt-10">{title}</p>}
      <div
        className="rounded-xl w-full h-64 flex items-center justify-center mb-6 px-4"
        style={{
          backgroundColor: "white",
          boxShadow: "inset 0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        {children || <div className="text-gray-400 text-base">Avatar will be displayed here</div>}
      </div>
    </div>
  );
};

export default AvatarBox;