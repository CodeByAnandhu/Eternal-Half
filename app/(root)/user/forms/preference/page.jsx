'use client';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { updatePreference } from "@/lib/actions/userForm.action.js";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function preference() {
  const router = useRouter();
  const [preferredGender , setPreferredGender] = useState("");
  const [preferredAgeFrom , setPreferredAgeFrom] = useState("");
  const [preferredAgeTo , setPreferredAgeTo] = useState("");

  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const { id, } = user;
    }
  }, [isLoaded, isSignedIn, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(preferredAgeFrom < 18 || preferredAgeTo < 18 ){
      toast.error("Age should be greater than 18");
      return;
    }
    try {
      await updatePreference({
        userId: user.id,
        preferredGender,
        preferredAgeFrom,
        preferredAgeTo,
      });
      toast.success("Updated Info");
      router.push("/user/forms/interest");
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data");
    }
  };
  return (
    <div className="w-full h-full">
        <div className="lg:flex md:flex hidden items-center justify-center w-full  p-8">
        <h1 className="font-dancing hidden md:block lg:block text-2xl font-semibold text-eternal-dark cursor-pointer lg:ml-72">
          Eternal Half
        </h1>
      </div>
      <ol className="flex lg:ml-[30rem] mt-7 ml-10 
       w-[50%]  text-sm font-medium text-center
        text-gray-500  dark:text-gray-400 sm:text-base">
        <li className="flex md:w-full items-center text-eternal-dark
         dark:text-blue-500 sm:after:content-[''] 
         after:w-full after:h-1 after:border-b 
         after:border-gray-200 after:border-1 
         after:hidden sm:after:inline-block after:mx-6 
         xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-eternal-dark text-eternal-dark">
          <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Location <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex items-center text-eternal-dark">
          <span className="me-2">3</span>
          Preference
        </li>
      </ol>

      <div className="lg:flex flex-col hidden top-0 lg:w-96 h-full absolute bg-gray-50 p-8">
        <h1 className=" text-2xl font-semibold text-gray-700">Preference</h1>
        <p className="mt-3 text-sm text-gray-500"> Please provide accurate and honest details to ensure a meaningful and enjoyable experience on our platform.
        </p>
      </div>
      
      <div className="flex items-center justify-center 
      p-12 md:ml-0 ml-0 lg:ml-72 lg:mt-10">
        <div className="mx-auto w-full max-w-[550px] bg-white ">
          <form>
            <div className="-mx-3 flex flex-wrap">
                
              <div className="w-full px-3 sm:w-1/2 mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Preferred Gender</label>
                <select
                  onChange={(e) => setPreferredGender(e.target.value)}
                  id="preferredGender"
                  className="bg-white border border-gray-300
                     text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500
                      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                       dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 
                        px-6 py-3"
                >
                  <option>Select your Preference</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
             
            </div>
            

            <div className=" flex flex-wrap items-center lg:gap-5 md:gap-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Preferred Age Range</label>
            <div id="ageRange"  className="flex items-center">
              <div className="relative">
                
                <input onChange={(e)=>setPreferredAgeFrom(e.target.value)}  type="number" min="18" max="100" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-3" placeholder="Enter age from"/>
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                
              <input onChange={(e)=>setPreferredAgeTo(e.target.value)} type="number" min="18" max="100" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-3" placeholder="Enter age to"/>
            </div>
            </div>

            </div>

          
            <div className="w-full  flex justify-end mt-24">
              <button onClick={handleSubmit} className="gap-3 hover:shadow-form rounded-full
               bg-eternal-dark lg:py-4 lg:px-10 md:py-3 
               md:px-8 px-5 py-3 text-center text-base 
               font-semibold text-white outline-none 
               flex justify-center items-center">
                Next <FontAwesomeIcon icon={faArrowRight} className="w-4 " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default preference;
