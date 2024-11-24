import React, { ReactNode } from 'react';
import Sun from './newhome.png'; // Import your image

interface SunBackgroundProps {
  children: ReactNode;
}

const SunBackground: React.FC<SunBackgroundProps> = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-fixed bg-[#7db7cb]"
      style={{
        backgroundImage: `url(${Sun.src})`, // Ensure this path is correct
        backgroundSize: '80%', // Ensures the image covers the entire container
        backgroundPosition: '250px center', // Moves the image 10% to the right from center
        backgroundAttachment: 'fixed', // Ensures the background stays fixed during scroll
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default SunBackground;
