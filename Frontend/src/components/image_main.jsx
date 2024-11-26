import React from "react";
import TypingEffect from "./AWS_name"; 

const ImageWithTypingEffect = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* Image container */}
      <div className="relative w-1/2 h-1/2">
        {/* Background Image */}
        <img
          className="rounded-2xl w-full h-full object-cover border-2 border-muted"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240812133752/gfg.jpg"
          alt="Profile"
        />

        {/* Typing effect overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <TypingEffect />
        </div>
      </div>
    </div>
  );
};

export default ImageWithTypingEffect;
