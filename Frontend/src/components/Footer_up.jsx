import React from "react";
//import logo from "../assets/b-w.png"
//import mitlogo from "../assets/mit_wpu_logo.png"

const UpperSection = ({ toggleForm }) => {
  return (
    <div className="flex justify-between items-center px-6 py-8 bg-white relative border-gray-950">
      
      {/* <img
        src={logo}
        alt="Cloud Clubs"
        className="h-24 sm:h-10 md:h-12 lg:h-24 xl:h-32 w-auto"
      /> */}

      
      <div className="text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black mb-4 ">
      Contact Us
        </h2>

        <button
          onClick={toggleForm}
          className="px-4 py-2 sm:px-8 sm:py-2 md:px-10 md:py-3 lg:px-10 lg:py-4 bg-black text-white rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-medium  transition-all"
        >
         →
        </button>

      </div>

      
      {/* <img
        src={mitlogo}
        alt="MIT-WPU"
        className="h-24 sm:h-10 md:h-12 lg:h-24 xl:h-20 w-auto"
      /> */}
    </div>
  );
};

export default UpperSection;