import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/logoo.svg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        {/* Top Section */}
        <motion.div
          className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Logo Section */}
          <motion.div
            className="w-full md:w-1/4 flex flex-col items-start"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <a href="#">
              <motion.img
                src={logo}
                alt="CRAFTWORLD Logo"
                className="w-32"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <p className="text-gray-400 mt-4">
              We are a leading event management company specializing in creating unforgettable experiences. From corporate events to exhibitions, we bring your visions to life.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="w-full md:w-1/4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-2xl font-bold text-[#C29180] mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#C29180] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C29180] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#C29180] transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C29180] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="w-full md:w-1/4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-2xl font-bold text-[#C29180] mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Event Street, City, Country</p>
            <p className="text-gray-400 mt-2">Email: info@event.com</p>
            <p className="text-gray-400 mt-2">Phone: +123 456 7890</p>
            <br/>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          
          <div className="flex space-x-8 mt-6 lg:mt-0">
            <a
              href="https://www.facebook.com/EFENT"
              className="text-3xl hover:text-orange-500 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/EFENT"
              className="text-3xl hover:text-text-orange-500 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/EFENT"
              className="text-3xl hover:text-text-orange-500 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/EFENT"
              className="text-3xl hover:text-text-orange-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gray-700 my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 EventPro. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#C29180] transition"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#C29180] transition"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#C29180] transition"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
