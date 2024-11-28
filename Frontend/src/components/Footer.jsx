import React from "react";
import { FaInstagram, FaLinkedinIn, FaMeetup } from "react-icons/fa";
import logo from "../assets/aws_navbar_img.png";
import mitlogo from "../assets/mit_wpu_logo.png";
    
const Footer=() =>{
return ( 
       <footer className="relative mb-4 px-0 bottom-0 container mx-auto bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[6.5px] rounded-lg border border-white/20 drop-shadow-lg p-2 ease-in-out">
        
       <div className="py-5 px-4 max-w-7xl mx-auto relative">
         
         <div className="flex justify-between  items-center flex-grow">

            
             <div className="w-24">
              <img src={logo} alt="Cloud Clubs logo" className="w-full" />
            </div>     
            <div className="flex justify-center items-center px-4 space-x-8 animate-bounce">
              <a href="#instagram" className="text-white hover:click
            duration-500 hover:scale-105 transition-colors">
                <FaInstagram size={50} />
              </a>
              <a href="#linkedin" className="text-white hover:click transform transition-transform
            duration-500 hover:scale-105">
                <FaLinkedinIn size={50} />
              </a>
              <a href="#meetup" className="text-white hover:click transform transition-transform
            duration-500 hover:scale-105">
                <FaMeetup size={50} />
              </a>
            </div>

            
           <div className="w-24">
              <img src={mitlogo} alt="MITWPU logo" className="w-full" />
            </div> 
          </div>

          
          <p className="text-white text-sm mt-6 text-center">
            © Copyright. All rights reserved.
          </p>
        </div>
    </footer>
    )
  }
 

export default Footer;