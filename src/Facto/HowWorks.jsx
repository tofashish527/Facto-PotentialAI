import { FaCheckCircle, FaFeatherAlt } from "react-icons/fa";
import { PiGreaterThanThin } from "react-icons/pi";

const HowWorks = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top */}
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          How it works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Simple & Fast Receive Your <br /> Payment in 3 Steps!
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Empowering businesses with faster cash access, CASA provides a secure, fast,
          and flexible solution to get early payments for credit card sales.
        </p>

        {/* Cards Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow p-6 text-left flex flex-col justify-between">
            <div className="bg-green-100 p-4 rounded-xl mb-4">
              <h3 className="text-lg font-semibold">Sign Up</h3>
              <div className="mt-2 space-y-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg px-3 py-2 text-sm bg-white"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-lg px-3 py-2 text-sm bg-white"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg px-3 py-2 text-sm bg-white"
                />
              </div>
            </div>
            <h4 className="font-semibold">Connect Your Business</h4>
            <p className="text-sm text-gray-600 mt-1">
              Sign up and link your credit card processor or POS system with CASA.
              We support all major payment providers.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-600 mr-2" />
                Fast approval & easy integration
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-600 mr-2" />
                No impact on your credit score
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow p-6 text-left flex flex-col justify-between">
            <div className="bg-amber-100 p-4 rounded-xl mb-4">
              <div className="flex items-center justify-evenly bg-white rounded-2xl p-2">
                <img
      src="https://randomuser.me/api/portraits/men/42.jpg"
      alt="user"
      className="w-8 h-8 rounded-full border-2 border-white -ml-2"
    />
                <div>
                  <h3 className="font-semibold">Maria Kosta</h3>
                  <p className="text-xs text-gray-600">Maria@mail.com</p>
                </div>
                <span className="text-green-600 font-bold">+ $10K</span>
              </div>
              <div className="mt-4 bg-white rounded-2xl p-4">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-700">Total balance</p>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    10% 
                  </span>
                </div>
                <div className="flex justify-between">
                    <p className="text-xl font-bold">$12000.00</p>
                    <p>discount rate</p>
                </div>
                
                <div className="flex justify-between items-center mt-2 text-sm">
                  <button className="bg-green-100 flex justify-between gap-8 w-full text-black px-3 py-1 rounded-lg text-xs">
                    See detail
                    <p className="flex gap-0"><PiGreaterThanThin /><PiGreaterThanThin /></p>
                  </button>
                </div>
              </div>
            </div>
            <h4 className="font-semibold">Transactions for Early Payment</h4>
            <p className="text-sm text-gray-600 mt-1">
              Every morning, your previous day’s credit card transactions are automatically
              submitted for funding.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-600 mr-2" />
                No waiting for 30-60 day settlements
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-600 mr-2" />
                Transparent discount rates
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow p-6 text-left flex flex-col justify-between">
            <div className="bg-green-100 p-4 rounded-xl mb-4">
                <div className="flex justify-evenly  bg-white rounded-2xl p-4">
                    <FaFeatherAlt size={35} className="rounded-full bg-green-100 p-2 "/>
                 <div>
                     <p className="font-semibold">Receive Money from card</p>
              <p className="text-xs text-gray-600">Cash Deposited Within 24 Hours</p>
                 </div>
                </div>
             
              
              <div className="bg-white p-4 w-full mt-3 rounded-2xl "> 
                <div className="flex justify-between items-center"> 
                    <p className="font-medium">Recent User</p>
                     <span className="text-green-600 text-xs cursor-pointer">View All</span> 
                     </div> 
                     <div className="flex mt-2">
                         <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white -ml-0" />
                          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white -ml-2" /> 
                          <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
                           <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white -ml-0" /> 
                           <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white -ml-2" /> 
                           <span className="-ml-2 text-sm bg-gray-200 px-2 py-1 rounded-full">9+</span>
                            </div>
              </div>
            </div>
            <h4 className="font-semibold">Receive Funds & Grow</h4>
            <p className="text-sm text-gray-600 mt-1">
              Every morning, your previous day’s credit card transactions are automatically
              submitted for funding.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-600 mr-2" />
                Same-day or next-day payouts
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-600 mr-2" />
                Flexible repayment from future sales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;