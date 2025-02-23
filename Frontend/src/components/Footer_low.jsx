import React from "react";


const LowerSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-6 py-8 bg-[] flex flex-col items-center border-gray-950">
      
      <div className="flex space-x-6 mb-4">
        <a
          href="https://www.instagram.com/aws.cc.mitwpu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 text-white text-2xl transition-all cursor-pointer"
        >
         <img
             src="  https://images.seeklogo.com/logo-png/43/2/instagram-new-2022-logo-png_seeklogo-438252.png?v=1957907345596552104"
             alt="Instagram"
             className="w-12 h-12 object-contain transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
             />
       
        </a>
        <a
          href="https://www.linkedin.com/company/aws-cloud-club-mit-wpu/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 text-white text-2xl transition-all cursor-pointer"
        >
          <img
             src="  https://images.seeklogo.com/logo-png/39/2/linkedin-new-2020-logo-png_seeklogo-393964.png?v=1957907299674022256"
             alt="Linkedin"
             className="w-12 h-12 object-contain transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
             />
       
        </a>
        <a
            href="https://www.meetup.com/aws-cloud-club-at-mit-world-peace-university-mit-wpu/"
             target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-white text-2xl transition-all cursor-pointer"
            >
                   <img
             src="https://images.seeklogo.com/logo-png/43/2/meetup-logo-png_seeklogo-432672.png?v=1957916984841910632"
             alt="meetup"
             className="w-12 h-12 object-contain transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
             />
            </a>
            <a 
              href="awsclub@mitwpu.edu.in"
              className="group relative"
            >
            <img 
                src="https://images.seeklogo.com/logo-png/38/2/gmail-new-2020-logo-png_seeklogo-389043.png" 
                alt="Email Contact" 
                className="w-12 h-12 object-contain transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
              />
              </a>
      </div>

      
      <div className="text-white text-sm text-center mt-4">
      
      © {currentYear} All rights reserved.
      </div>
    </div>
  );
};

export default LowerSection;