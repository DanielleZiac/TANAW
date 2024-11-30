"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import backgroundImage from '../../public/images/auth.png';
import backgroundImageMobile from '../../public/images/sun.jpeg';
import ButtonBox from '../styles/buttonBox';
import InputBox from '../styles/inputBox';
import TextBoxPanel from '../styles/textBox';

import { login, getInstitutions, signup } from "../auth/actions";

// Define a type for the institution data
type Institution = {
  institution: string;
};

const Login: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const signUpSectionRef = useRef<HTMLDivElement>(null); // Reference to the Sign-Up Section
  const [isMobile, setIsMobile] = useState(false);

  const [srCode, setSrCode] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [institutions, setInstitution] = useState<Array<any> | null>(null);


  const Login = async () => {
    console.log(srCode, password, firstName, lastName, confirmPassword)
    if (srCode && password) {
      const schoolElement = document.getElementById("schoolLogin") as HTMLSelectElement | null;
      if (schoolElement) {
        const school = schoolElement.value;
        let data = { srCode, password, school };
        let res = await login(data);
        // setError(res);
        alert(res ?? null);
      } else {
        console.log("no school element");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };


  const Signup = async () => {
    console.log(srCode, password, firstName, lastName, confirmPassword);
    const schoolElement = document.getElementById("schoolSignup") as HTMLSelectElement | null;
  
    // Ensure all fields are filled
    if (srCode && password && firstName && lastName && confirmPassword) {
      if (schoolElement) {
        const school = schoolElement.value;
  
        // Check if passwords match
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
  
        // Prepare data and call signup API
        let data = { srCode, firstName, lastName, school, password };
        let res = await signup(data);
  
        // Handle response
        alert(res ?? null);
      } else {
        console.log("No school element");
      }
    } else {
      alert("All fields are required");
    }
  };
  


  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getInstitutions();
      setInstitution(res);
    };
    fetchData();
  }, []);


  const handleSignUpClick = () => {
    setSrCode("")
    setPassword("")
    setFirstName("")
    setLastName("")
    setConfirmPassword("")
    if (signUpSectionRef.current) {
      if (isMobile) {
        signUpSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        containerRef.current!.scrollLeft = containerRef.current!.clientWidth;
      }
    }
  };

  const handleSignInClick = () => {
    setSrCode("")
    setPassword("")
    setFirstName("")
    setLastName("")
    setConfirmPassword("")
    if (containerRef.current) {
      if (isMobile) {
        containerRef.current.scrollTop = 0;
      } else {
        containerRef.current.scrollLeft = 0;
      }
    }
  };



  return (
    <div
      ref={containerRef}
      className="flex h-screen overflow-x-hidden overflow-y-hidden scroll-smooth flex-col md:flex-row"
      style={{ width: '100vw' }}
    >

      {/* Part 1 - Login Section */}
      <div className="flex-shrink-0 w-full  md:w-2/5 h-full flex items-start justify-start p-8 bg-[#dbdfe3]">
        <div className="w-full max-w-sm xl:p-8 sm:mr-36 rounded-lg ml-1 mt-10 mr-12 xl:mr-24">
          <p className="text-left font-extrabold text-blue-800 text-4xl mb-4">Welcome Back!</p>
          <p className="text-left text-blue-900 text-sm mb-8">To keep connected with us please login with your personal info</p>
          <form>
            <InputBox
              id="sr-code"
              type="text"
              value={srCode}
              setValue={setSrCode}
              placeholder="SR-Code"
              style={{ width: '110%'}}
            />

            <select
              id="schoolLogin"
              name="school"
              required
              className="appearance-none rounded-lg py-4 px-4 w-full focus:outline-none text-lg text-gray-500 bg-lightGray placeholder-gray-500 mb-4"
              style={{
                boxShadow: 'inset 0px 8px 20px rgba(0, 0, 0, 0.4)',
                border: 'none',
                width: '120%'
              }}
            >
              {institutions ? institutions.map((institution, index) => (
                <option key={index} value={institution.institution}>{institution.institution}</option>
              )) : null}

            </select>
            <InputBox
              id="password"
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="Password"
              style={{ width: '110%' }}
            />
            <ButtonBox onClick={Login} style={{ width: '120%' }}>Log In</ButtonBox>
          </form>

          <p className="text-gray-600 text-lg md:text-xl mt-2">
            <Link href="/auth/resetPassword">
              <span className="text-blue-500 cursor-pointer">Forgot Password</span>
            </Link>
          </p>

          <p className="text-sm text-blue-700 mb-4">
            Don’t have an account yet? <span onClick={handleSignUpClick} className="text-blue-700 cursor-pointer"><u>Sign up</u></span>
          </p>
        </div>
      </div>


      {/* Part 2 - Center Section (with Background Image) */}
      <div
        className="flex-shrink-0 w-full md:w-3/5 h-full flex items-center justify-center p-8 bg-[#dbdfe3]"
        style={{
        backgroundImage: `url(${isMobile ? backgroundImageMobile.src : backgroundImage.src})`, // Use backgroundImageMobile for mobile devices
        backgroundSize: '100%',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        }}
        >
      </div>

   
      {/* Part 3 - Sign-Up Section */}
      <div ref={signUpSectionRef} className="flex-shrink-0 w-full md:w-2/5 h-full flex items-start justify-end p-8 bg-[#dbdfe3]">
        <div className="w-full max-w-sm lg:max-w-none xl:p-8 sm:mr-36 rounded-lg mt-10 lg:mt-4 mr-12 xl:mr-24">
          <p className="text-right font-extrabold text-blue-800 text-4xl mb-2 lg:-mr-16">Hello, Friend!</p>
          <p className=" text-center xl:text-right text-blue-900 text-sm mb-2 lg:-mr-16">Enter your personal details and start your journey with us</p>
          <form>
            <InputBox
              id="sign-up-sr-code"
              type="text"
              value={srCode}
              setValue={setSrCode}
              placeholder="SR-Code"
              style={{ width: '110%', height: '50%' }}
            />
            <InputBox
              id="first-name"
              type="text"
              value={firstName}
              setValue={setFirstName}
              placeholder="First Name"
              style={{ width: '110%', height: '50%' }}
            />
            <InputBox
              id="last-name"
              type="text"
              value={lastName}
              setValue={setLastName}
              placeholder="Last Name"
              style={{ width: '110%', height: '50%' }}
            />

            
            <select
              id="schoolSignup"
              name="school"
              required
              className="appearance-none rounded-lg py-3 px-4 w-full focus:outline-none text-lg text-gray-500 bg-lightGray placeholder-gray-500 mb-4"
              style={{
                boxShadow: 'inset 0px 8px 20px rgba(0, 0, 0, 0.4)',
                border: 'none',
                width: '120%'
              }}
            >
              {institutions ? institutions.map((institution, index) => (
                <option key={index} value={institution.institution}>{institution.institution}</option>
              )) : null}
            </select>
          
            <InputBox
              id="sign-up-password"
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="Password"
              style={{ width: '110%', height: '50%' }}
            />
            <InputBox
              id="sign-up-confirmpassword"
              type="password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder="Confirm Password"
              style={{ width: '110%', height: '50%' }}
            />

            {/* Terms and Conditions within TextBoxPanel */}
            <TextBoxPanel style={{ height: '10px', width: '120%' , marginBottom: '10px' }}>
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