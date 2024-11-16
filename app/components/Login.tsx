"use client";

import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import InputBox from '../styles/inputBox'; // Import the InputBox component
import { baseButtonClass } from '../styles/buttonStyles';

import { login, getInstitutions } from "../auth/actions"

const Login: React.FC = () => {
  const router = useRouter();
  const [srCode, setSrCode] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const [institutions, setInstitution] = useState([]);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (srCode && password) {
      let school = document.getElementById("school").value;

      let data = {
        srCode,
        password,
        school
      }
      let res = await login(data)
      setError(res);
      // router.push('/home');
    } else {
      alert('Please fill in both fields.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getInstitutions();
      setInstitution(res);
    }
    fetchData()
  }, [])

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
              <option value="">--</option>
              {institutions.map((institution, index) => (
                <option key={index} value={institution.institution}>{institution.institution}</option>
              ))}
            </select>
          </div>
          <InputBox
            id="password"
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          <div className="mb-6 text-center w-3/4">


            {/* error msg */}
            <div className="mb-4 w-3/4">
              <p className="text-sm text-red-500">{error}</p>
            </div>
            <p className="text-gray-600 text-lg md:text-xl">
              {' '}
              <Link href="/auth/resetPassword">
                <span className="text-blue-500 cursor-pointer text-lg md:text-xl">Forgot Password</span>
              </Link>
            </p>


            <p className="text-gray-600 text-lg md:text-xl">
              Don&apos;t have an account yet?{' '}
              <Link href="/auth/signup">
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