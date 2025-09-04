import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-black">FACTO</span>
          <span className="text-xs text-black -mt-1">Financial Service</span>
        </div>

      
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-lime-600 cursor-pointer">Services</li>
          <li className="hover:text-lime-600 cursor-pointer">How it Works</li>
          <li className="hover:text-lime-600 cursor-pointer">Why is different</li>
          <li className="hover:text-lime-600 cursor-pointer">Reviews</li>
          <li className="hover:text-lime-600 cursor-pointer">Pricing</li>
          <li className="hover:text-lime-600 cursor-pointer">Contact</li>
        </ul>

       
        <div className="space-x-4 hidden md:flex">
          <button className="px-5 py-2 text-black rounded-2xl bg-green-200 transition">
            Sign In
          </button>
          <button className="px-5 py-2  text-white rounded-2xl bg-black transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
