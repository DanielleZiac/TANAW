"use client";

import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputBox from "../styles/inputBox"; // Corrected import path for InputBox
import { baseButtonClass } from "../styles/buttonStyles"; // Import baseButtonClass
import ButtonBox from "../styles/buttonBox"; // Import ButtonBox component

import { signup, getInstitutions } from "../auth/actions"

const Signup: React.FC = () => {
  const router = useRouter();
  const [srCode, setSrCode] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  // const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // Add state for terms acceptance

  const [institutions, setInstitution] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const res = await getInstitutions();
      setInstitution(res);
    }
    fetchData()
  }, [])

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let school = document.getElementById("school").value;
    
    if (password != confirmPassword) {
      setError("password != confirmPassword")
      return
    }

    if (termsAccepted) {
      // router.push("/createavatar");
      let data = {
        srCode: srCode,
        firstName: firstname,
        lastName: lastname,
        school: school,
        password: password
      }

      let res = await signup(data);
      setError(res)

    } else {
      setError("Please accept the terms and conditions.")
      // alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-sky-400">
        TANAW
      </h1>
      <div className="p-10 rounded-lg w-full max-w-lg bg-lightGray">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <InputBox
            id="sr-code"
            type="text"
            value={srCode}
            setValue={setSrCode}
            placeholder="SR Code"
          />
          <InputBox
            id="firstname"
            type="text"
            value={firstname}
            setValue={setFirstname}
            placeholder="First Name"
          />
          <InputBox
            id="lastname"
            type="text"
            value={lastname}
            setValue={setLastname}
            placeholder="Lastname"
          />
{/*          <InputBox
            id="school"
            type="text"
            value={school}
            setValue={setSchool}
            placeholder="School/Institution"
          />*/}
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
          <InputBox
            id="confirm-password"
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="Confirm Password"
          />

          {/* error msg */}
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
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)} // Handle checkbox change
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                Terms and Conditions
              </label>
            </ButtonBox>
          </div>

          <div className="mb-6 text-center w-3/4">
            <p className="text-gray-600 text-lg md:text-xl">
              Already have an account?{" "}
              <Link href="/auth/login">
                <span className="text-blue-500 cursor-pointer text-lg md:text-xl">Log in</span>
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className={`${baseButtonClass} w-3/4 text-2xl md:text-3xl lg:text-4xl mt-4`}
          >
            Proceed to Avatar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;