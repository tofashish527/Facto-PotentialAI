import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + Socials */}
        <div>
          <h2 className="text-2xl font-bold text-black">FACTO</h2>
          <p className="text-sm text-black font-bold mb-2">Financial service</p>
          <p className="text-sm text-black mt-5 mb-2">
            CASA provides fast, reliable, and <br /> transparent factoring services, helping <br /> 
            business owners turn credit card <br /> transactions into instant cash flow.
          </p>
          <h3 className="mt-6 mb-3 font-semibold text-black">Follow us on</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-[#0F4E23] hover:text-green-800 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-[#0F4E23] hover:text-green-800 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-[#0F4E23] hover:text-green-800 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-[#0F4E23] hover:text-green-800 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-green-800 cursor-pointer">Services</li>
            <li className="hover:text-green-800 cursor-pointer">How it Works</li>
            <li className="hover:text-green-800 cursor-pointer">Why is Different</li>
            <li className="hover:text-green-800 cursor-pointer">Reviews</li>
            <li className="hover:text-green-800 cursor-pointer">Pricing</li>
            <li className="hover:text-green-800 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-green-800 cursor-pointer">Help Center</li>
            <li className="hover:text-green-800 cursor-pointer">FAQ</li>
            <li className="hover:text-green-800 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-green-800 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-green-800 cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Get in Touch</h3>
          <ul className="space-y-5">
            <li>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-[#0F4E23] mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">
                    123 Business Street, Suite 500, <br /> New York, NY 10001
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-[#0F4E23]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <span className="text-sm">+880 1700 000 000</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#0F4E23]" />
                <div>
                  <p className="font-medium">Email</p>
                  <span className="text-sm">support@facto.com</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" max-w-7xl mx-auto mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
  <div>
    Copyright © {new Date().getFullYear()} All rights reserved.
  </div>

  <div className="flex space-x-6 mb-4 md:mb-0">
    <a href="#" className="hover:text-lime-600 transition">Privacy</a>
    <a href="#" className="hover:text-lime-600 transition">Security</a>
    <a href="#" className="hover:text-lime-600 transition">Terms</a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
