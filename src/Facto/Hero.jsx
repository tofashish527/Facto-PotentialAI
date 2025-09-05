
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheckCircle, FaCircle, FaFeatherAlt } from "react-icons/fa";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { LuActivity } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TbTilde, TbTrendingUp } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top*/}
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Fast, secure, hassle-free
        </span>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mt-4 leading-snug">
        Get Paid Faster{" "}
        <span className="inline-flex items-center mx-2">
        <TbTrendingUp className="bg-amber-300 p-1 rounded-full z-10"size={35}/>
        <FaCircle className="bg-green-950 p-1 rounded-full -ml-4" size={35}/> 
        </span>
        <span className="text-green-600">Instant Cash</span>
        <br />
        for Businesses!
        </h2>


        {/* text */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Stop waiting months for credit card payments. CASA helps business owners
          access cash instantly by converting card transactions into immediate funds.
        </p>
        <button className="mt-6 border border-green-900 bg-green-800 hover:bg-white hover:text-green-900 text-white font-medium px-6 py-3 rounded-full">
          Get Started
        </button>

        {/* Cards*/}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* C-1*/}
          <div className="bg-[#E0F0E5] rounded-2xl shadow p-6 text-left">
            <h3 className="font-semibold text-2xl flex items-center gap-2">
              <span className="bg-lime-300 text-2xl p-1 rounded-full"><HiSquare3Stack3D className=" p-1 rounded-full" size={25} /></span>
              Sales overview from Previous Day
            </h3>

            <div className="bg-white p-6 rounded-xl shadow mt-8">
            <p className="flex gap-2 mb-2 font-semibold text-2xl">
              <LuActivity className="rounded-full p-1 mt-1 bg-green-100" size={25}/>Total sales : <span className="text-gray-800">$12,500</span>
            </p>
           
               <div className="flex p-5 items-end gap-4 mt-9">
  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => {
    const heights = ["h-10", "h-16", "h-18", "h-14", "h-24", "h-12", "h-13"]; // different bar heights
    return (
      <div key={day} className="flex flex-col items-center relative">
        {/* Show badge only on the tallest bar */}
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

          <p className="w-full flex gap-2 mt-8 text-sm bg-lime-200 p-2 px-3 py-1 rounded-full w-fit">
                <TbTilde className="bg-green-700 p-1 rounded-full font-bold " size={25} color="white"/>Avg. sale: $104.16 / per transaction
              </p>
          </div>

          {/* C-2 */}
          <div className="bg-[#DAFFC2] rounded-2xl shadow p-6 text-left">
            <h3 className="font-semibold flex text-2xl items-center gap-2">
              <span className="bg-green-100 p-2 rounded-full"><BsFillLightningFill /></span>
              Factoring Possible Amount
            </h3>

            <div className="mt-12 bg-white p-3 rounded-2xl mx-auto w-50 text-center">
              <p className="text-sm text-gray-600">Available amount</p>
              <p className="text-2xl font-bold">$15,375 <span className="text-sm">USD</span></p>
              </div>

              <div className="mt-14 bg-white p-3 rounded-2xl mx-auto">
                <div className="flex gap-2 text-xl">
                    <MdOutlineAttachMoney size={35} className="bg-gray-300 rounded-full p-2" />
                    <p>Factored amount vs. remaining balance </p>
                </div>

               <div className="bg-gray-200 p-3 rounded-2xl mt-3">
                   <div className="mt-2 mb-2 flex  justify-between text-sm text-gray-600">
                <p>Factored balance: </p>
                <p className="text-xl text-black font-semibold">$11,531.25</p>
                </div>

              {/* <div className="mt-6 bg-white rounded-full h-4 overflow-hidden">
                <div className="bg-green-600 h-4 w-3/4 rounded-full"></div>
              </div> */}
              <div className="w-full mt-6">
  <div className="flex justify-end mb-1">
    <span className="text-sm font-semibold text-gray-700 mr-15">75%</span>
  </div>

  <div className="mt-1 bg-white rounded-full h-4 overflow-hidden">
    <div className="bg-green-600 h-4 w-3/4 rounded-full"></div>
  </div>
</div>
               </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-100 rounded-2xl shadow p-6 text-left">
            <h3 className="font-semibold text-2xl flex items-center gap-2">
              <span className="bg-white p-2 rounded-full"><FaFeatherAlt size={30} className="rounded-full p-1 "/></span>
              Secure & Streamlined Workflow
            </h3>

            <div className="mt-3">

            <div className="bg-white rounded-2xl mt-8 ml-18 p-4 w-55 shadow-md transform -skew-y-6 origin-top-left">
  <div className="flex justify-between items-center mb-2">
    <p className="font-medium">Recent User</p>
    <span className="text-green-600 text-xs cursor-pointer">View All</span>
  </div>

  <div className="flex items-center">
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
    <img
      src="https://randomuser.me/api/portraits/men/43.jpg"
      alt="user"
      className="w-8 h-8 rounded-full border-2 border-white -ml-2"
    />
    <img
      src="https://randomuser.me/api/portraits/women/44.jpg"
      alt="user"
      className="w-8 h-8 rounded-full border-2 border-white -ml-2"
    />
    <span className="-ml-2 text-sm bg-gray-200 px-2 py-1 rounded-full">9+</span>
  </div>
</div>

              
              
              <div className="mt-2 ml-35 bg-white p-4 w-50 rounded-2xl shadow-md transform skew-y-3 origin-top-left">
  <p className="text-gray-600 text-sm">Total Balance</p>
  <p className="text-2xl font-bold">23,576.00</p>
  <div className="flex gap-3 mt-2">
    <div className="rounded-full border border-gray-300 bg-gray-300 p-1">
      <AiOutlinePlus size={20} />
    </div>
    <button className="text-sm  text-black px-3 py-1 rounded-lg">
      Add Number
    </button>
  </div>
</div>


<div className="p-3 rounded-2xl flex justify-evenly bg-white mt-1 shadow-md transform skew-y-6 origin-top-left">
  <img
    src="https://randomuser.me/api/portraits/men/40.jpg"
    alt="user"
    className="w-10 h-10 mt-1 rounded-full border-2 border-white"
  />
  <div>
    <div className="flex font-bold justify-between">
      <p>Online</p>
      <p>+$10K</p>
    </div>
    <div className="flex justify-between gap-8 mt-1">
      <p>Tony Restaurent</p>
      <button className="p-1 ml-8 text-green-600 bg-gray-300 rounded-2xl">
        Confirm
      </button>
    </div>
  </div>
</div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
