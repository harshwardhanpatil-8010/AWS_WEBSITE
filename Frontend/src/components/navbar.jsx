import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/aws_navbar_img.png";
import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMeetup } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
      className="relative mt-2 sm:mt-4 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[6.5px] rounded-lg border border-white/20 p-2 sm:p-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center font-bold">
        <div className="flex-shrink-0">
          <img src={logo} alt="App Logo" className="size-10" />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <a
              href="/"
              className="text-white hover:underline flex items-center space-x-2 cursor-pointer"
            >
              <IoHome />
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a
              href="./domain"
              className="text-white hover:underline flex items-center space-x-2 cursor-pointer"
            >
              <RiTeamFill />
              <span>DOMAINS</span>
            </a>
          </li>
          <li>
            <a
              href="./events"
              className="text-white hover:underline flex items-center space-x-2 cursor-pointer"
            >
              <IoCalendar />
              <span>EVENTS</span>
            </a>
          </li>
          <li>
            <a
              href="./news"
              className="text-white hover:underline flex items-center space-x-2 cursor-pointer"
            >
              <FaNewspaper />
              <span>NEWSLETTER</span>
            </a>
          </li>
          <li>
            <a
              href="./"
              className="text-white hover:underline flex items-center space-x-2 cursor-pointer"
            >
              <FaMeetup />
              <span>JOIN US</span>
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none text-2xl cursor-pointer"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute md:hidden z-50 left-0 right-0 mt-2 mx-2 bg-black/90 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
          <ul className="space-y-6 py-6 text-center font-bold px-4">
            <li>
              <a
                href="./"
                className="text-white hover:underline flex items-center justify-center space-x-2 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <IoHome />
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a
                href="./domain"
                className="text-white hover:underline flex items-center justify-center space-x-2 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <RiTeamFill />
                <span>DOMAINS</span>
              </a>
            </li>
            <li>
              <a
                href="./events"
                className="text-white hover:underline flex items-center justify-center space-x-2 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <IoCalendar />
                <span>EVENTS</span>
              </a>
            </li>
            <li>
              <a
                href="./news"
                className="text-white hover:underline flex items-center justify-center space-x-2 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <FaNewspaper />
                <span>NEWSLETTER</span>
              </a>
            </li>
            <li>
              <a
                href="./domains"
                className="text-white hover:underline flex items-center justify-center space-x-2 cursor-pointer"
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

export default Navbar;
