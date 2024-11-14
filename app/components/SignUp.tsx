// src/pages/signup.tsx
"use client";

import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonBox from "../styles/buttonBox"; // Import the reusable button box component

import { signup, getInstitutions } from "../auth/actions"

const Signup: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [institutions, setInstitution] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await getInstitutions();
      setInstitution(res);
    }
    fetchData()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let data = {}
    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    let res = await signup(data);
    console.log(res);
    setError(res)

    // router.push("/createavatar");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">
        Create an Account
      </h1>
      <div className="p-8 rounded-lg w-full max-w-sm">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="mb-2 w-3/4">
            <input
              type="text"
              id="sr-code"
              name="srCode"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              placeholder="SR Code"
              style={{
                boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.2)",
                border: "none",
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
                boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.2)",
                border: "none",
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
                boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.2)",
                border: "none",
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
              <option value="">--</option>
              {institutions.map((institution, index) => (
                <option key={index} value={institution.institution}>{institution.institution}</option>
              ))}
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
                boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.2)",
                border: "none",
              }}
            />
          </div>
          <div className="mb-4 w-3/4">
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.2)",
                border: "none",
              }}
            />
          </div>
          <div className="mb-4 w-3/4">
            <p className="text-sm text-red-500">{error}</p>
          </div>

          {/* Terms and Conditions Checkbox with ButtonBox */}
          <div className="mb-4 w-3/4">
            <ButtonBox>
              <input
                type="checkbox"
                id="terms"
                required
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                
                  Terms and Conditions
                
              </label>
            </ButtonBox>
          </div>

          <div className="mb-4 text-center w-3/4">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link href="/auth/login">
                <span className="text-blue-500 cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-white text-indigo-500 font-bold py-3 px-4 rounded-full focus:outline-none w-3/4 shadow-lg drop-shadow-xl"
          >
            Proceed to Avatar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;