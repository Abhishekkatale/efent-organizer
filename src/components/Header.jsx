import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logoo.svg';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-50 shadow-md transition-all ${isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'
        }`}
    >
      <nav className="flex items-center justify-between px-4 py-6 md:px-16 md:py-6">
        {/* Left Navigation (Mobile Hidden) */}
        <div className="hidden md:flex items-center space-x-24 text-xl text-gray-200">
          <a href="#" className="hover:text-orange-500 transition text-orange-200">Home</a>
          <a href="#" className="hover:text-orange-500 transition text-orange-200">About Us</a>
          <a href="#" className="hover:text-orange-500 transition text-orange-200">Services</a>
        </div>

        {/* Center Logo */}
        <div className="text-center">
          <a href="#">
            <motion.img
              src={logo}
              alt="CRAFTWORLD Logo"
              className="w-20 mx-auto md:w-24"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </div>

        {/* Right Navigation (Mobile Hidden) */}
        <div className="hidden md:flex items-center space-x-24 text-xl text-gray-200">
          <a href="#" className="hover:text-orange-500 transition text-orange-200">Portfolios</a>
          <a href="#" className="hover:text-orange-500 transition text-orange-200">Blog</a>
          <a href="#" className="hover:text-orange-500 transition text-orange-200">Contact Us</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 text-3xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-black bg-opacity-90 text-gray-200 absolute top-16 left-0 w-full py-4 z-40">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#" className="hover:text-orange-500 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">Portfolios</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
