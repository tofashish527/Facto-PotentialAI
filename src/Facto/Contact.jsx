import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top */}
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Contact
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          We’re Here to Help – Get in<br /> Touch with CASA
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by Thousands of Business Owners. See what our<br /> satisfied
          customers have to say about CASA.
        </p>
      </div>

      {/* Form + Info Section */}
      <div className="mt-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Form */}
        <div className="bg-white shadow rounded-2xl p-8">
          <h3 className="text-lg font-semibold mb-6 text-left">
            Have Questions? Feel Free to Reach Out!
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Business Name</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message*</label>
              <textarea
                placeholder="Write your opinion"
                rows="4"
                className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <button className="w-full bg-green-900 text-white py-3 rounded-full hover:bg-green-800 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Info Cards */}
        <div className="ml-30 flex flex-col gap-20 w-96 h-[400px] relative">
         
          <div className="bg-yellow-100 rounded-2xl p-6 relative z-10">
            <div className="bg-white w-80 rounded-2xl p-6 shadow text-left relative z-20">
              <div className="flex gap-3">
                <FaUsers size={25} className="bg-green-200 p-1 rounded-full" />
                <h3 className="font-semibold mb-4">Total user</h3>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold text-black rounded-full p-2 bg-gray-300">
                  25k+<br /> Users
                </p>
                <div className="flex mt-3 -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/40.jpg"
                    alt="user"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/41.jpg"
                    alt="user"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/42.jpg"
                    alt="user"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
              </div>

             <div className="w-full rounded-2xl bg-green-200 mb-3 p-3 mt-6">
  
  <p className="mb-2 font-bold text-sm">Monthly User</p>

  <div className="flex justify-end mb-1">
    <span className="text-sm font-semibold text-gray-700 mr-15">50%</span>
  </div>

  <div className="bg-white rounded-full h-4 overflow-hidden">
    <div className="bg-green-600 h-4 w-3/4 rounded-full"></div>
  </div>
</div>

            </div>

            {/* Total Balance Card*/}
            <div className="ml-35 mt-8 bg-white p-4 w-52 rounded-2xl shadow-md transform -skew-y-6 origin-top-left z-30">
              <p className="text-gray-600 text-sm">Total Balance</p>
              <p className="text-2xl font-bold">23,576.00</p>
              <div className="flex gap-3 mt-2">
                <div className="rounded-full border border-gray-300 bg-gray-300 p-1">
                  <AiOutlinePlus size={20} />
                </div>
                <button className="text-sm text-black px-3 py-1 rounded-lg">Add Number</button>
              </div>
            </div>
          </div>

          {/* Consultation*/}
          <div className="absolute -bottom-25 -left-30 bg-green-200 rounded-2xl items-center mx-auto p-6 shadow text-center z-40 w-64">
            <FiPhoneCall
              size={35}
              className="bg-green-400 rounded-full p-2 items-center mx-auto"
            />
            <p className="text-lg font-semibold mb-2">Call for consultation</p>
            <p className="text-gray-500 text-sm mb-4">or</p>
            <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-500 transition">
              Let’s connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
