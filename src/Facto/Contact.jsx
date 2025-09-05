import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Contact
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          We’re Here to Help – Get in Touch with CASA
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by Thousands of Business Owners. See what our satisfied
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message*</label>
              <textarea
                placeholder="Write your opinion"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <button className="w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Info Cards */}
        <div className="flex flex-col gap-6">
          {/* Total User Card */}
          <div className="bg-yellow-100 rounded-2xl p-6 shadow text-left">
            <h3 className="font-semibold mb-4">Total user</h3>
            <p className="text-sm text-gray-600">25k+ Users</p>

            {/* Avatars */}
            <div className="flex mt-2">
              <img
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-white"
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
            </div>

            {/* Progress */}
            <p className="mt-4 text-sm text-gray-600">Monthly user</p>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-green-600 w-1/2 h-3"></div>
            </div>
            <p className="text-right text-xs mt-1 text-gray-600">50%</p>
          </div>

          {/* Call for Consultation */}
          <div className="bg-green-50 rounded-2xl p-6 shadow text-center">
            <p className="text-lg font-semibold mb-2">📞 Call for consultation</p>
            <p className="text-gray-500 text-sm mb-4">or</p>
            <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-500 transition">
              Let’s connect
            </button>
          </div>

          {/* Balance Card */}
          <div className="bg-white rounded-2xl p-6 shadow text-left">
            <p className="text-sm text-gray-600">Total Balance</p>
            <p className="text-2xl font-bold">23,576.00</p>
            <button className="mt-2 text-xs bg-green-600 text-white px-3 py-1 rounded-lg">
              Add Number
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
