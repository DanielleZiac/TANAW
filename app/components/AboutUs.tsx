
import React from "react";
import ButtonBox from "../styles/buttonBox";
import TextBoxPanel from "../styles/textBox";
import { RiLinkedinBoxFill } from "react-icons/ri";
import icon from "/public/images/SDG/SDG1.jpg";
import SDGlink7 from "/public/images/SDG/SDGlink17.jpg";
import logo from "/public/images/background/logo.png";
import SDGlink4 from "/public/images/SDG/SDGlink4.jpg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

interface IconProps {
  imageSrc: string;
}

const TeamMember: React.FC<IconProps> = ({ imageSrc }) => (
  <div
    className="rounded-full lg:p-5 p-8"
    style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
);

const AboutUsComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 lg:ml-64">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row gap-14 sm:gap-4">
        {/* Mobile logo */}
        <div className="flex items-center justify-center mt-24 lg:hidden">
          <img src={logo.src} style={{ width: '70%' }} alt="Logo" />
        </div>

        <div className="flex flex-col px-10 md:px-24 -mt-12 lg:-mt-0 lg:pl-24 lg:py-32 lg:px-0 lg:w-1/2 lg:mr-10">
          <p className="font-bold text-3xl md:text-8xl lg:text-5xl mb-4 lg:mt-8">About Us</p>
          <p className="break-words text-justify text-xs lg:text-base lg:mr-4">
            In 2024, we embarked on a mission to leverage the power of
            technology and social media for a greater purpose: empowering the
            global community to address the pressing challenges of our time.
            Inspired by the United Nations' 17 SDGs, we envisioned a platform
            that is more than just a space to connect—one that drives impactful
            action.
            <br />
            <br />
            From humble beginnings as a small team of dreamers, our platform
            has evolved into a vibrant community of like-minded individuals and
            organizations dedicated to creating real, measurable change.
            Together, we’re building a world where every post, story, and
            connection contributes to a sustainable future.
          </p>
        </div>
        <div className="lg:w-1/2 lg:mr-12 lg:mt-24 lg:block hidden">
          <img src={logo.src} style={{ width: 500 }} alt="Logo" />
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 px-6 lg:px-16 md:ml-2 -mt-10 lg:-mt-30">
        <TextBoxPanel>
          <div className="items-center">
            <p className="text-center text-blue-800 mb-2 lg:mb-6 font-bold text-2xl md:text-2xl lg:text-3xl">Vision</p>
            <p className="text-xs md:text-base text-justify md:py-4 px-2 md:px-4 lg:text-base">
              To create a thriving digital community where individuals and
              organizations collaborate to achieve a sustainable future by
              promoting and advancing the United Nations' Sustainable
              Development Goals (SDGs).
            </p>
          </div>
        </TextBoxPanel>

        <TextBoxPanel>
          <div className="items-center">
            <p className="text-center text-blue-800 mb-4 lg:mb-8 font-bold text-2xl md:text-2xl lg:text-3xl">Mission</p>
            <ul className=" px-2 md:px-4 text-xs md:text-3xl text-justify lg:text-base ">
              <li>
                • Encourage awareness and advocacy by providing a platform to
                share initiatives, campaigns, and success stories.
              </li>
              <br />
              <li>
                • Unite change-makers worldwide to inspire, educate, and
                mobilize for a better tomorrow.
              </li>
              <br />
            </ul>
          </div>
        </TextBoxPanel>
      </div>

      {/* Second Row */}
      <div className="flex flex-row gap-16">
        <div className="hidden lg:flex">
          <img
            className="rounded-lg mt-8"
            src={SDGlink7.src}
            style={{ width: 600 }}
            alt="Team Image"
          />
        </div>

        <div className="flex flex-col lg:w-1/2 px-10 md:px-32 lg:p-0 gap-4">
          <p className="text-base md:text-xl font-bold">Who We Are</p>
          <p className="font-bold text-2xl md:text-5xl break-words">
            A Group of Aspiring Developers
          </p>
          <p className="break-words text-xs lg:text-xl">
            Behind our platform is a diverse team of visionaries, technologists,
            and advocates committed to sustainability.
          </p>
          <div className="flex flex-col mt-2 sm:mt-0 lg:flex-row gap-4 lg:gap-8 md:my-8 font-bold md:pr-8 text-base md:text-3xl lg:text-base">
            <div className="flex flex-col gap-4">
              <TextBoxPanel className="py-3 lg:py-4 lg:w-[300px]">
                <div className="flex flex-row items-center gap-4">
                  <TeamMember imageSrc="/images/team/danielle.png"/>
                  <p>Danielle Ziac Abril</p>
                </div>
              </TextBoxPanel>
              <TextBoxPanel className="py-3 lg:py-4 lg:w-[300px]">
                <div className="flex flex-row items-center gap-4">
                  <TeamMember imageSrc="/images/team/hersey.png"/>
                  <p>Hersey Anne Odasco</p>
                </div>
              </TextBoxPanel>
            </div>
            <div className="flex flex-col gap-4">
              <TextBoxPanel className="py-3 lg:py-4 lg:w-[300px]">
                <div className="flex flex-row items-center gap-4">
                  <TeamMember imageSrc="/images/team/paul.png"/>
                  <p>Paul Oliver Cruz</p>
                </div>
              </TextBoxPanel>
              <TextBoxPanel className="py-3 lg:py-4 lg:w-[300px]">
                <div className="flex flex-row items-center gap-4">
                  <TeamMember imageSrc="/images/team/endrick.png"/>
                  <p>Jon Endrick Babao</p>
                </div>
              </TextBoxPanel>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Section */}
      <div className="flex flex-col w-1/2 justify-center w-full">
        <div
          className="relative"
          style={{
            backgroundImage: `url(${SDGlink4.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Add overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-10"
            style={{ pointerEvents: "none" }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center p-10 lg:p-20 gap-16">
            <p className="font-bold text-2xl md:text-5xl text-white">Join Us Now!</p>
            <p className=" text-base md:text-xl lg:px-64 text-center text-white">
              Become a part of our growing movement to make sustainability a
              global reality. Whether you’re an activist, a creator, or someone
              just starting your journey, there’s a place for you here.
            </p>
            <ButtonBox style={{ width: "60%" }}>Sign Up</ButtonBox>

          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 lg:gap-50 md:pt-8 pb-32 lg:pb-0 lg:my-12">
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-6">
                <img className="lg:-mt-6" src={logo.src} style={{ width: 250 }} alt="Logo" />
                <img
                  src="/images/tanaw_darkblue.png"
                  alt="Logo text"
                  className="w-80 h-22 -mt-5 md:w-[500px] md:h-[150px] md:ml-5"
                />
            </div>
            <div className="flex flex-col text-xs gap-2 sm:gap-2 ">
                <p className="text-md sm:text-2xl font-bold text-center">Contact Us</p>
                <div className="flex flex-row items-center gap-4">
                    <FaPhoneAlt />
                    <p>0917-185-7787</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <RiLinkedinBoxFill />
                    <p>in/Tanaw</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <FaEnvelope />
                    <p>tanaw@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <FaMapMarkerAlt />
                    <p>Tanaw Inc.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;