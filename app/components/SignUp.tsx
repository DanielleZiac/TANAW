import {signup} from "../auth/actions"

import React from 'react';
import Link from 'next/link';

const Signup: React.FC = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">
        Create an Account
      </h1>
      <div className="bg-transparent p-8 rounded-lg w-full max-w-sm">
        <form className="flex flex-col items-center">
          <div className="mb-2 w-3/4">
            <input
              type="text"
              id="srCode"
              name="srCode"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              placeholder="SR Code"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
            />
          </div>
          <div className="mb-2 w-3/4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              placeholder="First Name"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
            />
          </div>
          <div className="mb-2 w-3/4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              placeholder="Last Name"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
            />
          </div>
          <div className="mb-2 w-3/4">
            <select 
              id="school"
              name="school" 
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
              >
              <option value="bsu">BSU</option>
              <option value="others">others</option>
            </select>
          </div>
          <div className="mb-2 w-3/4">
            <input
              type="password"
              id="password"
              name="password"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              placeholder="Password"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
            />
          </div>
          <div className="mb-4 w-3/4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              placeholder="Confirm Password"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
            />
          </div>
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          <div className="mb-4 text-center w-3/4">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link href="/auth/login">
                <span className="text-blue-500 cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
          <button
            formAction={signup}
            className="bg-white text-indigo-500 font-bold py-3 px-4 rounded-full focus:outline-none w-3/4 shadow-lg drop-shadow-xl"
            style={{
              border: 'none',
              boxShadow: 'none',
            }}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
