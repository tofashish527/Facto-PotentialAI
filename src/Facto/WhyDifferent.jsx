import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiCreditCard } from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";
import {  HiShieldCheck } from "react-icons/hi2";
import { LuActivity } from "react-icons/lu";
import { MdOutlineCreditCardOff} from "react-icons/md";
import { SiVisa } from "react-icons/si";
import { TbTrendingUp } from "react-icons/tb";

const WhyDifferent = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">

      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Why casa different
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Why CASA Stands Out from the Rest
        </h2>
        <p className="text-gray-600 mt-4">
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-8 rounded-2xl shadow-sm">
        {/* Left Side */}
       <div className="relative space-y-6 w-[410px] bg-green-100 p-5 rounded-2xl">
  {/* First card */}
  <div className="flex justify-evenly w-80 mt-5 bg-white rounded-2xl p-4">
    <FaFeatherAlt size={35} className="rounded-full bg-green-100 p-2" />
    <div>
      <p className="font-semibold">Receive Money from card</p>
      <p className="text-xs text-gray-600">Cash Deposited Within 24 Hours</p>
    </div>
  </div>

  {/* Second card */}
  <div className="bg-white p-6 rounded-xl w-80 shadow mt-8">
    <p className="flex gap-2 mb-2 font-semibold text-2xl">
      <LuActivity
        className="rounded-full p-1 mt-1 bg-green-100"
        size={25}
      />
      Total sales : <span className="text-gray-800">$12,500</span>
    </p>

    <div className="flex p-5 items-end gap-4 mt-9">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => {
        const heights = ["h-10", "h-16", "h-18", "h-14", "h-24", "h-12", "h-13"]; // bar heights
        return (
          <div key={day} className="flex flex-col items-center relative">
            {/* Badge on tallest bar */}
            {idx === 4 && (
              <div className="absolute -top-12 bg-amber-100 text-gray-400 px-3 py-1 w-35 rounded-lg font-medium text-lg text-center">
                Highest sale
                <div className="flex gap-1 text-black justify-center text-xl">
                  <TbTrendingUp className="mt-0.5" /> $2,450
                </div>
              </div>
            )}

            {/* Bar */}
            <div
              className={`w-6 rounded-md ${
                idx === 4 ? "bg-green-800" : "bg-gray-300"
              } ${heights[idx]}`}
            ></div>

            {/* Day label */}
            <span className="text-xs text-gray-500 mt-1">{day}</span>
          </div>
        );
      })}
    </div>
  </div>

  {/* Third card */}
  <div className="absolute top-20 -right-60 bg-white p-6 rounded-xl shadow w-72">
    <p className="font-semibold">Top User</p>
    <div className="flex mt-2">
      <img
        src="https://randomuser.me/api/portraits/men/40.jpg"
        alt="user"
        className="w-8 h-8 rounded-full border-2 border-white -ml-0"
      />
      <img
        src="https://randomuser.me/api/portraits/women/41.jpg"
        alt="user"
        className="w-8 h-8 rounded-full border-2 border-white -ml-2"
      />
      <img
        src="https://randomuser.me/api/portraits/men/42.jpg"
        alt="user"
        className="w-8 h-8 rounded-full border-2 border-white -ml-2"
      />
      <img
        src="https://randomuser.me/api/portraits/men/40.jpg"
        alt="user"
        className="w-8 h-8 rounded-full border-2 border-white -ml-0"
      />
      <img
        src="https://randomuser.me/api/portraits/women/41.jpg"
        alt="user"
        className="w-8 h-8 rounded-full border-2 border-white -ml-2"
      />
    </div>

    <div className="bg-gray-200 mt-3 rounded-2xl p-4">
      <p className="text-sm text-gray-500">Enter Amount</p>
      <div className="flex justify-between">
        <p className="text-lg font-bold">$50000</p>
        <SiVisa size={30} />
      </div>
      <p className="text-sm text-gray-500">Discount rate : 10%</p>
    </div>

    <button className="mt-3 w-full px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm">
      See detail
    </button>
  </div>
</div>


        {/* Right Side */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            CASA offers instant, flexible funding from card transactions.
          </h3>
          <p className="text-gray-600 mb-6">
            CASA stands out by offering fast, flexible, and transparent funding
            for business owners who need immediate cash flow from credit card
            transactions. Here’s what makes us unique
          </p>

          <ul className="space-y-4">
  {[
    { text: "Instant Cash, No Waiting", icon: <BiCreditCard /> },
    { text: "No Hidden Fees, No Surprises", icon: <MdOutlineCreditCardOff /> },
    { text: "Seamless POS & Payment Processor", icon: <AiOutlineCreditCard /> },
    { text: "Secure & Compliant Transactions", icon: <HiShieldCheck /> },
  ].map((item, idx) => (
    <li key={idx} className="flex items-center gap-3">
      <span className="bg-green-100 text-green-700 p-2 rounded-full">
        {item.icon}
      </span>
      <span className="text-gray-800">{item.text}</span>
    </li>
  ))}
</ul>
          <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyDifferent;