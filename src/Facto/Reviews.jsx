import React from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
    
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
          Hear What Customers Say<br></br> About CASA!
        </h2>
        
        <p className="text-lg text-gray-600">
          Trusted by Thousands of Business Owners — See what our<br></br> satisfied
          customers have to say about CASA.
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
      
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-800 font-semibold">ADyen</span>
          </div>

          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            “Game-Changer for My Business!”
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            CASA has completely transformed my cash flow. As a restaurant owner,
            waiting for credit card payments used to be a struggle. Now, I get
            my funds within 24 hours, allowing me to pay suppliers and staff on
            time. The process is seamless, and the transparency in pricing is a
            huge plus!
          </p>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="JDyen"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <p className="text-gray-900 font-semibold">John Dyen</p>
              <p className="text-gray-500 text-sm">Restaurant Owner</p>
            </div>
          </div>
        </div>

        {/* Review Card 2 */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
          {/* Stars & Name */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-800 font-semibold">MSmith</span>
          </div>

          {/* Review Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            “Reliable & Transparent!”
          </h3>

          {/* Review Text */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!
          </p>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="MSmith"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <p className="text-gray-900 font-semibold">Maria Smith</p>
              <p className="text-gray-500 text-sm">Retail Store Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
