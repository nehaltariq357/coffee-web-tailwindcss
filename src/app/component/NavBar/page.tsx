"use client"
import React, { useState } from 'react';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-20'>
      {/* Navbar */}
      <nav className="flex justify-between items-center h-20 px-4 md:px-8 shadow-md">
        {/* Logo */}
        <div className="text-3xl font-bold italic">Filtro</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-lg">
          <li>Home</li>
          <li>Explore Us</li>
          <li>Brands</li>
          <li>Contact Us</li>
        </ul>

        {/* Buttons for Desktop */}
        <div className="hidden md:flex gap-x-5">
          <button className="p-2 bg-brown-500 text-white rounded-md w-24">Login</button>
          <button className="p-2 bg-brown-500 text-white rounded-md w-24">Sign Up</button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 p-4 text-black bg-white shadow-md z-30">
          <li>Home</li>
          <li>Explore Us</li>
          <li>Brands</li>
          <li>Contact Us</li>
          <div className="flex flex-col gap-2 mt-4">
            <button className="p-2 bg-brown-500 text-white rounded-md w-32">Login</button>
            <button className="p-2 bg-brown-500 text-white rounded-md w-32">Sign Up</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
