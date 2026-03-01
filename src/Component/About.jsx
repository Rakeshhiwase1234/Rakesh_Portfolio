import React from "react";
import profile from "../assets/rrrrrrr.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1b0a31] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
      <div className="md:w-2/3 flex justify-center mb-15 md:mb-0">
        <div className="relative w-72 h-80 md:w-100 md:h-100 rounded-full p-3">
          <div className="absolute inset-0  border-4 animate-spin-slow"></div>

          <img
            src={profile}
            alt="Rakesh"
            className="w-full h-full object-cover rounded-full drop-shadow-[0_0_20px_#3b82f6] hover:drop-shadow-[0_0_45px_#60a5fa] hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-red from-blue-300 via-blue-500 to-blue-300 bg-length:200%_200% animate-gradient">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Hello! I’m <span className="text-blue-400 font-semibold">Rakesh</span>,
          a passionate{" "}
          <span className="text-blue-800 font-semibold">
            MERN Stack Developer
          </span>{" "}
          who loves crafting clean, modern, and responsive web applications.
          <br />I enjoy turning ideas into functional and visually appealing
          digital experiences. My goal is to build products that are not only
          efficient but also deliver seamless user experiences.
        </p>

        <p className="text-gray-400 italic">
          “Code is like art — every line tells a story of logic and creativity.”
        </p>

        <button className="mt-4 px-8 py-3 bg-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-[0_0_20px_#60a5fa] hover:scale-105 transition-all duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default About;