import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMui,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-500" />,
        },
        {
          name: "Material UI",
          icon: <SiMui className="text-blue-400" />,
        },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen  text-white flex flex-col items-center py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-blue-400"
      >
        My Skills
      </motion.h2>

      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to from-[#1b0a31]/80 to-[#2a0f4a]/80 
             backdrop-blur-md border border-blue-500
             shadow-[0_0_25px_rgba(27,10,49,0.6)] rounded-2xl p-8 
             mb-12 hover:shadow-[0_0_35px_rgba(93,63,211,0.7)] 
             transition-all duration-300"
          >
            <h2 className="text-4xl font-semibold mb-8 text-blue-400 border-b border-blue-400/40 pb-3 text-center">
              {category.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-6 w-full max-w-700px md:max-w-900px lg:max-w-1100px mx-auto">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center w-32 h-32 border border-blue-900
                   backdrop-blur-md rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] 
                   hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-110 
                   transition-all duration-300"
                >
                  <span className="text-4xl mb-2">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;