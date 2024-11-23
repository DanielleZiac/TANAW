"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import InputBox from '../styles/inputBox';
import ButtonBox from '../styles/buttonBox';
import { baseButtonClass } from '../styles/buttonStyles';

interface AuthPageProps {
  section: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ section }) => {
  const router = useRouter();
  const [srCode, setSrCode] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [school, setSchool] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // State for controlling form visibility
  const [isLoginVisible, setIsLoginVisible] = useState(section === 'login');

  // Refs for scrolling
  const signupRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  // Adjust the form visibility based on section prop (useEffect)
  useEffect(() => {
    setIsLoginVisible(section === 'login');
  }, [section]);

  // Handle scroll to signup
  const scrollToSignup = () => {
    setIsLoginVisible(false);
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle scroll to login
  const scrollToLogin = () => {
    setIsLoginVisible(true);
    loginRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle Login Submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (srCode && password) {
      router.push('/home');
    } else {
      alert('Please fill in both fields.');
    }
  };

  // Handle Signup Submit
  const handleSignupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (termsAccepted) {
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      router.push('/createavatar');
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  // Form JSX (common for login and signup)
  const renderForm = (isLogin: boolean) => (
    <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit} className="flex flex-col items-center">
      <InputBox
        id="sr-code"
        type="text"
        value={srCode}
        setValue={setSrCode}
        placeholder="SR Code"
      />
      {!isLogin && (
        <>
          <InputBox
            id="username"
            type="text"
            value={username}
            setValue={setUsername}
            placeholder="Username"
          />
          <InputBox
            id="school"
            type="text"
            value={school}
            setValue={setSchool}
            placeholder="School/Institution"
          />
        </>
      )}
      <InputBox
        id="password"
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      {!isLogin && (
        <InputBox
          id="confirm-password"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm Password"
        />
      )}

      {!isLogin && (
        <div className="mb-4 w-3/4">
          <ButtonBox>
            <input
              type="checkbox"
              id="terms"
              required
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              Terms and Conditions
            </label>
          </ButtonBox>
        </div>
      )}

      <button
        type="submit"
        className={`${baseButtonClass} w-3/4 text-2xl md:text-3xl lg:text-4xl mt-4`}
      >
        {isLogin ? 'Log in' : 'Proceed to Avatar'}
      </button>
      <div className="mt-6 text-center w-3/4">
        <p className="text-gray-600 text-lg md:text-xl">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            onClick={isLogin ? scrollToSignup : scrollToLogin}
            className="text-blue-500 cursor-pointer text-lg md:text-xl"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
        </p>
      </div>
    </form>
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start px-4 py-16"
      style={{ backgroundImage: "url('/your-bg-image.jpg')" }} // Replace with your background image path
    >
      {/* Login Section */}
      {isLoginVisible && (
        <div ref={loginRef} className="w-full max-w-lg p-10 rounded-lg bg-lightGray bg-opacity-80 backdrop-blur-lg shadow-lg mb-20">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-sky-400">
            TANAW
          </h1>
          {renderForm(true)}
        </div>
      )}

      {/* Signup Section */}
      {!isLoginVisible && (
        <div ref={signupRef} className="w-full max-w-lg p-10 rounded-lg bg-lightGray bg-opacity-80 backdrop-blur-lg shadow-lg">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-sky-400">
            Sign Up
          </h1>
          {renderForm(false)}
        </div>
      )}
    </div>
  );
};

export default AuthPage;