import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  const features = [
    "24/7 Support",
    "Instant Fund Transfer",
    "Seamless POS Integration",
    "Real-Time Transaction Monitoring",
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="bg-green-100 text-green-700 px-4 py-1 text-center rounded-full text-sm font-medium ">
         Pricing
        </span>
        <h2 className="text-3xl font-bold">
          Simple, Transparent <br /> Pricing — No Hidden Fees!
        </h2>
        <h4 className="text-sm mt-2 text-gray-600">
          Trusted by Thousands of Business Owners. See what our satisfied customers have to say about CASA.
        </h4>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {/* Left Card */}
        <div className="flex-1 min-h-[450px] bg-gray-200  rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
            <p className="text-3xl font-extrabold mb-4">2% <span className="text-sm font-medium">discount rate</span></p>
            <button className="px-5 py-2 w-full bg-white text-black rounded-full font-medium mb-4 hover:bg-green-700 transition">
              Get Started
            </button>
            <p className="text-gray-600 text-sm mb-2">
              For businesses processing up to $10,000/month.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">What's Included?</h4>
            <ul className="space-y-2 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="rounded-full bg-amber-300 p-1">
                  <FaCheck className="text-green-600" /></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Card - Green */}
        <div className="flex-1 min-h-[450px] bg-green-800 text-white border-green-600 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition">
          <div>
            <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
            <p className="text-3xl font-extrabold mb-4">Custom Rate</p>
            <button className="px-5 py-2 bg-amber-100 text-black w-full rounded-full font-medium mb-4 hover:bg-green-100 transition">
              Get Started
            </button>
            <p className="text-white text-sm mb-6">
              Tailored for high-volume businesses.
            </p>
          </div>
          <div className="bg-white text-black p-3 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">What's Included?</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="rounded-full bg-amber-300 p-1">
                  <FaCheck className="text-green-600" /></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 min-h-[450px] bg-gray-200  rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition">
          <div>
            <h3 className="text-xl font-bold mb-2">Growth Plan</h3>
            <p className="text-3xl font-extrabold mb-4">1.5% <span className="text-sm font-medium">discount rate</span></p>
            <button className="px-5 py-2 w-full bg-white text-black rounded-full font-medium mb-4 hover:bg-green-700 transition">
              Get Started
            </button>
            <p className="text-gray-600 text-sm mb-6">
              For businesses processing $10,000 – $50,000/month.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">What's Included?</h4>
            <ul className="space-y-2 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="rounded-full bg-amber-300 p-1">
                  <FaCheck className="text-green-600" /></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
