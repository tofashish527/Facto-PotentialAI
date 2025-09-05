import React from "react";
import { FaShieldAlt, FaBolt, FaSyncAlt } from "react-icons/fa";
import { GoNote } from "react-icons/go";

const About = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 gap-12 items-start mb-12">
          
          {/* Left Side */}
          <div>
             <span className="bg-green-100 text-green-700 mb-6 px-4 py-1 rounded-full text-sm font-medium">
          About Casa Service
        </span>
            <h2 className="text-4xl md:text-4xl font-bold leading-tight text-gray-900">
              Revolutionizing Cash Flow <br /> for Business Owners!
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            <p className="text-gray-700 text-lg mb-3">
              Empowering businesses with faster cash access,{" "}
              <span className="font-semibold">CASA</span> provides a secure, fast,
              and flexible solution to get early payments for credit card sales.
            </p>

            <button className="px-2 py-2 w-30 bg-green-600 text-white rounded-full font-medium hover:bg-white hover:text-green-800 border transition">
              Join Now
            </button>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="flex flex-col md:flex-row gap-4">
         
          <div className="flex-1 p-5 bg-gray-200 text-black rounded-xl hover:text-white hover:bg-green-800 transition cursor-pointer">
              <h3 className="text-lg font-semibold ">Secure and Instant Cash 
Advances</h3>
<GoNote  className="text-green-800 rounded-full bg-green-100 p-2" size={30} />
            <p className="text-sm">
              No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly..
            </p>
          </div>

          
          <div className="flex-1 p-5 bg-gray-200 text-black hover:bg-green-800 hover:text-white rounded-xl transition cursor-pointer">
            <div className=" items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold">Transparent and Fair 
Pricing Process</h3>
              <FaBolt className="text-green-800 rounded-full bg-green-100 p-2" size={30} />
            </div>
            <p className=" text-sm">
              ANo Hidden Fees, No Surprises Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect..
            </p>
          </div>

         
          <div className="flex-1 p-5 bg-gray-200 text-black hover:bg-green-800 hover:text-white rounded-xl transition cursor-pointer">
            <div className="items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold">Flexible and Secure Payout options</h3>              <FaSyncAlt className="text-green-800 rounded-full bg-green-100 p-2" size={30} />
            </div>
            <p className=" text-sm">
              We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
