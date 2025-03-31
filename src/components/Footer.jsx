import React from "react";
import { FaSquareXTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-100">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              
              <a href="https://x.com/MdRizwan662819" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter size={24} className="hover:text-blue-400 transition duration-300" />
              </a>
              <a href="http://t.me/Rizwan_49" target="_blank" rel="noopener noreferrer">
                <BsTelegram size={24} className="hover:text-pink-600 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/mohammad-rizwan-shaikh-7b7b9a27b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} className="hover:text-blue-700 transition duration-300" />
              </a>
            </div>

            {/* Contact Details */}
            <div className="mt-6 flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-2">
                <FaEnvelope size={20} className="text-gray-600" />
                <a href="mailto:your@email.com" className="text-sm text-gray-700 hover:text-gray-900">
                rzwn.md0@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone size={20} className="text-gray-600" />
                <a href="tel:+1234567890" className="text-sm text-gray-700 hover:text-gray-900">
                +919801912304 
                </a>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col items-center">
              <p className="text-sm text-gray-600">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
