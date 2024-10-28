import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">
        TANAW
      </h1>
      <div className="bg-transparent p-8 rounded-lg w-full max-w-sm">
        <form className="flex flex-col items-center">
          <div className="mb-2 w-3/4">
            <input
              type="text"
              id="sr-code"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none"
              placeholder="SR Code"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                border: 'none',
              }}
            />
          </div>
          <div className="mb-2 w-3/4">
            <input
              type="password"
              id="password"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none"
              placeholder="Password"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                border: 'none',
              }}
            />
          </div>
          <div className="mb-4 text-center w-3/4">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account yet?{' '}
              <Link href="/signup">
                <span className="text-blue-500 cursor-pointer">Sign In</span>
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-white text-indigo-500 font-bold py-3 px-4 rounded-full focus:outline-none w-3/4 shadow-lg drop-shadow-xl"
            style={{
              border: 'none',
              boxShadow: 'none',
            }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
