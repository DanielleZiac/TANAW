"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputBox from "../styles/inputBox"; // Corrected import path for InputBox
import { baseButtonClass } from "../styles/buttonStyles"; // Import baseButtonClass
import ButtonBox from "../styles/buttonBox"; // Import ButtonBox component

const Signup: React.FC = () => {
  const router = useRouter();
  const [srCode, setSrCode] = useState("");
  const [username, setUsername] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // Add state for terms acceptance

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (termsAccepted) {
      router.push("/createavatar");
    } else {
      alert("Please accept the terms and conditions.");
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
              <Link href="/login">
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
