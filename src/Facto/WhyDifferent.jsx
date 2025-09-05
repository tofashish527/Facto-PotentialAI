import React from "react";

const WhyDifferent = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
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

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-8 rounded-2xl shadow-sm">
        {/* Left Side - Chart & Card Info */}
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-xl">
            <p className="font-medium text-gray-800">
              Receive Money from card
            </p>
            <p className="text-gray-500 text-sm">
              Cash Deposited Within 24 Hours
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <p className="font-semibold text-lg">
              Total sales : <span className="text-gray-800">$12,500</span>
            </p>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg inline-block mt-2 font-medium">
              Highest sale ~ $2,450
            </div>
            <div className="flex items-end gap-2 mt-6">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, idx) => (
                  <div key={day} className="flex flex-col items-center">
                    <div
                      className={`w-6 rounded-md ${
                        idx === 4 ? "h-24 bg-green-400" : "h-12 bg-green-200"
                      }`}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1">{day}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border flex items-center justify-between">
            <div>
              <p className="font-semibold">Top User</p>
              <p className="text-sm text-gray-500">Enter Amount</p>
              <p className="text-lg font-bold">$50000</p>
              <p className="text-sm text-gray-500">Discount rate : 10%</p>
              <button className="mt-3 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                See detail
              </button>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="visa"
              className="h-8"
            />
          </div>
        </div>

        {/* Right Side - Features */}
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
              "Instant Cash, No Waiting",
              "No Hidden Fees, No Surprises",
              "Seamless POS & Payment Processor",
              "Secure & Compliant Transactions",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="bg-green-100 text-green-700 p-2 rounded-full">
                  ✓
                </span>
                <span className="text-gray-800">{feature}</span>
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