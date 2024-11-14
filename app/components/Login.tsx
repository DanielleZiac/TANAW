"use client"

import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import InputBox from '../styles/inputBox'; // Import the InputBox component

import { login, getInstitutions } from "../auth/actions"

const Login: React.FC = () => {
  const router = useRouter();
  const [srCode, setSrCode] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [institutions, setInstitution] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getInstitutions();
      setInstitution(res);
    }
    fetchData()
  }, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let data = {}
    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log(data);
    let res = await login(data);
    console.log(res)
    setError(res)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-sky-400">
        TANAW
      </h1>
      <div className="p-10 rounded-lg w-full max-w-lg bg-lightGray">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <InputBox
            id="srCode"
            name="srCode"
            type="text"
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
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className="mb-4 w-3/4">
            <p className="text-sm text-red-500">{error}</p>
          </div>
          <div className="mb-6 text-center w-3/4">
            <p className="text-gray-600 text-lg md:text-xl">
              Don&apos;t have an account yet?{' '}
              <Link href="/auth/signup">
                <span className="text-blue-500 cursor-pointer text-lg md:text-xl">Sign Up</span>
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-white text-indigo-500 font-bold py-5 px-8 rounded-full w-3/4 shadow-lg text-2xl md:text-3xl lg:text-4xl focus:outline-none"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;