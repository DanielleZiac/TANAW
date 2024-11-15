"use client"; // Mark as client component to use client-side interactivity

// App.tsx or main page component
import React from 'react';
import IconsComponent from '../home/IconsComponent';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <IconsComponent />
    </div>
  );
};




export default Home;
