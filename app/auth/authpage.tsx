import React, { useRef, useState } from 'react';
import backgroundImage from './auth.png';
import ButtonBox from '../styles/buttonBox';
import InputBox from '../styles/inputBox';
import TextBoxPanel from '../styles/textBox'; 

const AuthPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [srCode, setSrCode] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [school, setSchool] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

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
      <div className="flex-shrink-0 w-2/5 h-full flex items-start justify-start p-8 bg-[#dfe5e9] bg-opacity-100">
        <div className="w-full max-w-sm p-8 rounded-lg ml-8 mt-24">
          <p className="text-center -mr-14 font-extrabold text-blue-800 text-4xl mb-4">Welcome Back!</p>
          <p className="text-center -mr-14 text-blue-900 text-sm mb-8">To keep connected with us please <br />login with your personal info</p>
          <InputBox id="sr-code" type="text" value={srCode} setValue={setSrCode} placeholder="SR-Code" style={{ width: '110%'}} />

          <InputBox 
            id="school" 
            type="select" 
            value={school} 
            setValue={setSchool} 
            placeholder="Select School/Institution" 
            style={{ width: '110%', height: '50%'}}
            placeholderColor='#6F728F'
            options={['BSU', 'ADMU', 'DLSU']} 
          />
          
          <InputBox id="password" type="password" value={password} setValue={setPassword} placeholder="Password" style={{ width: '110%'}} />

          <p className="text-sm text-blue-700 mb-4">
            Don’t have an account yet? <span onClick={handleSignUpClick} className="text-blue-700 cursor-pointer"><u>Sign up</u></span>
          </p>
          <ButtonBox style={{ width: '120%'}}>Log In</ButtonBox>
        </div>
      </div>

      {/* Part 2 - Center Section */}
      <div
        className="flex-shrink-0 w-3/5 h-full flex items-center justify-center p-8 bg-[#dfe5e9] bg-opacity-100"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: '120%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>

      {/* Part 3 - Sign-Up Section */}
      <div className="flex-shrink-0 w-2/5 h-full flex items-start justify-end p-8 bg-[#dfe5e9] bg-opacity-100">

        <div className="w-full max-w-sm p-8 rounded-lg mr-24 mt-4">
        <p className="text-center -mr-14 font-extrabold text-blue-800 text-4xl mb-4">Hello, Friend!</p>
        <p className="text-center -mr-14 text-blue-900 text-sm mb-8">Enter your personal details and start journey with us</p>
          <InputBox id="sign-up-sr-code" type="text" value={srCode} setValue={setSrCode} placeholder="SR-Code" style={{ width: '110%', height: '50%'}} />
          <InputBox id="first-name" type="text" value={firstName} setValue={setFirstName} placeholder="First Name" style={{ width: '110%', height: '50%'}} />
          <InputBox id="last-name" type="text" value={lastName} setValue={setLastName} placeholder="Last Name" style={{ width: '110%', height: '50%'}} />

          {/* School/Institution Dropdown */}
          <InputBox 
            id="school" 
            type="select" 
            value={school} 
            setValue={setSchool} 
            placeholder="Select School/Institution" 
            style={{ width: '110%', height: '50%'}}
            placeholderColor='#6F728F'
            options={['BSU', 'ADMU', 'DLSU']} 
          />

          <InputBox id="sign-up-password" type="password" value={signUpPassword} setValue={setSignUpPassword} placeholder="Password" style={{ width: '110%', height: '50%'}} />

          {/* Terms and Conditions within TextBoxPanel */}
          <TextBoxPanel style={{ height: '25px', width: '120%' }}>
            <label className="flex items-center justify-center text-sm -mt-2">
              <input type="checkbox" className="mr-2" />
              Terms and Conditions
            </label>
          </TextBoxPanel>

          <p className="text-sm text-blue-800 mb-4 mt-4">
            Already have an account? <span onClick={handleSignInClick} className="text-blue-800 cursor-pointer"><u>Sign in</u></span>
          </p>
          <ButtonBox style={{ width: '120%', height: '50%'}}>Sign Up</ButtonBox>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
