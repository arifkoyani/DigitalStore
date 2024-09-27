"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#011ae5] to-[#530200] p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">Logo</div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-6 text-white lg:space-x-6 lg:items-center`}
        >
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Home
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Status
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Active Users
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Expire Users
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
