"use client"; // Mark as client component to use client-side interactivity

// App.tsx or main page component
import React from 'react';
import AuthPage from '../auth/authpage';

const Auth: React.FC = () => {
  return (
    <div className="flex">
      <AuthPage />
    </div>
  );
};




export default Auth;
