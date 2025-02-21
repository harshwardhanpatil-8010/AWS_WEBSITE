import videoFile from "../assets/video.mp4";

const Landing = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover aspect-video"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center pl-6 sm:pl-10 md:pl-12 lg:pl-20 xl:pl-24 2xl:pl-32 text-left bg-black/30">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          {/* Main Title */}
          <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl font-bold text-white mb-2">
              <b className="text-[#aca6ff]">A</b>mazon <b className="text-[#aca6ff]">W</b>eb <b className="text-[#aca6ff]">S</b>ervices
            </h1>
          </div>

          {/* Subtitle */}
          <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
            <h2 className="text-xl sm:text-2xl md:text-xl lg:text-4xl xl:text-[44px] 2xl:text-[54px] font-bold text-gray-300">
              International Cloud Clubs
            </h2>
          </div>

          {/* Location */}
          <div className="flex items-center mt-2 sm:mt-3 whitespace-nowrap">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-thin text-gray-300">
              @MIT WPU, Kothrud
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
