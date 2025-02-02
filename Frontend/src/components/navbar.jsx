import React, { useState, useEffect, useRef } from "react";
import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMeetup } from "react-icons/fa";
import logo from "../assets/b-w.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
  ref={menuRef}
  className="sticky mt-4 bg-white shadow-lg rounded-full p-4 mx-auto max-w-6xl"
>

      <div className="flex justify-between items-center font-bold px-4 sticky">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          
          <img
            src={logo}
           
            className="w-10 h-10 rounded-full text-black"
          />
       
          
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-10 ">
          <li>
            <a
              href="/"
              className="text-black relative hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center space-x-2"
            >
              <IoHome />
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a
              href="./domain"
              className="text-black relative hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center space-x-2"
            >
              <RiTeamFill />
              <span>DOMAINS</span>
            </a>
          </li>
          <li>
            <a
              href="./events"
              className="text-black relative hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center space-x-2"
            >
              <IoCalendar />
              <span>EVENTS</span>
            </a>
          </li>
          <li>
            <a
              href="./news"
              className="text-black relative hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center space-x-2"
            >
              <FaNewspaper />
              <span>NEWSLETTER</span>
            </a>
          </li>
          <li>
            <a
              href="./"
              className="text-black relative hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center space-x-2"
            >
              <FaMeetup />
              <span>JOIN US</span>
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black focus:outline-none text-2xl fixed z-40 right-5"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile */}
      {menuOpen && (
<div className="absolute md:hidden z-50 left-0 right-0 bg-white/90 rounded-full border border-black/20 shadow-lg">
          <ul className="space-y-4 mt-4 text-center font-bold p-4">
            <li>
              <a
                href="./"
                className="text-black hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setMenuOpen(false)}
              >
                <IoHome />
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a
                href="./domains"
                className="text-black hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setMenuOpen(false)}
              >
                <RiTeamFill />
                <span>DOMAINS</span>
              </a>
            </li>
            <li>
              <a
                href="./events"
                className="text-black hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setMenuOpen(false)}
              >
                <IoCalendar />
                <span>EVENTS</span>
              </a>
            </li>
            <li>
              <a
                href="./news"
                className="text-black hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setMenuOpen(false)}
              >
                <FaNewspaper />
                <span>NEWSLETTER</span>
              </a>
            </li>
            <li>
              <a
                href="./domains"
                className="text-black hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setMenuOpen(false)}
              >
                <FaMeetup />
                <span>JOIN US</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;