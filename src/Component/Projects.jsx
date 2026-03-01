import React from "react";
import Alumni from "../assets/Alumni.png";
import TechEventImage from "../assets/TechEvent.png";
import TodoImage from "../assets/todo.png";
// import Appointment from "../assets/Appointment.png";
import JobPortal from "../assets/JobPortal.png";
// import Spotify from "../assets/Spotify.png";
import { motion } from "framer-motion";
const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "GradNet- Alumni Student Connect",
      image: Alumni,
      codeLink: "https://github.com/Rakeshhiwase1234/GradNet_AlumniConnect_Portal.git",
    },
    {
   id: 2,
    title: "TechEvent - Event Management Platform",
    image: TechEventImage,
    codeLink: "https://tgpcet.vercel.app/",
   },
    {
       id: 3,
      title: "JobStack- Job Portal Application",
      image: JobPortal,
      codeLink: "https://github.com/Rakeshhiwase1234/JobSearchApplication.git",
       },
       {
    id: 4,
    title: " ToDo- Todo List App",
    image: TodoImage,
    codeLink: "https://todo-iota-rouge-62.vercel.app/",
   },

    // {
    //   id: 2,
    //   title: "Doctor Appointment Application",
    //   image: Appointment,
    //   codeLink:
    //     "https://github.com/BadalNinawe/Mern_Appointment_Management.git",
    // },
  
    // {
    //   id: 4,
    //   title: "Spotify Clone",
    //   image: Spotify,
    //   codeLink: "https://github.com/BadalNinawe/Spotify.git",
    // },
  ];

  return (
    <div className="min-h-screen  text-white px-6 sm:px-8 py-16 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-blue-400"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-2xl border border-blue-500 
                 shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] 
                 transition-all duration-500 hover:scale-105"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 p-2 sm:h-60 object-cover rounded-t-2xl"
              />

              <div
                className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition 
                       text-sm sm:text-base"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="p-3 sm:p-4 text-center bg-[#1a1030] rounded-b-2xl">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-300">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;