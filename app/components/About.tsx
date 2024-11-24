"use client";

import React from "react";
import { baseButtonClass } from "../styles/buttonStyles"; // Import your button styles

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-transparent text-gray-900 p-4 mt-12">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">ABOUT US</h1>
      </header>

      {/* Description */}
      <section className="mb-6">
        <p className="text-sm text-justify leading-relaxed">
          Welcome to our social media platform dedicated to promoting the Sustainable Development Goals (SDGs). 
          We aim to inspire positive change and create a community united by shared goals for a better future.
        </p>
      </section>

      {/* Mission and Vision Panels */}
      <section className="mb-6">
        <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow">
          <h2 className="text-lg font-bold mb-2">Our Mission</h2>
          <p className="text-sm text-justify">
            To empower communities through awareness, collaboration, and technology to achieve the UN's SDGs.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow">
          <h2 className="text-lg font-bold mb-2">Our Vision</h2>
          <p className="text-sm text-justify">
            A world where sustainable development is at the heart of every community and individual.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="mb-6">
        <h3 className="text-center text-md font-semibold mb-4">
          A GROUP OF ADMIRING DEVELOPERS
        </h3>
        <div className="space-y-1">
          {["Abril, Danielle Ziac", "Babao, Endrick", "Cruz, Paul Oliver E.", "Odasco, Hersey"].map((name, index) => (
            <button key={index} className={`${baseButtonClass} w-full bg-white`}>
              {name}
            </button>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="text-center">
        <h4 className="text-lg font-semibold mb-2">CONTACT US</h4>
        <div className="text-sm space-y-2 mb-4">
          <p>📞 +63 912 345 6789</p>
          <p>📧 tanaw.inc@gmail.com</p>
        </div>
        <p className="font-bold text-gray-700">Tanaw.Inc</p>
      </section>

      {/* Fixed Background Image */}
      <div
        className="fixed bottom-0 z-10 left-0 w-full h-40 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      ></div>
    </div>
  );
};

export default About;
