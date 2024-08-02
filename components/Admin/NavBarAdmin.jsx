import React from "react";

function Navbar() {
  return ( 
    <div className="w-full fixed z-50 ">
   {/* Large screen */}
    <div className="sm:flex lg:flex md:flex items-center justify-between p-4 px-7 hidden lg:block md:block bg-white">
      <a>
          <h1 className="text-2xl font-bold text-eternal-dark font-dancing ">
            Eternal Half
          </h1>
        </a>
      
      <div className="relative w-full max-w-xl mx-auto bg-white rounded-full flex items-center justify-center">
        <input
          placeholder="Search here"
          className="rounded-full w-full h-14 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-etrernal-light focus:border-etrernal-light"
          type="text"
          name="query"
          id="query"
        />
        <button
          type="submit"
          className="absolute inline-flex items-center h-10 px-4 py-2 text-sm
   text-white transition duration-150 ease-in-out 
   rounded-full outline-none right-3  bg-eternal-dark sm:px-6
    sm:text-base sm:font-medium hover:bg-eternal-dark 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eternal-light"
        >
          <svg
            className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>
      </div>
      
    </div>

    {/* Small screen */}
    <div className="sm:hidden block bg-white justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex-1 group">
          <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-eternal-dark">
            <h1 className="text-2xl font-bold text-eternal-dark font-dancing ">
              Eternal Half
            </h1>
          </a>
        </div>
      </div>

      <div className="p-6">
        <p className="text-md text-gray-300">Welcome Back</p>
       <h1 className="text-lg font-semibold text-gray-500">Admin Dashboard</h1>
      </div>
    </div>

    </div>
  );
}

export default Navbar;
