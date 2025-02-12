import React from "react";
import videoFile from "../assets/video.mp4";

const Landing = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
      />
      

      <div className="absolute inset-0 flex items-center pl-10 sm:pl-16 md:pl-20 lg:pl-32 text-left bg-black/20">
        <div className="max-w-lg ">
        <div className="flex items-center gap-4 whitespace-nowrap">
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold text-white mb-2">
          <b className="text-[#aca6ff]">A</b>mazon  <b className="text-[#aca6ff]">W</b>eb  <b className="text-[#aca6ff]">S</b>ervices
          </h1>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
          <h2 className="text-4xl sm:text-4xl md:text-[56px] font-bold text-gray-300 ">
            International Cloud Clubs
          </h2>
          
          </div>
          <div className="flex items-center mt-3 whitespace-nowrap">
          <h3 className="text-4xl sm:text-4xl md:text-[25px] font-thin text-gray-300">
            @MIT WPU, Kothrud
          </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
