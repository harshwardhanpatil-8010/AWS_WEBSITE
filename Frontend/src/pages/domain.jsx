import Navbar from "../components/navbar";
import Background from "../components/background";
import App from "../components/App";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import LowerSection from "../components/Footer_low";

const Card = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out w-full max-w-[320px] min-h-[450px]">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <img
          className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-300"
          src={data.img}
          alt={data.name}
        />
        <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 p-4 z-10">
          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="text-white text-lg sm:text-xl" />
            </a>
          )}
        </div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow text-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 sm:mb-3">
            {data.name}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const data = [
    {
      name: "",
      role: "",
      img: "https://plus.unsplash.com/premium_photo-1721736018999-f6285dc514c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/",
    },
    {
      name: "",
      role: "",
      img: "images/neon green.png",
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/",
    },
    {
      name: "Tanish Seth",
      role: "President",
      img: "images/blue.png",
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/",
    },
    {
      name: "Vaidant Jain",
      role: "",
      img: "images/red.png",
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/",
    },
    {
      name: "Mitali Bangar",
      role: "",
      img: "",
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/",
    },
    {
      name: "Shravya Dsouza",
      role: "",
      img: "images/blue.png",
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/",
    },
    {
      name: "Sneh Shah",
      role: "",
      img: "images/red.png",
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/",
    },
  ];

  
  return (
    <>
      <Navbar />
      <Background />
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-12 sm:mt-16 md:mt-24 mb-8 sm:mb-12 md:mb-16 px-4 animate-pulse">
        Know Your Domain
      </h1>
      
      <div className="container mx-auto px-4">
        <div id="mentors" className="flex flex-col gap-8 sm:gap-12 md:gap-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">Mentors</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {data.slice(0, 2).map((d, index) => (
              <Card key={index} data={d} />
            ))}
          </div>
        </div>

        <div id="admin" className="mt-8 sm:mt-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Admin Panel</h2>
          <div className="flex justify-center">
            {data.slice(2, 3).map((d, index) => (
              <Card key={index} data={d} />
            ))}
          </div>
        </div>

        <div id="team" className="mt-8 sm:mt-12 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {data.slice(3, 7).map((d, index) => (
              <Card key={index} data={d} />
            ))}
          </div>
        </div>
      </div>

      <App />
      <LowerSection />
    </>
  );
};

export default Team;

  