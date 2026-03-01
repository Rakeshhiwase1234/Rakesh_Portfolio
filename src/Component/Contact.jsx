import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-6 py-10">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-blue-400"
      >
        Contact Me
      </motion.h2>

      <div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 
        bg-[#2a0f4a]/60 backdrop-blur-lg border border-blue-500 
        rounded-2xl shadow-[0_0_25px_rgba(93,63,211,0.5)] p-8"
      >
        <div className="flex flex-col justify-center text-blue-300 space-y-6">
          <h3 className="text-3xl text-center font-bold text-blue-400 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-300 font-bold leading-relaxed">
            I’d love to connect with you! Whether it’s about a project,
            collaboration, or just to say hi — feel free to reach out.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-5 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/Rakeshhiwase1234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-300 hover:text-blue-500 transition
             transform hover:scale-110 active:scale-95
             p-2 rounded-full bg-blue-950/30 shadow-[0_0_10px_rgba(93,63,211,0.5)]
             hover:shadow-[0_0_18px_rgba(93,63,211,0.8)]"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/rakesh-hiwase-ab8936275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-300 hover:text-blue-500 transition
             transform hover:scale-110 active:scale-95
             p-2 rounded-full bg-blue-950/30 shadow-[0_0_10px_rgba(93,63,211,0.5)]
             hover:shadow-[0_0_18px_rgba(93,63,211,0.8)]"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:badalninawe@gmail.com"
              className="text-2xl text-blue-300 hover:text-blue-500 transition
             transform hover:scale-110 active:scale-95
             p-2 rounded-full bg-blue-950/30 shadow-[0_0_10px_rgba(93,63,211,0.5)]
             hover:shadow-[0_0_18px_rgba(93,63,211,0.8)]"
            >
              <FaEnvelope size={20} />
            </a>

            <a
              href="tel:+918767076861"
              className="text-2xl text-blue-300 hover:text-blue-500 transition
             transform hover:scale-110 active:scale-95
             p-2 rounded-full bg-blue-950/30 shadow-[0_0_10px_rgba(93,63,211,0.5)]
             hover:shadow-[0_0_18px_rgba(93,63,211,0.8)]"
            >
              <FaPhoneAlt size={20} />
            </a>
          </div>

          <div className="mt-8 text-center space-y-2 text-gray-300">
            <p className="flex items-center justify-center gap-3 text-lg">
              <span className="text-blue-400 text-xl">📞</span>
              <a
                href="tel:+919975756249"
                className="text-blue-300 hover:text-blue-400 transition font-medium"
              >
                +91 9975756249
              </a>
            </p>

            <p className="flex items-center justify-center gap-3 text-lg">
              <span className="text-blue-400 text-xl">📧</span>
              <a
                href="mailto: hiwaserakesh1@gmail.com"
                className="text-blue-300 hover:text-blue-400 transition font-medium"
              >
                hiwaserakesh1@gmail.com
              </a>
            </p>
          </div>
        </div>

        <form action="#" className="flex flex-col space-y-5 text-blue-200">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Contact Number"
            className="bg-transparent border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="bg-transparent border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-[0_0_15px_#3b82f6]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;