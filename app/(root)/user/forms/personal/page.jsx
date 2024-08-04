"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUser } from "@/lib/actions/userForm.action";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react"; 
import { toast } from "sonner";
import { useRouter } from "next/navigation";


function AgeAndGender() {
 const router = useRouter();
  const [inputValue, setInputValue] = useState({
    dateOfBirth: "",
    lookingFor: "",
    preferredGender: "",
    is18OrOlder: null,
  });

  const [isOlder, setIsOlder] = useState(false);

  const { user, isLoaded, isSignedIn } = useUser();
  

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const { id, firstName, lastName, emailAddresses } = user;
      console.log("Email:", emailAddresses[0]?.emailAddress);
    }
  }, [isLoaded, isSignedIn, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isOlder) {
      toast.error("You must be at least 18 years old");
      return;
    }

    const formattedDateOfBirth = new Date(inputValue.dateOfBirth).toISOString();

    try {
      await createUser({
        userId: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: formattedDateOfBirth,
        lookingFor: inputValue.lookingFor,
      });

      router.push("/user/forms/location");
      toast.success("Updated Info");

    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data:");
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === "is18OrOlder" && value === "false") {
      setIsOlder(true);
    } else if (name === "is18OrOlder" && value === "true") {
      setIsOlder(false);
    }
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full">
      <div className="lg:flex md:flex hidden items-center justify-center w-full p-8">
        <h1 className="font-dancing hidden md:block lg:block text-2xl font-semibold text-eternal-dark cursor-pointer lg:ml-72">
          Eternal Half
        </h1>
      </div>
      <ol className="flex lg:ml-[30rem] mt-7 ml-10 w-[50%] text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="flex md:w-full items-center text-eternal-dark dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">1</span>
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="me-2">2</span>
            Location <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex items-center">
          <span className="me-2">3</span>
          Preference
        </li>
      </ol>

      <div className="lg:flex flex-col hidden top-0 lg:w-96 h-full absolute bg-gray-50 p-8">
        <h1 className="text-2xl font-semibold text-gray-700">Personal info</h1>
        <p className="mt-3 text-sm text-gray-500">
          {" "}
          Please provide accurate and honest details to ensure a meaningful and
          enjoyable experience on our platform.
        </p>
      </div>

      <div className="flex items-center justify-center p-12 md:ml-0 ml-0 lg:ml-72 lg:mt-10">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2 mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Select your gender
                </label>
                <select
                  onChange={handleInputChange}
                  name="preferredGender"
                  value={inputValue.preferredGender}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-6 py-3"
                >
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Date of Birth
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="date"
                    name="dateOfBirth"
                    value={inputValue.dateOfBirth}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2 mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Looking for
                </label>
                <select
                  onChange={handleInputChange}
                  name="lookingFor"
                  value={inputValue.lookingFor}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-6 py-[0.92rem]"
                >
                  <option value="">Select your preference</option>
                  <option value="casual dating">Casual Dating</option>
                  <option value="serious relationship">
                    Serious Relationship
                  </option>
                  <option value="friendship">Friendship</option>
                  <option value="networking">Networking</option>
                  <option value="travel companion">Travel Companion</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Are You 18 or Older?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    onChange={handleInputChange}
                    name="is18OrOlder"
                    value="true"
                    type="radio"
                    className="h-5 w-5"
                  />
                  <label className="pl-3 text-base font-medium text-[#07074D]">
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={handleInputChange}
                    name="is18OrOlder"
                    value="false"
                    type="radio"
                    className="h-5 w-5"
                  />
                  <label className="pl-3 text-base font-medium text-[#07074D]">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="gap-3 hover:shadow-form rounded-full bg-eternal-dark lg:py-4 lg:px-10 md:py-3 md:px-8 px-5 py-3 text-center text-base font-semibold text-white outline-none flex justify-center items-center"
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

export default AgeAndGender;
