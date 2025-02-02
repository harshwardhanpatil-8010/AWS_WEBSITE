import React, { useState, useEffect, useRef } from "react";
import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaNewspaper, FaMeetup } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
       
        setShowNavbar(false);
      } else {
        
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#ffffff] rounded-full px-8 py-4 w-[90%] max-w-[1200px] transition-transform duration-300 shadow-lg z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-[120%]"
      } flex justify-center`}
    >
      <div className="flex justify-between items-center font-bold w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-1">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full text-bold" />
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="/"
              className="text-black hover:font-bold hover:text-white hover:bg-black px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <IoHome />
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a
              href="./domain"
              className="text-black hover:font-bold hover:text-white hover:bg-black px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <RiTeamFill />
              <span>DOMAINS</span>
            </a>
          </li>
          <li>
            <a
              href="./events"
              className="text-black hover:font-bold hover:text-white hover:bg-black px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <IoCalendar />
              <span>EVENTS</span>
            </a>
          </li>
          <li>
            <a
              href="./news"
              className="text-black hover:font-bold hover:text-white hover:bg-black px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <FaNewspaper />
              <span>NEWSLETTER</span>
            </a>
          </li>
          <li>
            <a
              href="./"
              className="text-white hover:font-bold bg-black px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <FaMeetup />
              <span>JOIN US</span>
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for mobile screens */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute md:hidden z-50 left-0 right-0 bg-white/90 rounded-lg shadow-lg">
          <ul className="space-y-4 mt-4 text-center font-bold p-4">
            <li>
              <a
                href="/"
                className="text-black hover:font-bold hover:text-white hover:bg-black px-3 py-1 rounded transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setMenuOpen(false)}
              >
                <IoHome />
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a
                href="./domain"
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
                href="./"
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

export default Navbar;
