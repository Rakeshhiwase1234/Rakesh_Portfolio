import React, { useState } from "react";
import { motion } from "framer-motion";

// import Dsa from "../assets/DSA_Certificate.jpeg";
import DSA from "../assets/dsa_certificate.jpeg";
import MERN from "../assets/MERN_Certificate.jpeg";
import NPTL from "../assets/NPTL_Certificate.jpeg";
import TCSION from "../assets/TCS_Certificate.jpeg";
import AdInfo from "../assets/AD_Certificate.jpeg";
import Clustor from "../assets/Clustor_Certificate.jpeg";
import AWSInternship from "../assets/EduSkill_CertificateAws.jpeg";
import AIMLInternship from "../assets/EduSkill_CertificateGoogle.jpeg";
import  DesignPatternCertificate from "../assets/tgpcet.jpeg";
// import First from "../assets/first.jpg";


const Achievement = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const certificates = [
  
    {
      id: 1,
      title: "Alpha – DSA with Java (Apna College)",
      description: `Course Name: Alpha – DSA with Java
    Issued By: Apna College
    Instructor: Shradha Khapra (Co-Founder, Apna College)

    Successfully completed the Alpha (DSA with Java) course offered by Apna College. Gained in-depth knowledge of Data Structures and Algorithms using Java, covering topics such as arrays, linked lists, stacks, queues, recursion, trees, graphs, and dynamic programming. Strengthened problem-solving skills and algorithmic thinking through extensive coding practice and real-world exercises.`,
      image: DSA,
    },
    {
      id: 2,
      title: "Alpha – MERN Stack (Apna College)",
      description: `Course Name: Alpha – MERN Stack
    Issued By: Apna College
    Instructor: Shradha Khapra (Co-Founder, Apna College)

    Successfully completed the Alpha (MERN Stack) course offered by Apna College. Gained in-depth knowledge of the MERN stack (MongoDB, Express.js, React.js, Node.js), covering full-stack development concepts and best practices. Strengthened skills in building scalable web applications with modern JavaScript frameworks and databases.`,
      image: MERN,
    },
    {
      id: 3,
      title: "NPTEL – Human Computer Interaction",
      description: `Course Name: Human Computer Interaction (In Hindi)
      Issued By: NPTEL (IIT Madras) – SWAYAM
      Duration: Jul–Oct 2025 (12 Weeks)
      Score: 72%

Successfully completed the NPTEL Online Certification course on Human Computer Interaction with a consolidated score of 72%. Achieved full marks (25/25) in online assignments and scored 46.5/75 in the proctored examination. The course covered usability principles, user-centered design, interaction models, interface evaluation, and real-world HCI applications. Strengthened understanding of designing intuitive and user-friendly digital systems.`,
      image: NPTL,
    },
    {
      id: 4,
     title: "TCS iON – Career Edge (IT for Non-IT)",
description: `Course Name: TCS iON Career Edge – IT for Non-IT
Issued By: TCS iON (Tata Consultancy Services)
Duration: 21 Jan 2025 – 19 Feb 2025

Successfully completed the TCS iON Career Edge – IT for Non-IT certification program. The course covered IT industry overview, IT job roles, fundamentals of industry elements, basics of trending technologies, and career development skills. Strengthened understanding of IT ecosystem, corporate readiness, and professional growth strategies.`,
image: TCSION,
    },
    {
  id: 5,
  title: "Industrial Code Design Pattern Workshop",
  description: `Workshop Name: Industrial Code Design Pattern
Issued By: Tulsiramji Gaikwad-Patil College of Engineering & Technology, Nagpur
Association: Indian Society for Technical Education (ISTE) & Computer Society of India (CSI)
Duration: 2 Days (3rd & 4th May 2024)

Participated in a two-day hands-on workshop focused on industrial-level code design patterns. Learned core software design principles, object-oriented design patterns, and best practices used in real-world application development. Gained practical exposure to writing clean, maintainable, and scalable code.`,
  image: DesignPatternCertificate,
},


  ];

  const experiences = [
        {
          id: 1,
          title: "Full Stack Developer Internship",
          company: "Clustor Computing",
          duration: "1st July 2025 – 30th September 2025",
          description: `Organization: Clustor Computing
    Role: Full Stack Developer
    Reference No: CC/INTERN/8841
    Date: 15th October 2025
    Successfully completed a 3-month internship at Clustor Computing as a Full Stack Developer. Gained hands-on experience in designing and developing web applications using modern technologies including React, Node.js, Express, and MongoDB. Demonstrated strong problem-solving, teamwork, and adaptability throughout the internship. Recognized for punctuality, curiosity, and dedication towards learning and development.`,
          image: Clustor,
        },
    {
      id: 2,
      title: "Web Development Internship",
      company: "AD Infocom Systems, Nagpur",
      duration: "12th December 2024 – 25th December 2024",
      description: `Organization: AD Infocom Systems, Nagpur
Domain: Web Development
Mentor: Mr. Prabhakar Dorge (Managing Director)
Successfully completed a Web Development internship at AD Infocom Systems, where I gained practical experience in frontend and backend development using HTML, CSS, JavaScript, and PHP. Worked on real-world projects, applied responsive design principles, and implemented database integration to build dynamic web applications. The internship strengthened my understanding of full-stack development and end-to-end project implementation.`,
      image: AdInfo,
    },
    {
      id: 3,
      title: "AWS Cloud Virtual Internship (AICTE - EduSkills)",
      company: "AICTE NEAT | EduSkills | AWS Academy",
      duration: "April 2024 – June 2024 (10 Weeks)",
      description: `Program: Cloud Virtual Internship
Organized By: AICTE (NEAT) & EduSkills
Curriculum Partner: AWS Academy

Successfully completed a 10-week Cloud Virtual Internship focused on Amazon Web Services (AWS). Gained hands-on experience in cloud computing fundamentals, EC2, S3, IAM, VPC, and cloud deployment concepts. Developed practical understanding of cloud infrastructure, security best practices, and scalable application hosting. Strengthened knowledge of modern cloud architecture and real-world implementation strategies.`,
image: AWSInternship,
    },
    {
      id: 4,
      title: "AI-ML Virtual Internship (AICTE - EduSkills | Google for Developers)",
      company: "AICTE NEAT | EduSkills | Google for Developers",
      duration: "January 2024 – March 2024 (10 Weeks)",
      description: `Program: AI-ML Virtual Internship
Organized By: AICTE (NEAT) & EduSkills
Industry Support: Google for Developers (India Edu Program)

Successfully completed a 10-week Artificial Intelligence and Machine Learning Virtual Internship. Gained practical exposure to machine learning fundamentals, supervised and unsupervised learning, data preprocessing, model evaluation, and real-world AI applications. Strengthened understanding of Python-based ML workflows and modern AI development practices.`,
image: AIMLInternship,
    },
  ];

  const renderDescription = (id, text) => {
    const isExpanded = expandedId === id;
    return (
      <>
        <p
          className={`text-gray-300 leading-relaxed whitespace-pre-line transition-all duration-500 ${isExpanded ? "" : "line-clamp-2"
            }`}
        >
          {text}
        </p>
        <button
          onClick={() => toggleDescription(id)}
          className="mt-3 text-sm font-medium text-blue-400 hover:text-purple-400 transition-colors"
        >
          {isExpanded ? "Show Less ▲" : "Read More ▼"}
        </button>
      </>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-blue-400"
      >
        Achievements & Experience
      </motion.h2>

      <h3 className="text-3xl font-semibold text-purple-300 mb-6 text-center">
        Certifications & Achievements
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#1b1133]/80 border border-purple-500 rounded-2xl p-6 shadow-[0_0_25px_rgba(139,92,246,0.5)]
                       hover:shadow-[0_0_40px_rgba(96,165,250,0.7)] transition-all duration-500 transform hover:scale-105"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover rounded-xl mb-4 border border-purple-400"
            />
            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              {cert.title}
            </h3>
            {renderDescription(cert.id, cert.description)}
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-semibold text-purple-300 mb-6 text-center">
        Internship & Project Experience
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-[#1b1133]/80 border border-blue-500 rounded-2xl p-6 shadow-[0_0_25px_rgba(59,130,246,0.5)]
                 hover:shadow-[0_0_40px_rgba(147,197,253,0.7)] transition-all duration-500 transform hover:scale-105"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-auto object-contain rounded-xl mb-4 border border-purple-400"
            />
            <h3 className="text-xl font-semibold text-blue-300 mb-3">
              {exp.title}
            </h3>
            <p className="text-gray-400 italic mb-1">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
            {renderDescription(exp.id, exp.description)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;