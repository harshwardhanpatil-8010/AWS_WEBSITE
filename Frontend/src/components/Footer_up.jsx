import React from "react";
import logo from "../assets/b-w.png";
import mitlogo from "../assets//mit_wpu_logo.png";

const UpperSection = ({ toggleForm }) => {
  return (
    <div className="flex justify-between items-center px-6 py-8 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[6.5px]  border-white/20relative">
      
      <img
        src={logo}
        alt="Cloud Clubs"
        className="h-12 w-auto"
      />

      
      <div className="text-center">
        <h2 className="text-4xl font-thin mb-4">Contact With Us</h2>
        <button
          onClick={toggleForm}
          className="px-8 py-3 bg-yellow-500 text-white rounded-lg text-lg font-medium hover:bg-yellow-600 transition-all"
        >
          →
        </button>
      </div>

      
      <img
        src={mitlogo}
        alt="MIT-WPU"
        className="h-12 w-auto"
      />
    </div>
  );
};

export default UpperSection;