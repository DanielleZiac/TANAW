"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import backgroundImage from '../../public/images/auth.png';
import ButtonBox from '../styles/buttonBox';
import InputBox from '../styles/inputBox';
import TextBoxPanel from '../styles/textBox';

import { login, getInstitutions, signup } from "../auth/actions"

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
  // const [school, setSchool] = useState('');
  // const [institutions, setInstitution] = useState<Institution[]>([]);
  const [signUpPassword, setSignUpPassword] = useState('');
  // const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [institutions, setInstitution] = useState<Array<any> | null>(null);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    console.log("srCode")

    if (srCode && password) {

      const schoolElement = document.getElementById("school") as HTMLSelectElement | null;

      if (schoolElement) {
        const school = schoolElement.value;
        let data = {
          srCode,
          password,
          school
        }
        let res = await login(data)
        setError(res);
        // router.push('/home');
      } else {
        console.log("no school element");
      }
    } else {
      alert('Please fill in both fields.');
    }

  };

  const Login = async() => {

    if (srCode && password) {

      const schoolElement = document.getElementById("schoolLogin") as HTMLSelectElement | null;

      if (schoolElement) {
        const school = schoolElement.value;
        let data = {
          srCode,
          password,
          school
        }
        let res = await login(data)
        console.log(res)
        setError(res);
        // router.push('/home');
      } else {
        console.log("no school element");
      }
    } else {
      alert('Please fill in both fields.');
    }
  }

  const Signup = async() => {
    const schoolElement = document.getElementById("schoolSignup") as HTMLSelectElement | null;

    if (schoolElement) {
      const school = schoolElement.value;

      if (signUpPassword != confirmPassword) {
        setError("password != confirmPassword")
        return
      }
    
      // console.log(termsAccepted)
      // if (termsAccepted) {
        // router.push("/createavatar");
        let data = {
          srCode: srCode,
          firstName: firstName,
          lastName: lastName,
          school: school,
          password: signUpPassword
        }
  
        let res = await signup(data) as string;
        setError(res)
  
      // } else {
      //   setError("Please accept the terms and conditions.")
      //   // alert("Please accept the terms and conditions.");
      // }
    } else {
      console.log("School elem not foun");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getInstitutions();
      setInstitution(res);
    }
    fetchData()
  }, [])

  console.log(institutions)

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
      className="flex h-screen overflow-x-hidden overflow-y-hidden scroll-smooth" 
      style={{ width: '100vw' }}
    >
      {/* Part 1 - Login Section */}
      <div className="flex-shrink-0 w-2/5 h-full flex items-start justify-start p-8 bg-[#dbdfe3]">
        <div className="w-full max-w-sm p-8 rounded-lg ml-8 mt-24">
        <p className="text-left -mr-14 font-extrabold text-blue-800 text-4xl mb-4">Welcome Back!</p>
        <p className="text-left -mr-14 text-blue-900 text-sm mb-8">To keep connected with us please <br />login with your personal info</p>
          <form onSubmit={handleSubmit}>
          <InputBox id="sr-code" type="text" value={srCode} setValue={setSrCode} placeholder="SR-Code" style={{ width: '110%'}} />
          <div className="mb-2 w-3/4">
            <select 
              id="schoolLogin"
              name="school" 
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
              >
              <option value="">--</option>
              {institutions ? institutions.map((institution, index) => (
                <option key={index} value={institution.institution}>{institution.institution}</option>
              )) : null}
            </select>
          </div>
{/*          <InputBox 
            id="school" 
            type="select" 
            value={school} 
            setValue={setSchool} 
            placeholder="Select School/Institution" 
            style={{ width: '110%', height: '50%'}}
            placeholderColor='#6F728F'
            options={['BSU', 'ADMU', 'DLSU']} 
          />*/}
          <InputBox id="password" type="password" value={password} setValue={setPassword} placeholder="Password" style={{ width: '110%', color: "black"}} />
          <ButtonBox onClick={Login} style={{ width: '120%',}}>Log In</ButtonBox>
          </form>

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
        className="flex-shrink-0 w-3/5 h-full flex items-center justify-center p-8 bg-[#dbdfe3]"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: '100%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>

      {/* Part 3 - Sign-Up Section */}
      <div className="flex-shrink-0 w-2/5 h-full flex items-start justify-end p-8 bg-[#dbdfe3]">
        <div className="w-full max-w-sm p-8 rounded-lg mr-24 mt-8">
          <p className="text-right -mr-14 font-extrabold text-blue-800 text-4xl mb-4">Hello, Friend!</p>
          <p className="text-right -mr-14 text-blue-900 text-sm mb-8">Enter your personal details and start journey with us</p>
          <form onSubmit={handleSubmit}>
          <InputBox id="sign-up-sr-code" type="text" value={srCode} setValue={setSrCode} placeholder="SR-Code" style={{ width: '110%', height: '50%'}} />
          <InputBox id="first-name" type="text" value={firstName} setValue={setFirstName} placeholder="First Name" style={{ width: '110%', height: '50%'}} />
          <InputBox id="last-name" type="text" value={lastName} setValue={setLastName} placeholder="Last Name" style={{ width: '110%', height: '50%'}} />
          
          <div className="mb-2 w-3/4">
            <select 
              id="schoolSignup"
              name="school" 
              required
              className="appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight bg-gray-100 w-full focus:outline-none shadow-inner"
              style={{
                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
                border: 'none',
              }}
              >
              <option value="">--</option>
              {institutions ? institutions.map((institution, index) => (
                <option key={index} value={institution.institution}>{institution.institution}</option>
              )) : null}
            </select>
          </div>

                      {/* School/Institution Dropdown */}
{/*          <InputBox 
            id="school" 
            type="select" 
            value={school} 
            setValue={setSchool} 
            placeholder="Select School/Institution" 
            style={{ width: '110%', height: '50%'}}
            placeholderColor='#6F728F'
            options={['BSU', 'ADMU', 'DLSU']} 
          />*/}

          <InputBox id="sign-up-password" type="password" value={signUpPassword} setValue={setSignUpPassword} placeholder="Password" style={{ width: '110%', height: '50%'}} />
          <InputBox id="sign-up-confirmpassword" type="password" value={confirmPassword} setValue={setConfirmPassword} placeholder="Confirm Password" style={{ width: '110%', height: '50%'}} />


          {/* error msg */}
          <div className="mb-4 w-3/4">
            <p className="text-sm text-red-500">{error}</p>
          </div>


          {/* Terms and Conditions within TextBoxPanel */}
          <TextBoxPanel style={{ height: '25px', width: '120%' }}>
            <label className="flex items-center justify-center text-xs -mt-2">
              <input type="checkbox" className="mr-2" />
              Terms and Conditions
            </label>
          </TextBoxPanel>
          
          <ButtonBox onClick={Signup} style={{ width: '120%', height: '50%', marginTop: '12px'}}>Proceed to Avatar</ButtonBox>
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