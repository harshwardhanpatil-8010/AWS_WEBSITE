import Navbar from "../components/navbar";
import Background from "../components/background";
import App from "../components/App";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import LowerSection from "../components/Footer_low";


const Card = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out w-full sm:w-72 md:w-80 h-[450px]">
      <div className="relative w-full h-86">
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
              className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between h-[calc(450px-16rem)] text-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
            {data.name}
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-4">{data.role}</p>
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
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-16 sm:mt-24 mb-12 sm:mb-16 animate-pulse">
        Know Your Domain
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-12 sm:gap-16">
          <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">Mentors</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {data.slice(0, 2).map((d, index) => (
              <Card key={index} data={d} />
            ))}
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">Admin Panel</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {data.slice(2, 3).map((d, index) => (
              <Card key={index} data={d} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
