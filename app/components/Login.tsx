"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import backgroundImage from '../../public/images/auth.png';
import ButtonBox from '../styles/buttonBox';
import InputBox from '../styles/inputBox';
import TextBoxPanel from '../styles/textBox';

import { login, getInstitutions } from "../auth/actions"

// Define a type for the institution data
type Institution = {
  institution: string;
};

const Login: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [srCode, setSrCode] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [school, setSchool] = useState('');
  const [institutions, setInstitution] = useState<Institution[]>([]);
  const [signUpPassword, setSignUpPassword] = useState('');
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

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

  const handleSignUpClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.clientWidth;
    }
  };

  const handleSignInClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="flex h-screen overflow-x-hidden scroll-smooth" 
      style={{ width: '200vw' }}
    >
      {/* Part 1 - Login Section */}
      <div className="flex-shrink-0 w-2/5 h-full flex items-start justify-start p-8 bg-[#dbdfe2] bg-opacity-70">
        <div className="w-full max-w-sm p-8 rounded-lg ml-8 mt-24">
        <p className="text-left -mr-14 font-extrabold text-blue-800 text-4xl mb-4">Welcome Back!</p>
        <p className="text-left -mr-14 text-blue-900 text-sm mb-8">To keep connected with us please <br />login with your personal info</p>
          <form onSubmit={handleSubmit}>
          <InputBox id="sr-code" type="text" value={srCode} setValue={setSrCode} placeholder="SR-Code" style={{ width: '120%'}} />
          <div className="mb-4">
              <select 
                id="sign-up-school"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
                className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              >
                <option value="">-- Select School --</option>
                {institutions.map((institution, index) => (
                  <option key={index} value={institution.institution}>{institution.institution}</option>
                ))}
              </select>
            </div>
          <InputBox id="password" type="password" value={password} setValue={setPassword} placeholder="Password" style={{ width: '120%'}} />
          <ButtonBox style={{ width: '120%'}}>Log In</ButtonBox>
          </form>
          <p className="text-sm text-blue-700 mt-5">
          <Link href="/auth/resetPassword">
              <span>Forgot Password</span>
            </Link>
          </p>

          <p className="text-sm text-blue-700 mb-4">
            Don’t have an account yet? <span onClick={handleSignUpClick} className="text-blue-700 cursor-pointer"><u>Sign up</u></span>
          </p>
          
          
        </div>
      </div>

      {/* Part 2 - Center Section (with Background Image) */}
      <div
        className="flex-shrink-0 w-3/5 h-full flex items-center justify-center p-8 bg-[#dbdfe2] bg-opacity-70"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: '80%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>

      {/* Part 3 - Sign-Up Section */}
      <div className="flex-shrink-0 w-2/5 h-full flex items-start justify-end p-8 bg-[#dbdfe2] bg-opacity-70">
        <div className="w-full max-w-sm p-8 rounded-lg mr-24 mt-8">
          <p className="text-right -mr-14 font-extrabold text-blue-800 text-4xl mb-4">Hello, Friend!</p>
          <p className="text-right -mr-14 text-blue-900 text-sm mb-8">Enter your personal details and start journey with us</p>
          <form onSubmit={handleSubmit}>
          <InputBox id="sign-up-sr-code" type="text" value={srCode} setValue={setSrCode} placeholder="SR-Code" style={{ width: '120%'}} />
          <InputBox id="first-name" type="text" value={firstName} setValue={setFirstName} placeholder="First Name" style={{ width: '120%'}} />
          <InputBox id="last-name" type="text" value={lastName} setValue={setLastName} placeholder="Last Name" style={{ width: '120%'}} />
          
          {/* School/Institution Dropdown */}
          <div className="mb-4">
              <select 
                id="school"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
                className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              >
                <option value="">-- Select School --</option>
                {institutions.map((institution, index) => (
                  <option key={index} value={institution.institution}>{institution.institution}</option>
                ))}
              </select>
            </div>

          <InputBox id="sign-up-password" type="password" value={signUpPassword} setValue={setSignUpPassword} placeholder="Password" style={{ width: '120%'}} />

          {/* Terms and Conditions within TextBoxPanel */}
          <TextBoxPanel style={{ height: '10px', width: '120%' }}>
            <label className="flex items-center justify-center text-xs -mt-2">
              <input type="checkbox" className="mr-2" />
              Terms and Conditions
            </label>
          </TextBoxPanel>
          
          <ButtonBox style={{ width: '120%'}}>Proceed to Avatar</ButtonBox>
          </form>
          <p className="text-sm text-blue-800 mb-4 mt-4">
            Already have an account? <span onClick={handleSignInClick} className="text-blue-800 cursor-pointer"><u>Sign in</u></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;