"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import InputBox from '../styles/inputBox'; // Import the InputBox component
import { baseButtonClass } from '../styles/buttonStyles';

const Login: React.FC = () => {
  const router = useRouter();
  const [srCode, setSrCode] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (srCode && password) {
      router.push('/home');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-40"> {/* Center horizontally and align at the top */}
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-sky-400">
        TANAW
      </h1>
      <div className="p-10 rounded-lg w-full max-w-lg bg-lightGray">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <InputBox
            id="sr-code"
            type="text"
            value={srCode}
            setValue={setSrCode}
            placeholder="SR Code"
          />
          <InputBox
            id="password"
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          <div className="mb-6 text-center w-3/4">
            <p className="text-gray-600 text-lg md:text-xl">
              Don&apos;t have an account yet?{' '}
              <Link href="/signup">
                <span className="text-blue-500 cursor-pointer text-lg md:text-xl">Sign Up</span>
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className={`${baseButtonClass} w-3/4 text-2xl md:text-3xl lg:text-4xl mt-4`} 
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
