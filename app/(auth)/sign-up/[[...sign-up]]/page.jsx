import { SignUp } from "@clerk/nextjs";
import "../../../globals.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function Page() {
  return (
    <main className="flex items-center lg:p-10 md:p-10 bg-white justify-center w-screen h-screen md:gap-10  lg:gap-10">
      <div className="">
      {/* <FontAwesomeIcon icon={faArrowLeft} className="w-8" /> */}
        <SignUp/>
      </div>
      <div className="lg:flex md:flex hidden flex-col bg-eternal-light w-1/2 h-full rounded-[36px] items-center justify-center">
        <div className="md:text-3xl lg:text-4xl font-extrabold w-full ml-20 text-eternal-dark lg:mb-10">
          <h1>
            Get Started <br />
            to Find Your Better Half!
          </h1>
        </div>
        <img src="/gif/guitar.gif" alt="" />
      </div>
    </main>
  );
}
