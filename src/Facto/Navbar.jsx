import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Services",
    "How it Works",
    "Why is different",
    "Reviews",
    "Pricing",
    "Contact",
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-black">FACTO</span>
          <span className="text-xs text-black -mt-1">Financial Service</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer transition"
            >
              <span className="hover:text-lime-600">{item}</span>
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-lime-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* Buttons + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-5 py-2 text-black rounded-2xl bg-green-200 hover:bg-green-300 transition">
              Sign In
            </button>
            <button className="px-5 py-2 text-white rounded-2xl bg-black hover:bg-gray-800 transition">
              Sign Up
            </button>
          </div>

          {/* Hamburger (only mobile) */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="hover:text-lime-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-4 px-6 pb-4">
            <button className="px-5 py-2 text-black rounded-2xl bg-green-200 hover:bg-green-300 transition">
              Sign In
            </button>
            <button className="px-5 py-2 text-white rounded-2xl bg-black hover:bg-gray-800 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
