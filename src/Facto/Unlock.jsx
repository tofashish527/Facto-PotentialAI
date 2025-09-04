import React from "react";

const Unlock = () => {
  return (
    <section className="max-w-7xl mx-auto rounded-xl bg-green-800 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
       
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Unlock Instant Cash Flow for Your Business!
        </h1>

        
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Running a business shouldn’t mean waiting weeks for credit card
          payments to clear. With <span className="font-semibold">CASA</span>,
          you can convert your daily transactions into instant cash.
        </p>

        
        <button className="px-8 py-3 bg-amber-200 text-black hover:text-white rounded-full text-lg font-medium hover:bg-gray-900 transition">
          Let’s Get Started!
        </button>
      </div>
    </section>
  );
};

export default Unlock;
