import React from "react";
import rakesh from "../assets/rakesh_123.png";
import cvFile from "../assets/Rakesh_Hiwase-Resume.pdf";
import { Link, useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 min-h-[90vh]">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2
          className="typed text-2xl sm:text-4xl font-extrabold uppercase text-transparent bg-clip-text
  bg-linear-to-r from-blue-300 via-blue-500 to-blue-800
  animate-typing animate-blink"
        >
          MERN Developer
        </h2>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
          Hi, I’m{" "}
          <span
            className="relative text-transparent bg-clip-text
            bg-gradient-to- from-blue-400 via-blue-500 to-blue-600
            drop-shadow-[0_0_8px_#3b82f6]
            hover:drop-shadow-[0_0_20px_#60a5fa]
            transition-all duration-500 ease-in-out animate-glow"
          >
            
          </span>{"Rakesh "}
          👋
        </h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
          I’m a passionate{" "}
          <span className="font-semibold text-blue-300">
            MERN Stack Developer
          </span>{" "}
          who loves building responsive, dynamic, and beautiful web
          applications. Let’s create something amazing together!
        </p>

        <button
          className="px-8 mr-4 py-3 font-semibold text-blue-400 rounded-lg border-2 border-blue-500
  relative overflow-hidden transition-all duration-500 hover:scale-105
  hover:bg-blue-00 hover:text-white shadow-0_0_10px_#3b82f6
  hover:shadow-[0_0_25px_#60a5fa]"
        >
           <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10"
          >
            View Resume
          </a> 

          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
    translate-x-100% hover:translate-x-100%
    transition-transform duration-700 ease-in-out"
          ></span>
        </button>
        <button
          className="hidden md:inline-block px-8 py-3 font-semibold bg-blue-400 text-white rounded-lg border-2 border-blue-400
    relative overflow-hidden transition-all duration-500 hover:scale-104
     hover:text-white 
    hover:shadow-[0_0_25px_#60a5fa]"
          onClick={() => navigate("projects")}
        >
          <span className="relative z-10">Explore</span>
          <span
            className="absolute inset-0 bg-gradient-to from-transparent via-white/30 to-transparent
      translate-x-100% hover:translate-x-100%
      transition-transform duration-700 ease-in-out"
          ></span>
        </button>
      </div>

      <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
        <div className="relative w-80 h-94 md:w-400px md:h-400px rounded-full p-3">
          <div className="absolute inset-0 rounded-full border-4  border-black-800 animate-spin-slow"></div>
          <img
            src={rakesh}
            alt="developer"
            className="relative w-full h-full object-cover rounded-full
             
            hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;