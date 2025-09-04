import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Logo + Socials */}
        <div>
          <h2 className="text-2xl font-bold text-black">FACTO</h2>
          <p className="text-sm text-black font-bold mb-2">Financial service</p>
          <p className="text-sm text-black mt-5 mb-2">CASA provides fast, reliable, and<br></br> transparent factoring services, helping<br></br> business owners turn credit card<br></br> transactions into instant   cash flow.</p>
          <h3 className="mt-6 mb-3 font-semibold text-black">Follow us on</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="rounded-2xl"><FaFacebookF color="#0F4E23"/></a>
            <a href="#" className="rounded-2xl"><FaTwitter color="#0F4E23"/></a>
            <a href="#" className="rounded-2xl"><FaInstagram color="#0F4E23" /></a>
            <a href="#" className=""><FaLinkedinIn color="#0F4E23" /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
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

        {/* Column 3: Support */}
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

        {/* Column 4: Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Get in Touch</h3>
          <ul className="space-y-5">
            <li className="items-start space-x-2">
                <div className="flex space-x-2">
                  <FaMapMarkerAlt className="mt-1" color="#0F4E23" />
                  <p>Address</p>
                </div>
              <p>123 Business Street, Suite <br></br>500,New York, NY 10001</p>
            </li>
            <li className="items-center space-x-2">
                <div className="flex space-x-2">
                   <FaPhoneAlt className="mt-1" color="#0F4E23" />
                   <p>Phone </p>
                </div>
              <span>+880 1700 000 000</span>
            </li>
            <li className=" items-center space-x-2">
                <div className="flex space-x-2">
                     <FaEnvelope className="mt-1" color="#0F4E23"/>
                     <p>Email</p>
                </div>
              <span>support@facto.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FACTO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
