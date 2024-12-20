"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      {/* Navbar */}
      <nav className="flex justify-between items-center h-20 px-4 md:px-8 shadow-md bg-white text-black">
        {/* Logo */}
        <div className="text-3xl font-bold italic">Filtro</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <li>Home</li>
          </Link>
          <Link href="/component/Card" onClick={() => setIsOpen(false)}>
            <li>Explore Us</li>
          </Link>
          <Link href="/component/Brand" onClick={() => setIsOpen(false)}>
            <li>Brands</li>
          </Link>
          <Link href="/component/Contact" onClick={() => setIsOpen(false)}>
            <li>Contact Us</li>
          </Link>
        </ul>

        {/* Buttons for Desktop */}
        <div className="hidden md:flex gap-x-5">
          <Link href="/component/Login">
            <button className="bg-Brown text-white px-10 md:px-5 py-2 md:py-3 text-lg rounded-2xl">
              Login
            </button>
          </Link>
          <Link href="/component/SignUp">
            <button className="bg-Brown text-white px-10 md:px-5 py-2 md:py-3 text-lg rounded-2xl">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 p-4 text-lightBrown bg-offwhite shadow-md z-30">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <li>Home</li>
          </Link>
          <Link href="/component/Card" onClick={() => setIsOpen(false)}>
            <li>Explore Us</li>
          </Link>
          <Link href="/component/Brand" onClick={() => setIsOpen(false)}>
            <li>Brands</li>
          </Link>
          <Link href="/component/Contact" onClick={() => setIsOpen(false)}>
            <li>Contact Us</li>
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Link href="/component/Login" onClick={() => setIsOpen(false)}>
              <button className="bg-Brown text-white px-10 md:px-5 py-2 md:py-3 text-lg rounded-2xl">
                Login
              </button>
            </Link>
            <Link href="/component/SignUp" onClick={() => setIsOpen(false)}>
              <button className="bg-Brown text-white px-10 md:px-5 py-2 md:py-3 text-lg rounded-2xl">
                Sign Up
              </button>
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
