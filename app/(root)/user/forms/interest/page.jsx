"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hobbyList } from "../../../../../static/hobby.js";
import { useState } from "react";
function ageAndgender() {
  const [inputValue, setInputValue] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [interests, setInterests] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filteredSuggestions = hobbyList.filter((interest) =>
        interest.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setInterests([...interests, suggestion]);
    setSuggestions([]);
  };

  return (
    <div className="w-full h-full">
      <div className="lg:flex md:flex hidden items-center justify-center w-full  p-8">
        <h1 className="font-dancing hidden md:block lg:block text-2xl font-semibold text-eternal-dark cursor-pointer lg:ml-72">
          Eternal Half
        </h1>
      </div>
      <ol
        className="flex lg:ml-[30rem] mt-7 ml-4 
       w-[50%]  text-sm font-medium text-center
        text-gray-500  dark:text-gray-400 sm:text-base"
      >
        <li
          className="flex md:w-full items-center text-eternal-dark
         dark:text-blue-500 sm:after:content-[''] 
         after:w-full after:h-1 after:border-b 
         after:border-gray-200 after:border-1 
         after:hidden sm:after:inline-block after:mx-6 
         xl:after:mx-10 dark:after:border-gray-700"
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="me-2">4</span>
            Interest&Thoughts
          </span>
        </li>
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 text-gray-400">
          <span className="me-2">5</span>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-eternal-dark text-gray-400">
            Profile <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex items-center text-gray-400">
          <span className="me-2">6</span>
          Preference
        </li>
      </ol>

      <div className="lg:flex flex-col hidden top-0 lg:w-96 h-full absolute bg-gray-50 p-8">
        <h1 className=" text-2xl font-semibold text-gray-700">
          Interest & Thoughts
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          {" "}
          Please provide accurate and honest details to ensure a meaningful and
          enjoyable experience on our platform.
        </p>
      </div>

      <div
        className="flex items-center justify-center 
      p-12 md:ml-0 ml-0 lg:ml-72 lg:mt-10"
      >
        <div className="mx-auto w-full max-w-[550px] bg-white ">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2 mb-5">
                <label className="mb block text-base font-medium text-[#07074D]">
                  Enter Your Interests
                </label>
                <p className="text-xs mb-3 text-[#898997d8]">
                  Enter atleast 3 interest
                </p>
                <input
                  name="start"
                  value={inputValue}
                  onChange={handleInputChange}
                  type="text"
                  min="18"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full px-5 p-3"
                  placeholder="eg. pets, food, etc"
                />
              </div>
            </div>

            {suggestions.length > 0 && (
              <div className="absolute z-10">
                <ul className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block md:w-64 lg:w-64 w-full px-5 p-3 ">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {interests.map((interest) => (
              <span className="text-eternal-dark mr-3 bg-eternal-light px-3 py-1 rounded-xl mb-4">
                {interest}
              </span>
            ))}

            <label className="mb block text-base font-medium text-[#07074D]">
              Answer your thoughts
            </label>
            <div className=" flex flex-wrap mt-4">
              <div class="grid sm:grid-cols-2 gap-2">
                <label class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                  Do you enjoy outdoor activities?
                  </span>
                </label>
                <label class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                  Are you a pet lover?
                  </span>
                </label>
                <label class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                  Is a sense of humor important to you in a partner?
                  </span>
                </label>
                <label class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                  Do you consider yourself an introvert?
                  </span>
                </label>
                <label class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                  Are you a morning person?
                  </span>
                </label>
              </div>
            </div>

            <div className="w-full  flex justify-end mt-8">
              <button
                className="gap-3 hover:shadow-form rounded-full
               bg-eternal-dark lg:py-4 lg:px-10 md:py-3 
               md:px-8 px-5 py-3 text-center text-base 
               font-semibold text-white outline-none 
               flex justify-center items-center"
              >
                Next <FontAwesomeIcon icon={faArrowRight} className="w-4 " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ageAndgender;
