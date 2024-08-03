"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function ageAndgender() {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [isEventListenerAdded, setIsEventListenerAdded] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviewUrl(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setImagePreviewUrl("");
    }
  };

  const handleImagePreviewClick = () => {
    document.getElementById("upload").click();
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
          <span className="me-2">5</span>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-eternal-dark ">
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
          Profile Informations
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
            <div className="-mx-3 flex flex-wrap ">
              <div className="w-full px-3 sm:w-1/2 mb-5">
                <label className="mb block text-base font-medium text-[#07074D]">
                  Enter Your About
                </label>
                <p className="text-xs mb-3 text-[#898997d8]">
                  Maximum 50 Words
                </p>
                <textarea
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  name="about"
                  id="about"
                  placeholder="Enter your about"
                ></textarea>
              </div>

              <section className=" items-center">
              <label className="mb block text-base font-medium text-[#07074D] mb-5">
                  Upload Your Profile Picture
                </label>
              <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
                <div className="px-4 py-6">
                  <div
                    id="image-preview"
                    className={`max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer ${
                      imagePreviewUrl
                        ? ""
                        : "h-48 flex justify-center items-center"
                    }`}
                    onClick={
                      !isEventListenerAdded ? handleImagePreviewClick : null
                    }
                  >
                    <input
                      id="upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {imagePreviewUrl ? (
                      <img
                        src={imagePreviewUrl}
                        className="max-h-48 rounded-lg mx-auto"
                        alt="Image preview"
                      />
                    ) : (
                      <label htmlFor="upload" className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-8 h-8 text-gray-700 mx-auto mb-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                          Upload picture
                        </h5>
                        <p className="font-normal text-sm text-gray-400 md:px-6">
                          Choose photo size should be less than{" "}
                          <b className="text-gray-600">2mb</b>
                        </p>
                        
                        <span
                          id="filename"
                          className="text-gray-500 bg-gray-200 z-50"
                        >
                          {file && file.name}
                        </span>
                      </label>
                    )}
                  </div>
                
                </div>
              </div>
                </section>
            </div>


            <div className="w-full flex justify-end mt-8 lg:mt-[-70px] lg:ml-28 md:mt-[-70px]">
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
