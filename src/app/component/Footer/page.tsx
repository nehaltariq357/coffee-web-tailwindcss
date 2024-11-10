import React from 'react';
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-lightBrown text-offwhite py-8">
      <div className='mx-4 md:mx-16'>
        <div className="flex items-center justify-center my-8 relative">
          <div className="flex-grow h-1 bg-offwhite"></div>
          <h1 className="text-offwhite font-bold text-3xl text-center px-4">
            Explore the Coffee World
          </h1>
          <div className="flex-grow h-1 bg-offwhite"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className='font-bold text-2xl'>Merchandise</h1>
            <ul className="space-y-2">
              <li><a href="#link1" className="hover:underline">T-shirts</a></li>
              <li><a href="#link2" className="hover:underline">Caps</a></li>
              <li><a href="#link3" className="hover:underline">Mugs</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-2xl'>Franchise</h1>
            <ul className="space-y-2">
              <li><a href="#link1" className="hover:underline">Coffee Outlet</a></li>
              <li><a href="#link2" className="hover:underline">Coffee Vending Machine</a></li>
              <li><a href="#link3" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-2xl'>About us</h1>
            <ul className="space-y-2">
              <li><a href="#link1" className="hover:underline">Promotions</a></li>
              <li><a href="#link2" className="hover:underline">Customer Care</a></li>
              <li><a href="#link3" className="hover:underline">Legal information</a></li>
              <li><a href="#link4" className="hover:underline">Achievements</a></li>
              <li><a href="#link5" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-2xl'>Follow Us</h1>
            <ul className='flex space-x-4 mt-4'>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <FaInstagram className="text-offwhite hover:text-white h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <MdFacebook className="text-offwhite hover:text-white h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                  <FaTwitter className="text-offwhite hover:text-white h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Pinterest">
                  <FaPinterest className="text-offwhite hover:text-white h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className='bg-offwhite h-1 my-4' />
        <div className="text-center text-sm">
          <p>&copy;{new Date().getFullYear()} Filtro All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
