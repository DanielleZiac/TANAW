
import React from "react";
import ButtonBox from "../styles/buttonBox";
import TextBoxPanel from "../styles/textBox";
import icon from "../home/icons/SDG1.jpg";
import SDGlink7 from "/public/images/SDGlink17.jpg";
import logo from "./logo.png";
import SDGlink4 from "/public/images/SDGlink4.jpg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"


const Icon: React.FC = () => (
  <div
    className="rounded-full p-5"
    style={{
      backgroundImage: `url(${icon.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
);

const AboutUsComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-32 ml-32">
      {/* First Row */}
      <div className="flex flex-row gap-32">
        <div className="flex flex-col pl-32 py-32 w-1/2">
          <p className="font-bold text-5xl mb-4">About Us</p>
          <p className="break-words text-justify">
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
        <div className="w-1/2 mr-12 mt-24">
          <img src={logo.src} style={{ width: 500 }} alt="Logo" />
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="flex flex-row gap-24 px-16 ml-8 -mt-16">
        <TextBoxPanel>
          <div className="items-center">
            <p className="text-center text-blue-800 mb-20 font-bold text-2xl">Vision</p>
            <p className="text-center">
              To create a thriving digital community where individuals and
              organizations collaborate to achieve a sustainable future by
              promoting and advancing the United Nations' Sustainable
              Development Goals (SDGs).
            </p>
          </div>
        </TextBoxPanel>

        <TextBoxPanel>
          <div className="items-center">
            <p className="text-center text-blue-800 mb-8 text-2xl font-bold">Mission</p>
            <ul className="px-8">
              <li>
                • Empower users to take actionable steps toward sustainability
                through meaningful connections and shared stories.
              </li>
              <br />
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
        <div>
          <img
            className="rounded-lg mt-8"
            src={SDGlink7.src}
            style={{ width: 600 }}
            alt="Team Image"
          />
        </div>

        <div className="flex flex-col w-1/2 gap-4">
          <p className="text-lg font-bold">Who We Are</p>
          <p className="font-bold text-5xl break-words">
            A Group of Aspiring Developers
          </p>
          <p className="break-words">
            Behind our platform is a diverse team of visionaries, technologists,
            and advocates committed to sustainability.
          </p>
          <div className="flex flex-row gap-16 my-8 font-bold pr-8">
            <div className="flex flex-col gap-4">
              <TextBoxPanel>
                <div className="flex flex-row items-center gap-4">
                  <Icon />
                  <p>Danielle Ziac Abril</p>
                </div>
              </TextBoxPanel>
              <TextBoxPanel>
                <div className="flex flex-row items-center gap-4">
                  <Icon />
                  <p>Hersey Anne Odasco</p>
                </div>
              </TextBoxPanel>
            </div>
            <div className="flex flex-col gap-4">
              <TextBoxPanel>
                <div className="flex flex-row items-center gap-4">
                  <Icon />
                  <p>Paul Oliver Cruz</p>
                </div>
              </TextBoxPanel>
              <TextBoxPanel>
                <div className="flex flex-row items-center gap-4">
                  <Icon />
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
            className="absolute inset-0 bg-black bg-opacity-50 z-0"
            style={{ pointerEvents: "none" }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center p-20 gap-16">
            <p className="font-bold text-5xl text-white">Join Us Now!</p>
            <p className="px-64 text-center text-white">
              Become a part of our growing movement to make sustainability a
              global reality. Whether you’re an activist, a creator, or someone
              just starting your journey, there’s a place for you here.
            </p>
            <ButtonBox style={{ width: "20%" }}>Sign Up</ButtonBox>

          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-row justify-center gap-64 my-12">
            <div className="flex flex-col gap-6">
                <img className="-mt-6" src={logo.src} style={{ width: 250 }} alt="Logo" />
                <p className="font-bold text-3xl text-center">Tanaw Inc.</p>
            </div>
            <div className="flex flex-col gap-8">
                <p className="text-xl font-bold">Contact Us</p>
                <div className="flex flex-row items-center gap-4">
                    <FaPhoneAlt />
                    <p>09xx-xxx-xxxx</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <FaPhoneAlt />
                    <p>207-8767-457</p>
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
