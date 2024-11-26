import React, { useState } from "react";
import logo from '../assets/aws_navbar_img.png';
import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

const Navbar = ({ logoSize = "h-12 w-auto" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mt-4bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg rounded-lg border border-white/20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
         <div className="flex-shrink-0">
          <img src={logo} alt="App Logo" className={logoSize} />
        </div> 

        {/* Menu */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <a href="/" className="text-white hover:underline flex items-center space-x-2">
              <IoHome />
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a href="./domain" className="text-white hover:underline flex items-center space-x-2">
              <RiTeamFill />
              <span>DOMAINS</span>
            </a>
          </li>
          <li>
            <a href="./events" className="text-white hover:underline flex items-center space-x-2">
              <IoCalendar />
              <span>EVENTS</span>
            </a>
          </li>
          <li>
            <a href="./news" className="text-white hover:underline flex items-center space-x-2">
              <FaNewspaper />
              <span>NEWSLETTER</span>
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
       
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 mt-4 text-center">
            <li>
              <a href="./" className="text-white hover:underline flex items-center justify-center space-x-2">
                <IoHome />
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a href="./domains" className="text-white hover:underline flex items-center justify-center space-x-2">
                <RiTeamFill />
                <span>DOMAINS</span>
              </a>
            </li>
            <li>
              <a href="./events" className="text-white hover:underline flex items-center justify-center space-x-2">
                <IoCalendar />
                <span>EVENTS</span>
              </a>
            </li>
            <li>
              <a href="./news" className="text-white hover:underline flex items-center justify-center space-x-2">
                <FaNewspaper />
                <span>NEWSLETTER</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;