import React from "react";
import { FaInstagram, FaLinkedin, FaMeetup } from "react-icons/fa";

const LowerSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-6 mb-0 py-8 bg-black/30bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[6.5px] border-white/20 flex flex-col items-center">
      
      <div className="flex space-x-6 mb-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 text-white text-2xl transition-all"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 text-white text-2xl transition-all"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.meetup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 text-white text-2xl transition-all"
        >
          <FaMeetup />
        </a>
      </div>

      
      <div className="text-white text-sm text-center mt-4">
      
      © {currentYear} All rights reserved.
      </div>
    </div>
  );
};

export default LowerSection;