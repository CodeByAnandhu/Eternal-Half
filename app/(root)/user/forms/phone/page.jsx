'use client';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { updatePhone } from "@/lib/actions/userForm.action.js";
function phone() {
  const router = useRouter();
  const [phone , setPhone] = useState("");
   
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const { id, } = user;
    }
  }, [isLoaded, isSignedIn, user]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updatePhone({
        userId: user.id,
        phone,
      });
      toast.success("Updated Info");
      router.push("/user/userDashboard");
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data");
    }
  };


  return (
    <div className="w-full h-full flex">
      <div className="lg:flex flex-col hidden top-0 lg:w-96 h-screen bg-gray-50 p-4 py-9">
        <h1 className=" text-2xl font-semibold text-gray-700">
         Phone Number
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          {" "}
          Please provide accurate and honest details to ensure a meaningful and
          enjoyable experience on our platform.
        </p>
      </div>
    <div className="w-full h-full">
      
      <div className="lg:flex md:flex hidden  items-center justify-center w-full  p-8">
        <h1 className="font-dancing hidden md:block lg:block text-2xl font-semibold text-eternal-dark cursor-pointer ">
          Eternal Half
        </h1>
      </div>
      <ol
        className="flex lg:ml-[10rem] md:ml-[10rem] mt-7 ml-4 
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
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Interest&Thoughts
          </span>
        </li>
        <li
          className="flex md:w-full items-center after:content-[''] 
        after:w-full after:h-1 after:border-b after:border-gray-200 
        fter:border-1 after:hidden sm:after:inline-block after:mx-6
         xl:after:mx-10 dark:after:border-gray-700 text-eternal-dark"
        >
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
            Profile <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
          
        </li>
        <li className="flex items-center text-eternal-dark">
          <span className="me-2">6</span>
          Phone
        </li>
      </ol>
      

      <div
        className="flex items-center justify-center 
     md:ml-0 ml-0 h-[70vh] p-8" 
      >
        <div className="mx-auto w-full max-w-[550px]  flex flex-col justify-start">
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2 mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Enter Your Phone Number
                </label>
                <input
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Your Phone Number"
                  type="text"
                  name="phone"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                />
              </div>
            </div>
            <div className="w-full  flex justify-end">
              <button className="gap-3 hover:shadow-form rounded-full bg-eternal-dark lg:py-4 lg:px-10 md:py-3 md:px-8 px-5 py-3 text-center text-base font-semibold text-white outline-none flex justify-center items-center">
                Submit <FontAwesomeIcon icon={faArrowRight} className="w-4 " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
  }
export default phone;
