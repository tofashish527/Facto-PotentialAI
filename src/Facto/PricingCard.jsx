import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ plan, rate, description, features }) => {
  return (
    <div className="bg-gray-100 border rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition w-full max-w-sm">
      {/* Plan Heading */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>

      {/* Rate */}
      <p className="text-3xl font-extrabold text-gray-900 mb-4">{rate}</p>

      {/* Get Started Button */}
      <button className="px-5 py-2 bg-amber-200 text-white rounded-full font-medium mb-4 hover:bg-green-700 transition">
        Get Started
      </button>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6">{description}</p>

      {/* What's Included Section */}
      <div className="bg-white p-3 rounded-xl">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included?</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-700">
              <FaCheck className="text-green-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
