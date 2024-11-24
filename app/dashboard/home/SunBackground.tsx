import React, { ReactNode } from 'react';
import Sun from './newhome.png'; // Import your image

interface SunBackgroundProps {
  children: ReactNode;
}

const SunBackground: React.FC<SunBackgroundProps> = ({ children }) => {
  return (
    <div
      className="ml-auto w-full min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${Sun.src})`, // Make sure this path is correct
        backgroundSize: 'cover', // This ensures the image covers the entire container
        backgroundPosition: 'center', // Ensures the image is centered
        backgroundAttachment: 'fixed', // Ensures the background stays fixed during scroll
      }}
    >
      {children}
    </div>
  );
};

export default SunBackground;