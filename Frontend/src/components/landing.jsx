import React from "react";
import clubimg from "../assets/club-img.JPG";

const Landing = () => {
  return (
    <div className="bg-gradient-to-b mt-4 sm:mt-6 from-gray-100 to-gray-200 rounded-lg overflow-hidden">
      <div className="relative h-[400px] sm:h-[500px] mb-0 w-full">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img
            src={clubimg}
            alt="Cloud Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[1.5px] rounded-lg"></div>
        </div>

        <div className="relative z-10 flex items-end justify-center h-full select-none">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2323b7] mb-2 sm:mb-4 px-4">
              Amazon Web Services
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white px-4">
              Cloud Clubs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
