import React from 'react';
import About from '../components/About'; // Adjust the path if needed
import MainLayout from '../components/layouts/MainLayout'; // Adjust to your project structure

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <About />
      </div>
    </MainLayout>
  );
};

export default AboutPage;